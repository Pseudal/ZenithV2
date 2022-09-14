<?php

namespace App\Controller\admin;

use Gumlet\ImageResize;
use App\Entity\ClientImage;
use App\Form\ClientImageType;
use App\Repository\ClientRepository;
use App\Repository\ClientImageRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('admin/clients/image')]
class ClientImageController extends AbstractController
{
    #[Route('/list/{id}', name: 'admin_clientImage_index', methods: ['GET'])]
    public function index(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session): Response
    {
        $pres = [];
        $id = $request->get('id');
        if($session->get('fromclient')){
            $clientid = $session->get('clientid');
        }else{
            $clientid = 0;
        }

        
        $thisEntity = $clientImageRepository->findLast();
        if($thisEntity){
            $pres[1] = $clientImageRepository->checkHeader($thisEntity[0]->getClient()->getId());
            $pres[2] = $clientImageRepository->checkSecondaire($thisEntity[0]->getClient()->getId());
            $pres[3] = $clientImageRepository->checkFocus($thisEntity[0]->getClient()->getId());
        } else {
            $pres[1] = null;
            $pres[2] = null;
            $pres[3] = null;
        }


        return $this->render('admin/client_image/index.html.twig', [
            'from' => $session->get('fromclient'),
            'clientid' => $clientid,
            'projet_images' => $clientImageRepository->findByExampleField($id),
            'id' => $request->get('id'),
            'projet' => $client->findOneBySomeField($id),
            'presentation' => $pres,
        ]);
    }

    #[Route('/new/{id}', name: 'admin_clientImage_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ClientImageRepository $clientImageRepository, ClientRepository $client): Response
    {

        $returnid = $request->get('id'); //! sert à recuperer l'id du projet actuel via l'url
    
        return $this->render('admin/client_image/new.html.twig', [
            'return' => $returnid,
        ]);
    }

    #[Route('/{id}', name: 'admin_clientImage_show', methods: ['GET'])]
    public function show(ClientImage $clientImage): Response
    {
        return $this->render('admin/client_image/show.html.twig', [
            'client_image' => $clientImage,
        ]);
    }

    #[Route('/del/{id}', name: 'admin_clientImage_delete', methods: ['POST'])]
    public function delete(Request $request, ClientImage $clientImage, ClientImageRepository $clientImageRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$clientImage->getId(), $request->request->get('_token'))) {
            $clientImageRepository->remove($clientImage, true);
        }

        return $this->redirectToRoute('admin_clientImage_index', ['id' => $clientImage->getClient()->getId()], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/edit', name: 'admin_clientImage_edit', methods: ['GET', 'POST'])]
    public function ImageEdit(Request $request, ClientImage $clientImage, ClientImageRepository $clientImageRepository): Response
    {

        return $this->render('admin/client_image/edit.html.twig', [
            'projet_image' => $clientImage->getImage(),
            'imageId' => $clientImage->getId(),
            'return' => $request->get('id'),
        ]);
    }

    //!Services!//

    #[Route('/{num}/newupload', name: 'admin_clientImage_upload', methods: ['GET', 'POST'])]
    public function ImageUpload(Request $request, ClientImageRepository $clientImageRepository, ClientRepository $clientRepository): Response
    {
        $returnid = $request->get('num');
        $thisprojet = $clientRepository->find($returnid);
        $output = array('uploaded' => false);

        $file = $request->files->get('file');

        function HandleError($th, $clientImageRepository, $results, $projetImage){
            $clientImageRepository->remove($projetImage, true);
            $filesystem = new Filesystem();
            $filesystem->remove(
                ['images/imageclient/'.$results[0]->getImage()],
            );
            $clientImageRepository->remove($results[0]->getID(), true);
            return new JsonResponse([
                'error' => "fichier incompatible"
            ], 500);
        }
        
        if(isset($file)){
            try {
                $projetImage = new ClientImage();
                $projetImage->setClient($thisprojet)->setHeader(false)->setSecondaire(false)->setimageprecision(false)->setVisible(true);
                $projetImage->setImageFile($file);
                $clientImageRepository->add($projetImage, true);
                $results = $clientImageRepository->findLast();
        
                
                //changer taille image
                try {
                    //Je resize l'image
                    $image = new ImageResize($results[0]->getImageFile());
                    $image->scale(75);
                    $image->save('images/imageclient/'.$results[0]->getImage());
                } 
                catch (\Throwable $th) 
                {
                    HandleError($th, $clientImageRepository, $results, $projetImage);
                }
            
                $output['uploaded'] = true;
                $output['fileName'] = true;
            } catch (\Throwable $th) {
                return new JsonResponse([
                    'error' => $th
                ], 500);
            }
        }

        return new JsonResponse($output);

    }

    #[Route('/admin_clientImage_editor/{id}', name: 'admin_clientImage_editor', methods: ['GET', 'POST'])]
    public function ImageEditor(Request $request, ClientImageRepository $clientImageRepository, ManagerRegistry $doctrine, ClientImage $clientImage): Response
    {       //$this_image = $projetImageRepository->find($id);

        $msg = "Envoyé avec succés";
        $data = $request->get('data');

        if(isset($data)){
            try {
                $thisimage = $clientImageRepository->find($request->get('id'));
                $nom = $thisimage->getImage();


                $filesystem = new Filesystem();

                $base64 = $data;

                $base64clean = substr($base64, strpos($base64, ',') + 1);
    
            
                $filesystem->remove(
                    ['images/imageprojet/'.$nom],
                );

                $entityManager = $doctrine->getManager();
                $clientImage->setImage($nom);
                $entityManager->flush();
                
                $image = ImageResize::createFromString(base64_decode($base64clean));
                $image->scale(100);
                $image->save('images/imageclient/'.$nom);

            } catch (\Throwable $th) {
                $msg = $th->getMessage();
                return new JsonResponse([
                    'error' => $msg
                ], 500);
            }

        }
  
        return new JsonResponse(array('data' => $msg));
    }

    //try 

    #[Route('/setheaderclient/{id}', name: 'setheaderclient', methods: ['GET', 'POST'])]
    public function setheaderclient(ClientImageRepository $projetImageRepository, Request $request, ClientRepository $projet, Session $session, ManagerRegistry $doctrine): Response
    {

        $id = $request->request->get('id');
        $entityManager = $doctrine->getManager();
        $thisEntity = $entityManager->getRepository(ClientImage::class)->find($id);
        $checkHeader = $projetImageRepository->checkHeader($thisEntity->getClient()->getId());

        if (!$thisEntity) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }

        if($checkHeader && ($checkHeader->getId() != $thisEntity->getId())){            
            $checkHeader->setHeader(0);
            $thisEntity->setHeader(1);
            $entityManager->flush();
            return new JsonResponse(['data' => "true", 'msg' => $checkHeader->getId()]);
        }else{
            if($thisEntity->isHeader()){
                $thisEntity->setHeader(0);
                $entityManager->flush();
                return new JsonResponse(['data' => "false"]);
            }else{
                $thisEntity->setHeader(1);
                $entityManager->flush();
                return new JsonResponse(['data' => "true"]);
            }
        }
    } 
    #[Route('/setsecondaireclient/{id}', name: 'setsecondaireclient', methods: ['GET', 'POST'])]
    public function setsecondaireclient(ClientImageRepository $projetImageRepository, Request $request, ClientRepository $projet, Session $session, ManagerRegistry $doctrine): Response
    {
        $id = $request->request->get('id');
        $entityManager = $doctrine->getManager();
        $thisEntity = $entityManager->getRepository(ClientImage::class)->find($id);
        $checkHeader = $projetImageRepository->checkSecondaire($thisEntity->getClient()->getId());

        if (!$thisEntity) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }

        if($checkHeader && ($checkHeader->getId() != $thisEntity->getId())){            
            $checkHeader->setSecondaire(0);
            $thisEntity->setSecondaire(1);
            $entityManager->flush();
            return new JsonResponse(['data' => "true", 'msg' => $checkHeader->getId()]);
        }else{
            if($thisEntity->isSecondaire()){
                $thisEntity->setSecondaire(0);
                $entityManager->flush();
                return new JsonResponse(['data' => "false"]);
            }else{
                $thisEntity->setSecondaire(1);
                $entityManager->flush();
                return new JsonResponse(['data' => "true"]);
            }
        }
    } 

    #[Route('/setfocusclient/{id}', name: 'setfocusclient', methods: ['GET', 'POST'])]
    public function setfocusclient(ClientImageRepository $projetImageRepository, Request $request, ClientRepository $projet, Session $session, ManagerRegistry $doctrine): Response
    {

        $id = $request->request->get('id');
        $entityManager = $doctrine->getManager();
        $thisEntity = $entityManager->getRepository(ClientImage::class)->find($id);
        $checkHeader = $projetImageRepository->checkFocus($thisEntity->getClient()->getId());

        try {
            if (!$thisEntity) {
                throw $this->createNotFoundException(
                    'No product found for id '.$id
                );
            }

            if($checkHeader && ($checkHeader->getId() != $thisEntity->getId())){            
                $checkHeader->setImagePrecision(0);
                $thisEntity->setImagePrecision(1);
                $entityManager->flush();
                return new JsonResponse(['data' => "true", 'msg' => $checkHeader->getId()]);
            }else{
                if($thisEntity->isImagePrecision()){
                    $thisEntity->setImagePrecision(0);
                    $entityManager->flush();
                    return new JsonResponse(['data' => "false"]);
                }else{
                    $thisEntity->setImagePrecision(1);
                    $entityManager->flush();
                    return new JsonResponse(['data' => "true"]);
                }
            }

        } catch (\Throwable $th) {
            return new JsonResponse(['data' => $th]);
        }
    } 

    #[Route('/setvisibleclient/{id}', name: 'setvisibleclient', methods: ['GET', 'POST'])]
    public function setvisibleclient(ClientImageRepository $projetImageRepository, Request $request, ClientRepository $projet, Session $session, ManagerRegistry $doctrine): Response
    {

        $id = $request->request->get('id');
        $entityManager = $doctrine->getManager();
        $thisEntity = $entityManager->getRepository(ClientImage::class)->find($id);

        if (!$thisEntity) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }

            if($thisEntity->isVisible()){
                $thisEntity->setVisible(0);
                $entityManager->flush();
                return new JsonResponse(['data' => "false"]);
            }else{
                $thisEntity->setVisible(1);
                $entityManager->flush();
                return new JsonResponse(['data' => "true"]);
            }
    } 

    #[Route('/multideleteclient/clientimage', name: 'multideleteclient', methods: ['GET', 'POST'])]
    public function multidelete(ClientImageRepository $projetImageRepository, Request $request, ClientRepository $projet, Session $session): Response
    {
        $data = $request->get('data');
        if(isset($data)){
            try {
                foreach($data as $d){

                    $thisentity = $projetImageRepository->getOneById($d);
                    $projetImageRepository->remove($thisentity, true);

                }
            } catch (\Throwable $th) {
                return new JsonResponse(['error' => $th]);
            }
            return new JsonResponse(['data' => "reussi"]);
        }
        return new JsonResponse(['error' => "erreur pendant l'envoi au serveur"]);
    } 
}
