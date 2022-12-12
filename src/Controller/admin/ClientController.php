<?php

namespace App\Controller\admin;

use App\Entity\Client;
use App\Form\ClientType;
use App\Repository\ClientRepository;
//use App\Repository\TagClientRepository;
use App\Repository\ProjetRepository;
use App\Repository\SecteurRepository;
use App\Repository\CategorieRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('admin/client')]
class ClientController extends AbstractController
{

    #[Route('/', name: 'admin_client_index', methods: ['GET'])]
    public function index(ClientRepository $clientRepository, Session $session): Response
    {
        $session->set('fromclient', true);
        return $this->render('admin/client/index.html.twig', [
            'clients' => $clientRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'admin_client_new', methods: ['GET', 'POST'])]
    public function new(ClientRepository $clientRepository, ProjetRepository $p, SecteurRepository $secteur, CategorieRepository $c): Response
    {
        return $this->render('admin/client/new.html.twig', [
            "nullProjet" => $p->getNull(),
            'client' => $clientRepository->findAll(),
            'secteurs' => json_encode($secteur->getAllArray()),
            "categories" => $c->getAllArray(),
        ]);
    }


    #[Route('/{id}', name: 'admin_client_show', methods: ['GET'])]
    public function show(Client $client): Response
    {
        return $this->render('admin/client/show.html.twig', [
            'client' => $client,
        ]);
    }

    #[Route('/{id}/edit', name: 'admin_client_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ClientRepository $clientRepository, SecteurRepository $secteur, CategorieRepository $c): Response
    {
        $id = 0;
        $test = $clientRepository->find(($request->get('id')));
        $thiscat = [];
        if($test->getCategorie()){
        foreach($test->getCategorie() as $categorie) {

            $value = [
                'value' => $categorie->getId(),
                "nom" => $categorie->getCategorie()
            ];
            array_push($thiscat, $value);

        }
    }
        return $this->render('admin/client/edit.html.twig', [
            'projet' => $clientRepository->find($request->get('id')),
            'id' => $id,
            "categories" => $c->getAllArray(),
            "thiscat" => $thiscat,
            'secteurs' => json_encode($secteur->getAllArray()),
        ]);
    }

    #[Route('/{id}', name: 'admin_client_delete', methods: ['POST'])]
    public function delete(Request $request, Client $client, ClientRepository $clientRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$client->getId(), $request->request->get('_token'))) {
            $clientRepository->remove($client, true);
        }

        return $this->redirectToRoute('admin_client_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/upload/clientupload', name: 'admin_client_upload', methods: ['POST'])]
    public function uploader(ClientRepository $clientR ,Request $request, SecteurRepository $s, CategorieRepository $c): Response
    {
        //INFO WIP

        $data = json_decode($request->request->get('data'));  
        $logo = $request->files->get('logo'); 
        //gere le secteur
        if(!$data->secteur){
            return new JsonResponse(['error' => "aucun secteur selectionné"]);
        }
        $secteur = $s->find($data->secteur);
        $client = new Client;

        //gère les categorie
        $catarray = explode(',', $data->categorie);
        $cat1 = $catarray[0];
        if(isset($catarray[1]))
            $cat2 = $catarray[1];
        //gère les possibilité
        $possibility = array('<p><br></p>', '<p></p>', '<br>', "");


        //!creation de l'entité + test des champs
        $client->setNomClient($data->projet)
        ->setSecteur($secteur)
        ->setMission($data->missionp);

        if(!in_array($data->histoire,$possibility))
            $client->setHistoire($data->histoire);
        if(!in_array($data->enjeu,$possibility))
            $client->setEnjeu($data->enjeu); 
        if(!in_array($data->reponse,$possibility))
            $client->setReponse($data->reponse); 
        if(!in_array($data->elementp,$possibility))
            $client->setElementprecision($data->elementp) ;
        if(!in_array($data->temoignagetext,$possibility))
            $client->setTemoignage($data->temoignagetext);
        if(!in_array($data->duree,$possibility))
        $client->setDuree($data->duree);
        // if(!in_array($data->description,$possibility))
        //     $client->setDescription($data->description);
        if($cat1){
            $cat1 = $c->find($cat1);
            $client->addCategorie($cat1);
            if(isset($cat2)){
                $cat2 = $c->find($cat2);
                $client->addCategorie($cat2);
            }
        }else{return new JsonResponse(['error' => "aucune catégorie selectionnée(1 minimum)"]);}

        if($data->debut){
            $date = new \DateTime('@'.strtotime($data->debut));
            $client->setDebut($date);
        }
        if($data->fin){
            //transfome la date en string en date compatible
            $datefin = new \DateTime('@'.strtotime($data->fin));
            $client->setFin($datefin);
        }
         //verifie si un logo est upload
        if($logo)
            $client->setImageFile($logo);
        
        //! Envoi l'entité à la bdd
        $clientR->add($client, true);
        //!Fin de creation entité

        //TODO temporaire, à changer en dessous
        if($data){
            return new JsonResponse(['data' => $data]);
        }

    return new JsonResponse(['data' => $data]);
    }

    #[Route('editclient', name: 'admin_client_editupload', methods: ['POST'])]
    public function clienteditupload(ClientRepository $clientRepository ,Request $request, SecteurRepository $s, CategorieRepository $c, ManagerRegistry $doctrine): Response
    {
        //INFO WIP
        $entityManager = $doctrine->getManager();



        $data = json_decode($request->request->get('data'));  
        $logo = $request->files->get('logo');
        $client = $entityManager->getRepository(Client::class)->find($data->id);
        $old = $clientRepository->find($data->id); 
        //gere le secteur
        if(!$data->secteur){
            return new JsonResponse(['error' => "aucun secteur selectionné"]);
        }


        //gère les possibilité
        $possibility = array('<p><br></p>', '<p></p>', '<br>', "");

        $secteur = $s->find($data->secteur);

        //!creation de l'entité + test des champs
        $client->setNomClient($data->projet)
        ->setSecteur($secteur)
        ->setMission($data->missionp);

        if(!in_array($data->histoire,$possibility))
            $client->setHistoire($data->histoire);
        if(!in_array($data->enjeu,$possibility))
            $client->setEnjeu($data->enjeu); 
        if(!in_array($data->reponse,$possibility))
            $client->setReponse($data->reponse); 
        if(!in_array($data->elementp,$possibility))
            $client->setElementprecision($data->elementp) ;
        if(!in_array($data->temoignagetext,$possibility))
            $client->setTemoignage($data->temoignagetext);
        if(!in_array($data->duree,$possibility))
            $client->setDuree($data->duree);

        $catarray = explode(',', $data->categorie);
        if($catarray[0]){
            foreach($old->getCategorie() as $cat){
                $old->removeCategorie($cat);
            }
            $catarray[0] = $c->find($catarray[0]);
            $client->addCategorie($catarray[0]);
            if(isset($catarray[1])){
                $catarray[1] = $c->find($catarray[1]);
                $client->addCategorie($catarray[1]);
            }
        }else{return new JsonResponse(['error' => "aucune catégorie selectionnée(1 minimum)"]);}

        if($data->debut){
            $date = new \DateTime('@'.strtotime($data->debut));
            $client->setDebut($date);
        }
        if($data->fin){
            //transfome la date en string en date compatible
            $datefin = new \DateTime('@'.strtotime($data->fin));
            $client->setFin($datefin);
        }
         //verifie si un logo est upload
        if($logo)
            $client->setImageFile($logo);
        //!Fin de creation entité        
        //! Envoi l'entité à la bdd
        $entityManager->flush();


        //TODO temporaire, à changer en dessous
        if($data){
            return new JsonResponse(['data' => $data]);
        }

    return new JsonResponse(['data' => $data]);
    }

    #[Route('delClient', name: 'admin_client_del', methods: ['POST'])]
    public function delclient(Request $request, ClientRepository $projetRepository): Response
    {
        $Client = $projetRepository->find($request->request->get('data'));

        $projetRepository->remove($Client, true);
        
        return new JsonResponse(['data' => "fait"]);
    }

    #[Route('/clienttext/{id}', name: 'pagedemerde', methods: ['GET'])]
    public function pagedemerde(Request $request, Client $client): Response
    {
        $h = $client->getHistoire();
        $e = $client->getEnjeu();
        $r = $client->getReponse();
        $ep= $client->getElementprecision();
        $t = $client->getTemoignage();

        return $this->render('admin/client/pagedemerde.html.twig', [
            'h' => $h,
            'e' => $e,
            'ep' => $ep,
            't' => $t,
            'r' => $r
        ]);
    }
}
