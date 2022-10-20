<?php

namespace App\Controller\public;

use App\Repository\ClientRepository;
use App\Repository\ProjetRepository;
use App\Repository\ClientImageRepository;
use App\Repository\ProjetImageRepository;
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
    #[Route('/getImagesProjet/{id}', name: 'getImagesProjet', methods: ['GET'])]
    public function getImagesProjet(ProjetImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session): Response
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
    

    #[Route('/NexPrev/{id}', name: 'NexPrev', methods: ['GET'])]
    public function nextPrev(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session): Response
    {
        $id = $request->get('id');

        try {
            $next = json_encode($client->findByExampleFieldArray($id+1));
            $prev = json_encode($client->findByExampleFieldArray($id-1));

            if($next && $prev) {
                $nextPrev = [$next, $prev];
                return new JsonResponse($nextPrev);
            }

            if($next == "[]") {
                $nextPrev = ["null", $prev];
                return new JsonResponse($nextPrev);
            }

            if($prev == "[]") {
                $nextPrev = [$next, "null"];
                return new JsonResponse($nextPrev);
            }

            if($next == "[]" && $prev == "[]")
                return new JsonResponse(false);
        } catch (\Throwable $th) {
            return new JsonResponse(false);
        }
        return new JsonResponse(false);    
    }

    #[Route('/NexPrevP/{id}', name: 'NexPrevP', methods: ['GET'])]
    public function NexPrevP(ClientImageRepository $clientImageRepository, Request $request, ProjetRepository $client,Session $session): Response
    {
        $id = $request->get('id');

        try {
            $next = json_encode($client->findByExampleFieldArray($id+1));
            $prev = json_encode($client->findByExampleFieldArray($id-1));

            if($next && $prev) {
                $nextPrev = [$next, $prev];
                return new JsonResponse($nextPrev);
            }

            if($next == "[]") {
                $nextPrev = ["null", $prev];
                return new JsonResponse($nextPrev);
            }

            if($prev == "[]") {
                $nextPrev = [$next, "null"];
                return new JsonResponse($nextPrev);
            }

            if($next == "[]" && $prev == "[]")
                return new JsonResponse(false);
        } catch (\Throwable $th) {
            return new JsonResponse(false);
        }
        return new JsonResponse(false);    
    }
}
