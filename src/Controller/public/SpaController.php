<?php

namespace App\Controller\public;

use App\Repository\ClientRepository;
use App\Repository\ClientImageRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SpaController extends AbstractController
{
    #[Route('/{reactRouting}', name: 'app_spa', requirements:["reactRouting" => "^(?!api).+"], defaults:["reactRouting" => null])]
    public function index(): Response
    {
        return $this->render('base.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    #[Route('/', name: 'home')]
    public function home(): Response
    {
        return $this->render('base.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}

