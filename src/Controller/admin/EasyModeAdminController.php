<?php

namespace App\Controller\admin;

use App\Entity\Projet;
use App\Form\ProjetType;
use App\Repository\ClientRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/easymode')]
class EasyModeAdminController extends AbstractController
{
    #[Route('/', name: 'easymode_client')]
    public function index(ClientRepository $clientRepository): Response
    {
        return $this->render('admin/easy_mode_admin/index.html.twig', [
            'controller_name' => 'EasyModeAdminController',
            'clients' => $clientRepository->findAll(),
        ]);
    }

    #[Route('/step1/{id}', name: 'easymode_projet')]
    public function projet(ClientRepository $clientRepository, Request $request, Session $session): Response
    {
        $c = $clientRepository->findOneBySomeField($request->get('id')) ;
        $projet = new Projet();
        $projet->setClient($c);

        $form = $this->createForm(ProjetType::class, $projet);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // $projetRepository->add($projet, true);
            // sleep(3);
            // if($session->get('fromclient'))
            //     return $this->redirectToRoute('admin_projet_fromClient_index', ['id' => $id], Response::HTTP_SEE_OTHER);
                return $this->redirectToRoute('admin_projet_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/easy_mode_admin/projet.html.twig', [
            'controller_name' => 'EasyModeAdminController',
            'client' => $c,
            'form' => $form,
        ]);
    }
}
