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
    #[Route('/gettAllProject', name: 'gettAllProject', methods: ['GET'])]
    public function gettAllProject(ProjetImageRepository $clientImageRepository, Request $request, ProjetRepository $client,Session $session): Response
    {
        try {
            $next = $client->getAll();
            $i = 0;
            foreach($next as $n){

                $getHeader = $clientImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
            }

        } catch (\Throwable $th) {
            
            return new JsonResponse($th);
        }
        return new JsonResponse($next);    
    }
    #[Route('/gettAllClient', name: 'gettAllClient', methods: ['GET'])]
    public function gettAllClient(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session): Response
    {
        try {
            $next = $client->getAll();
            $i = 0;
            foreach($next as $n){

                $getHeader = $clientImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
            }

        } catch (\Throwable $th) {
            
            return new JsonResponse($th);
        }
        return new JsonResponse($next);    
    }

    #[Route('/getSearchCat/{search}', name: 'getSearch', methods: ['GET'])]
    public function getSearch2(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session,ProjetRepository $projet,ProjetImageRepository $projetImageRepository): Response
    {
        try {
            
            $search = [];
            $tags = $client->createQueryBuilder('t')
            ->select('c.id as categoryId, t.id as tagId')
            ->innerJoin('t.categories', 'c')
            ->where('c.id = :category_id')
            ->setParameter('category_id', $categoryId)
            ->getQuery()
            ->getResult();
            
            $next = $client->getSearch($request->get('search'));
            $i = 0;
         
            foreach($next as $n){
                $getHeader = $clientImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
            
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
                array_push($n, "client"); 
                array_push($search, $n); 
            }

            $next2 = $projet->getSearch($request->get('search'));
            $i = 0;

            foreach($next2 as $n){
                $getHeader = $projetImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
                array_push($n, "projet"); 
                array_push($search, $n); 
            }
            //dd($search);
        
        } catch (\Throwable $th) {
            
            return new JsonResponse($th);
        }
        return new JsonResponse($search);    
    }

    #[Route('/getSearch/{search}', name: 'getSearch', methods: ['GET'])]
    public function getSearch(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session,ProjetRepository $projet,ProjetImageRepository $projetImageRepository): Response
    {
        try {
            
            $search = [];
            $next = $client->getSearch($request->get('search'));
            $i = 0;
         
            foreach($next as $n){
                $getHeader = $clientImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
            
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
                array_push($n, "client"); 
                array_push($search, $n); 
            }

            $next2 = $projet->getSearch($request->get('search'));
            $i = 0;

            foreach($next2 as $n){
                $getHeader = $projetImageRepository->checkHeader($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['header'] = $getHeader->getImage();
                    $next[$i] = $n;
                } else { 
                    $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
                array_push($n, "projet"); 
                array_push($search, $n); 
            }
            //dd($search);
        
        } catch (\Throwable $th) {
            
            return new JsonResponse($th);
        }
        return new JsonResponse($search);    
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
