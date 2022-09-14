<?php

namespace App\Controller\admin;

use App\Repository\ClientRepository;
use App\Repository\EmailsRepository;
use App\Repository\ProjetRepository;
use App\Repository\SecteurRepository;
use App\Repository\CategorieRepository;
use App\Repository\ClientImageRepository;
use App\Repository\ProjetImageRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'dashboard')]
    public function index(ClientRepository $client, ProjetRepository $projet, ClientImageRepository $clientImage, ProjetImageRepository $projetImage, EmailsRepository $emails, SecteurRepository $secteur, CategorieRepository $categorie): Response
    {
        return $this->render('admin/dashboard.html.twig', [
            'controller_name' => 'AdminController',
            'mail' => $emails->getCount(),
            "client" => $client->getCount(),
            "projet" => $projet->getCount(),
            "image" => $clientImage->getCount() + $projetImage->getCount(),
            "tag" => $secteur->getCount() + $categorie->getCount(),
        ]);
    }
}
