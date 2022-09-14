<?php

namespace App\Controller\admin;

use App\Entity\Projet;
use App\Entity\Secteur;
use App\Form\ProjetType;
use App\Repository\ClientRepository;
use App\Repository\ProjetRepository;
use App\Repository\SecteurRepository;
//use App\Repository\TagProjetRepository;
use App\Repository\CategorieRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/projet')]
class ProjetController extends AbstractController
{
    #[Route('/', name: 'admin_projet_index', methods: ['GET'])]
    public function index(ProjetRepository $projetRepository, Session $session, Request $request, SecteurRepository $secteur, EntityManagerInterface $doctrine): Response
    {
        $session->set('fromclient', false);
        $secteur = $secteur->findAll();

        $projet = new Projet;
        $form = $this->createForm(ProjetType::class, $projet);
        $form->handleRequest($request);
        $test = json_encode($projetRepository->getAll());


        return $this->render('admin/projet/index.html.twig', [
            'projets' => $projetRepository->findAll(),
            'secteurs' => $secteur,
            'form' => $form->createView(),
            'test' => $test
        ]);
    }

    #[Route('/fromclient/{id}', name: 'admin_projet_fromClient_index', methods: ['GET'])]
    public function clientProjet(ProjetRepository $projetRepository, Request $request, Session $session, ClientRepository $client): Response
    {
        $session->set('fromclient', true);
        $id = $request->get('id');
        $session->set('clientid', $id);

        $clientname = $client->findOneBySomeField($id);
        

        return $this->render('admin/projet/indexFC.html.twig', [
            'projets' => $projetRepository->findByExampleField($request->get('id')),
            'id' => $id,
            'nom' => $clientname->getNomClient(),
        ]);
    }

    #[Route('/new', name: 'admin_projet_new', methods: ['GET', 'POST'])]
    public function new( ClientRepository $client, Session $session, SecteurRepository $secteur, CategorieRepository $c): Response
    {
        $clients = json_encode($client->getAllArray());
        $secteur = json_encode($secteur->getAllArray());
        $id = 0;
        $projet = new Projet();

        if($session->get('fromclient')){

            $id = $session->get('clientid');
   
        } else {
            $id = null;
        }


        return $this->render('admin/projet/new.html.twig', [
            'projet' => $projet,
            'fromclient' => $session->get('fromclient'),
            'secteurs' => $secteur,
            'id' => $id,
            'clients' => $clients,
            "categories" => $c->getAllArray(),
        ]);
    }

    #[Route('/{id}', name: 'admin_projet_show', methods: ['GET'])]
    public function show(Projet $projet, Session $session): Response
    {
        return $this->render('admin/projet/show.html.twig', [
            'projet' => $projet,
            'fromclient' => $session->get('fromclient')
        ]);
    }

    #[Route('/{id}/edit', name: 'admin_projet_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ProjetRepository $projetRepository, ClientRepository $client, Session $session, SecteurRepository $secteur, CategorieRepository $c): Response
    {
        $thisproject = $projetRepository->find(($request->get('id')));
        $thiscat = [];
        if($thisproject->getClient())
            $id = $thisproject->getClient()->getId();
        else
            $id = null;
        
        foreach($thisproject->getCategorie() as $categorie) {

        $value = [
            'value' => $categorie->getId(),
            "nom" => $categorie->getCategorie()
        ];
        array_push($thiscat, $value);
        
        //other stuff
        }

        return $this->render('admin/projet/edit.html.twig', [

            'projet' => $projetRepository->find($request->get('id')),
            'fromclient' => $session->get('fromclient'),
            'secteurs' => json_encode($secteur->getAllArray()),
            'id' => $id,
            'clients' => json_encode($client->getAllArray()),
            "categories" => $c->getAllArray(),
            "thiscat" => $thiscat
        ]);
    }

    #[Route('/delete/{id}', name: 'admin_projet_delete', methods: ['POST'])]
    public function delete(Request $request, Projet $projet, ProjetRepository $projetRepository, Session $session): Response
    {
        if ($this->isCsrfTokenValid('delete'.$projet->getId(), $request->request->get('_token'))) {
            $projetRepository->remove($projet, true);
        }
        if($session->get('fromclient'))
            return $this->redirectToRoute('admin_projet_fromClient_index', ['id' => $projet->getClient()->getId()], Response::HTTP_SEE_OTHER);
        else
            return $this->redirectToRoute('admin_projet_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/newupload', name: 'admin_projet_newupload', methods: ['POST'])]
    public function newupload(ProjetRepository $projetRepository ,Request $request, SecteurRepository $s, CategorieRepository $c, ClientRepository $ClientR): Response
    {
        //INFO WIP

        $data = json_decode($request->request->get('data'));  
        $logo = $request->files->get('logo'); 
        //gere le secteur
        if(!$data->secteur){
            return new JsonResponse(['error' => "aucun secteur selectionné"]);
        }
        $secteur = $s->find($data->secteur);
        $projet = new Projet;

        //gère les categorie
        $catarray = explode(',', $data->categorie);
        $cat1 = $catarray[0];
        if(isset($catarray[1]))
            $cat2 = $catarray[1];
        //gère les possibilité
        $possibility = array('<p><br></p>', '<p></p>', '<br>', "", is_null($data->demandetext));


        //!creation de l'entité + test des champs
        $projet->setProjet($data->projet)
        ->setSecteur($secteur)
        ->setMission($data->missionp);

        if(!in_array($data->demandetext,$possibility))
            $projet->setDemande($data->demandetext);
        if(!in_array($data->actiontext,$possibility))
            $projet->setAction($data->actiontext); 
        if(!in_array($data->defitext,$possibility))
            $projet->setDefi($data->defitext); 
        if(!in_array($data->focustext,$possibility))
            $projet->setFocus($data->focustext) ;
        if(!in_array($data->temoignagetext,$possibility))
            $projet->setTemoignage($data->temoignagetext);
        if(!in_array($data->description,$possibility))
            $projet->setDescription($data->description);
        if(!in_array($data->duree,$possibility))
            $projet->setDuree($data->duree);

        if($data->client != "client"){
            $client = $ClientR->find($data->client);
            $projet->setClient($client);
        }

        if($cat1){
            $cat1 = $c->find($cat1);
            $projet->addCategorie($cat1);
            if(isset($cat2)){
                $cat2 = $c->find($cat2);
                $projet->addCategorie($cat2);
            }
        }else{return new JsonResponse(['error' => "aucune catégorie selectionnée(1 minimum)"]);}

        if($data->debut){
            $date = new \DateTime('@'.strtotime($data->debut));
            $projet->setDebut($date);
        }
        if($data->fin){
            //transfome la date en string en date compatible
            $datefin = new \DateTime('@'.strtotime($data->fin));
            $projet->setFin($datefin);
        }
         //verifie si un logo est upload
        if($logo)
            $projet->setImageFile($logo);
        
        //! Envoi l'entité à la bdd
        $projetRepository->add($projet, true);
        //!Fin de creation entité

        //TODO temporaire, à changer en dessous
        if($data){
            return new JsonResponse(['data' => $data]);
        }

    return new JsonResponse(['data' => $data]);
    }

    #[Route('/editupload', name: 'admin_projet_editupload', methods: ['POST'])]
    public function editupload(ProjetRepository $projetRepository ,Request $request, SecteurRepository $s, CategorieRepository $c, ManagerRegistry $doctrine, ClientRepository $ClientR): Response
    {
        //INFO WIP
        $entityManager = $doctrine->getManager();

        $data = json_decode($request->request->get('data'));  

        $logo = $request->files->get('logo');
        $projet = $entityManager->getRepository(Projet::class)->find($data->id);
        $old = $projetRepository->find($data->id); 
        //gere le secteur
        if(!$data->secteur){
            return new JsonResponse(['error' => "aucun secteur selectionné"]);
        }


        //gère les possibilité
        $possibility = array('<p><br></p>', '<p></p>', '<br>', "");


        //!creation de l'entité + test des champs
        $projet->setProjet($data->projet)
        ->setSecteur($s->find($data->secteur))
        ->setMission($data->missionp)
        ->setId($data->id);

        if(!in_array($data->demandetext,$possibility))
            $projet->setDemande($data->demandetext);
        if(!in_array($data->actiontext,$possibility))
            $projet->setAction($data->actiontext); 
        if(!in_array($data->defitext,$possibility))
            $projet->setDefi($data->defitext); 
        if(!in_array($data->focustext,$possibility))
            $projet->setFocus($data->focustext) ;
        if(!in_array($data->temoignagetext,$possibility))
            $projet->setTemoignage($data->temoignagetext);
        if(!in_array($data->description,$possibility))
            $projet->setDescription($data->description);
        if(!in_array($data->duree,$possibility))
            $projet->setDuree($data->duree);

        if($data->client != "client"){
            $client = $ClientR->find($data->client);
            $projet->setClient($client);
        }
        $catarray = explode(',', $data->categorie);
        if($catarray[0]){
            foreach($old->getCategorie() as $cat){
                $old->removeCategorie($cat);
            }
            $catarray[0] = $c->find($catarray[0]);
            $projet->addCategorie($catarray[0]);
            if(isset($catarray[1])){
                $catarray[1] = $c->find($catarray[1]);
                $projet->addCategorie($catarray[1]);
            }
        }else{return new JsonResponse(['error' => "aucune catégorie selectionnée(1 minimum)"]);}

        if($data->debut){
            $date = new \DateTime('@'.strtotime($data->debut));
            $projet->setDebut($date);
        }
        if($data->fin){
            //transfome la date en string en date compatible
            $datefin = new \DateTime('@'.strtotime($data->fin));
            $projet->setFin($datefin);
        }
         //verifie si un logo est upload
        if($logo)
            $projet->setImageFile($logo);
        
        //! Envoi l'entité à la bdd
        $entityManager->flush();
        //!Fin de creation entité

        //TODO temporaire, à changer en dessous
        if($data){
            return new JsonResponse(['data' => $data]);
        }

    return new JsonResponse(['data' => $data]);
    }

    #[Route('/delProjet', name: 'admin_projet_del', methods: ['POST'])]
    public function del(Request $request, ProjetRepository $projetRepository, Session $session): Response
    {
        $projet = $projetRepository->find($request->request->get('data'));

        $projetRepository->remove($projet, true);
        
        return new JsonResponse(['data' => "fait"]);
    }

    #[Route('/projettext/{id}', name: 'pagedemerde2', methods: ['GET'])]
    public function pagedemerde(Request $request, Projet $client, Session $session): Response
    {
        if($session->get('fromclient')){

            $id = $session->get('clientid');
   
        } else {
            $id = null;
        }
        $h = $client->getDescription();
        $e = $client->getDemande();
        $r = $client->getDefi();
        $a= $client->getAction();
        $ep= $client->getFocus();
        $t = $client->getTemoignage();

        return $this->render('admin/projet/pagedemerde2.html.twig', [
            'd' => $h,
            'de' => $e,
            'f' => $ep,
            't' => $t,
            'df' => $r,
            'a' => $a,
            'fromclient' => $session->get('fromclient'),
            "id" => $id
        ]);
    }
}
