<?php

namespace App\Controller\admin;

use App\Service\Test;
use \Gumlet\ImageResize;
use App\Entity\ProjetImage;
use App\Form\ProjetImageType;
use Doctrine\ORM\Mapping\Entity;
use App\Repository\ProjetRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ProjetImageRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Path;

#[Route('/admin/projet/image')]
class ProjetImageController extends AbstractController
{

    #[Route('/list/{id}', name: 'admin_projetImage_index', methods: ['GET'])]
    public function ImageList(ProjetImageRepository $projetImageRepository, Request $request, ProjetRepository $projet, Session $session, ProjetRepository $projetRepository): Response
    {
        $pres = [];
        $id = $request->get('id');
        $thisproject = $projetRepository->find(($request->get('id')));

        
        $thisEntity = $projetImageRepository->findLast();
        if($thisEntity){
            $pres[1] = $projetImageRepository->checkHeader($thisEntity[0]->getProjet()->getId());
            $pres[2] = $projetImageRepository->checkSecondaire($thisEntity[0]->getProjet()->getId());
            $pres[3] = $projetImageRepository->checkFocus($thisEntity[0]->getProjet()->getId());
        } else {
            $pres[1] = null;
            $pres[2] = null;
            $pres[3] = null;
        }


        return $this->render('admin/projet_image/index.html.twig', [
            'from' => $session->get('fromclient'),
            'projet_images' => $projetImageRepository->findByExampleField($id),
            'id' => $thisproject->getClient()->getId(),
            'projet' => $projet->findOneBySomeField($id),
            'presentation' => $pres,
        ]);
    }

    #[Route('/new/{id}', name: 'admin_projetImage_new', methods: ['GET', 'POST'])]
    public function new(Request $request, Session $session): Response
    {

        $returnid = $request->get('id'); //! sert à recuperer l'id du projet actuel via l'url


        return $this->render('admin/projet_image/new.html.twig', [
            'from' => $session->get('fromclient'),
            'return' => $returnid,
        ]);
    }
    
    #[Route('/admin_projetImage_upload/{id}', name: 'admin_projetImage_upload', methods: ['GET', 'POST'])]
    public function uploadProjet(ProjetImageRepository $projetImageRepository, Request $request, projetRepository $projetRepository): Response
    {
        $returnid = $request->get('id');
        $thisprojet = $projetRepository->findOneBySomeField($returnid);

        $output = array('uploaded' => false);

        $file = $request->files->get('file');

        function HandleError($th, $projetImageRepository, $results, $projetImage){
            $projetImageRepository->remove($projetImage, true);
            $filesystem = new Filesystem();
            $filesystem->remove(
                ['images/imageprojet/'.$results[0]->getImage()],
            );
            $projetImageRepository->remove($results[0]->getID(), true);
            return new JsonResponse([
                'error' => "fichier incompatible"
            ], 500);
        }
        
        if(isset($file)){
            try {
                $projetImage = new ProjetImage();
                $projetImage->setProjet($thisprojet)->setHeader(false)->setSecondaire(false)->setFocus(false)->setVisible(true);
                $projetImage->setImageFile($file);
                $projetImageRepository->add($projetImage, true);
                $results = $projetImageRepository->findLast();
        
                
                //changer taille image
                try {
                    //Je resize l'image
                    $image = new ImageResize($results[0]->getImageFile());
                    $image->scale(75);
                    $image->save('images/imageprojet/'.$results[0]->getImage());
                } 
                catch (\Throwable $th) 
                {
                    HandleError($th, $projetImageRepository, $results, $projetImage);
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
    


    #[Route('/show/{id}', name: 'admin_projetImage_show', methods: ['GET'])]
    public function show(ProjetImage $projetImage): Response
    {
        return $this->render('admin/projet_image/show.html.twig', [
            'projet_image' => $projetImage,
        ]);
    }


    #[Route('/edit/{id}', name: 'admin_projetImage_edit', methods: ['GET', 'POST'])]
    public function edit( ProjetImage $projetImage): Response
    {

        return $this->render('admin/projet_image/edit.html.twig', [
            'projet_image' => $projetImage->getImage(),
            'imageId' => $projetImage->getId(),
            'return' => $projetImage->getProjet()->getId(),
        ]);
    }
    
    #[Route('/admin_projetImage_editor/{id}', name: 'admin_projetImage_editor', methods: ['GET', 'POST'])]
    public function uploadProjetEdit(ProjetImageRepository $projetImageRepository, Request $request, ProjetImage $projetImage, ManagerRegistry $doctrine): Response
    {

        $msg = "Envoyé avec succés";
        $data = $request->get('data');

        if(isset($data)){
            try {
                $thisimage = $projetImageRepository->find($request->get('id'));
                $nom = $thisimage->getImage();


                $filesystem = new Filesystem();


                $base64 = $data;

                $base64clean = substr($base64, strpos($base64, ',') + 1);
    
            
                $filesystem->remove(
                    ['images/imageprojet/'.$nom],
                );

                $entityManager = $doctrine->getManager();
                $projetImage->setImage($nom);
                $entityManager->flush();
                
                $image = ImageResize::createFromString(base64_decode($base64clean));
                $image->scale(100);
                $image->save('images/imageprojet/'.$nom);

            } catch (\Throwable $th) {
                $msg = $th->getMessage();
                return new JsonResponse([
                    'error' => $msg
                ], 500);
            }

        }
  
        return new JsonResponse(array('data' => $msg));
    }

    #[Route('/delete/{id}', name: 'admin_projetImage_delete', methods: ['POST'])]
    public function delete(Request $request, ProjetImage $projetImage, ProjetImageRepository $projetImageRepository, Session $session): Response
    {
        if ($this->isCsrfTokenValid('delete'.$projetImage->getId(), $request->request->get('_token'))) {
            $projetImageRepository->remove($projetImage, true);
        }
        if( $session->get('fromclient'))
            return $this->redirectToRoute('admin_projetImage_indexfromclient', ['id' => $projetImage->getProjet()->getId() ], Response::HTTP_SEE_OTHER);
        else
            return $this->redirectToRoute('admin_projetImage_index', ['id' => $projetImage->getProjet()->getId()], Response::HTTP_SEE_OTHER);
    }

    #[Route('/setheader/{id}', name: 'setheader', methods: ['GET', 'POST'])]
    public function setheader(ProjetImageRepository $projetImageRepository, Request $request, ProjetRepository $projet, Session $session, ManagerRegistry $doctrine): Response
    {

        $id = $request->request->get('id');
        $entityManager = $doctrine->getManager();
        $thisEntity = $entityManager->getRepository(ProjetImage::class)->find($id);
        $checkHeader = $projetImageRepository->checkHeader($thisEntity->getProjet()->getId());

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

    #[Route('/setsecondaire/{id}', name: 'setsecondaire', methods: ['GET', 'POST'])]
    public function setsecondaire(ProjetImageRepository $projetImageRepository, Request $request, ProjetRepository $projet, Session $session, ManagerRegistry $doctrine): Response
    {
        $id = $request->request->get('id');
        $entityManager = $doctrine->getManager();
        $thisEntity = $entityManager->getRepository(ProjetImage::class)->find($id);
        $checkHeader = $projetImageRepository->checkSecondaire($thisEntity->getProjet()->getId());

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

    #[Route('/setfocus/{id}', name: 'setfocus', methods: ['GET', 'POST'])]
    public function setfocus(ProjetImageRepository $projetImageRepository, Request $request, ProjetRepository $projet, Session $session, ManagerRegistry $doctrine): Response
    {

        $id = $request->request->get('id');
        $entityManager = $doctrine->getManager();
        $thisEntity = $entityManager->getRepository(ProjetImage::class)->find($id);
        $checkHeader = $projetImageRepository->checkFocus($thisEntity->getProjet()->getId());

        if (!$thisEntity) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }

        if($checkHeader && ($checkHeader->getId() != $thisEntity->getId())){            
            $checkHeader->setFocus(0);
            $thisEntity->setFocus(1);
            $entityManager->flush();
            return new JsonResponse(['data' => "true", 'msg' => $checkHeader->getId()]);
        }else{
            if($thisEntity->isFocus()){
                $thisEntity->setFocus(0);
                $entityManager->flush();
                return new JsonResponse(['data' => "false"]);
            }else{
                $thisEntity->setFocus(1);
                $entityManager->flush();
                return new JsonResponse(['data' => "true"]);
            }
        }
    } 

    #[Route('/setvisible/{id}', name: 'setvisible', methods: ['GET', 'POST'])]
    public function setvisible(ProjetImageRepository $projetImageRepository, Request $request, ProjetRepository $projet, Session $session, ManagerRegistry $doctrine): Response
    {

        $id = $request->request->get('id');
        $entityManager = $doctrine->getManager();
        $thisEntity = $entityManager->getRepository(ProjetImage::class)->find($id);

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

    #[Route('/multidelete/projetimage', name: 'multidelete', methods: ['GET', 'POST'])]
    public function multidelete(ProjetImageRepository $projetImageRepository, Request $request, ProjetRepository $projet, Session $session): Response
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
