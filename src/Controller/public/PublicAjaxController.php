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

class PublicAjaxController extends AbstractController
{
    #[Route('/getImagesClient/{id}', name: 'getImagesClient', methods: ['GET'])]
    public function getImagesClient(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session): Response
    {
        $id = $request->get('id');
        try {
            $images = json_encode($clientImageRepository->findByExampleFieldArray($id));
            return new JsonResponse($images);
            if($images == "[]")
                return new JsonResponse(false);
        } catch (\Throwable $th) {
            return new JsonResponse(false);
        }
        return new JsonResponse(false);    
    }
}
