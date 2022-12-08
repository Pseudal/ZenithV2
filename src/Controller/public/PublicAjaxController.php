<?php

namespace App\Controller\public;

use App\Entity\Projet;
use App\Entity\Categorie;
use App\Repository\ClientRepository;
use App\Repository\ProjetRepository;
use App\Repository\CategorieRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ClientImageRepository;
use App\Repository\ProjetImageRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PublicAjaxController extends AbstractController
{
    #[Route('/gettAllProject/{id}', name: 'gettAllProject', methods: ['GET'])]
    public function gettAllProject(ProjetImageRepository $clientImageRepository, Request $request, ProjetRepository $client,Session $session): Response
    {
        $id = $request->get('id');
        try {
            $next = $client->getAllPagination($id);
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
            dd($th);
            return new JsonResponse($th);
        }
        return new JsonResponse($next);    
    }

    #[Route('/getCount/{target}', name: 'getCount', methods: ['GET'])]
    public function getCount(ProjetImageRepository $clientImageRepository, Request $request, ProjetRepository $client,Session $session): Response
    {
        $target = $request->get('target');
        $count = 0;
        try {
            if($target == "projet"){
                $count = $client->getCount();
            }

        } catch (\Throwable $th) {
            
            return new JsonResponse($th);
        }
        return new JsonResponse($count);    
    }

    #[Route('/gettAllCreation', name: 'gettAllCreation', methods: ['GET'])]
    public function gettAllCreation(ProjetImageRepository $clientImageRepository, Request $request, ProjetRepository $client,Session $session): Response
    {
        $Crea = [];
        try {
            $next = $client->getAll();
            foreach($next as $n){
                if(count($Crea) >= 20){
                    break;
                }
                $getHeader = $clientImageRepository->checkCreation($n["id"]);
                $n["test"] = "coucou";
               
                if($getHeader){
                    $n['creation'] = $getHeader->getImage();
                    array_push($Crea, $n);
                    
                } else { 
                    continue;
                }  
            }

        } catch (\Throwable $th) {
            
            return new JsonResponse($th);
        }
        return new JsonResponse($Crea);    
    }

    #[Route('/sendemail', name: 'sendEmail', methods: ['GET', 'POST'])]
    public function sendEmail(Request $request,Session $session): Response
    {
        $r = json_decode($request->getContent(), true);
        $filesystem = new Filesystem();
        try {
            $new_file_path = "Email.txt";
         
            if (!$filesystem->exists($new_file_path))
            {
                $filesystem->touch($new_file_path);
                $filesystem->chmod($new_file_path, 0777);
                $filesystem->dumpFile($new_file_path, $r['name']."\n");
                $filesystem->appendToFile($new_file_path, $r['email']."\n");
                $filesystem->appendToFile($new_file_path, $r['message']."\n");
                // $filesystem->dumpFile($new_file_path, "Adding dummy content to bar.txt file.\n");
                // $filesystem->appendToFile($new_file_path, "TTTTTTEEEEEEESSSSSSSSTTTTTT.\n");
            }else{
                // $filesystem->dumpFile($new_file_path, "marche\n");
                // $filesystem->dumpFile($new_file_path, json_encode($r));
                $filesystem->dumpFile($new_file_path, $r['name']."\n");
                $filesystem->appendToFile($new_file_path, $r['email']."\n");
                $filesystem->appendToFile($new_file_path, $r['message']."\n");
            }
        } catch (IOExceptionInterface $exception) {
            echo "Error creating file at". $exception->getPath();
        }
        return new JsonResponse("reçu"); 
    }

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

    #[Route('/getsearchcat/{search}', name: 'getSearchcat', methods: ['GET'])]
    public function getSearchcat(ClientImageRepository $clientImageRepository, Request $request, ClientRepository $client,Session $session,ProjetRepository $projet,ProjetImageRepository $projetImageRepository, CategorieRepository $catrepo,EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
    {    
        try {
            
            $search = [];
            $num = $request->get('search');
            $qb = $entityManager->createQueryBuilder();
            $qb ->select('a')
                ->from(Projet::class, 'a' )
                ->join('a.categorie', 'm')
                ->where('m.id = :identifier')
                ->setParameter('identifier', $num)
            ;
        
        
            $next2 = $qb->getQuery()->getResult();
            //dd($next);
            $i = 0;
         
            // foreach($next as $n){
            //     $getHeader = $clientImageRepository->checkHeader($n["id"]);
            //     $n["test"] = "coucou";
            
            //     if($getHeader){
            //         $n['header'] = $getHeader->getImage();
            //         $next[$i] = $n;
            //     } else { 
            //         $n['header'] = "rien a voir, circulez"; 
            //         $getHeader = 0;
            //     }  
            //     $i++;
            //     array_push($n, "client"); 
            //     array_push($search, $n); 
            // }

            //$next2 = $projet->getSearch($request->get('search'));
            $i = 0;

            foreach($next2 as $n){
                $getHeader = $projetImageRepository->checkHeader($n->getId());
                //$n["test"] = "coucou";
               
                if($getHeader){
                    $header = $getHeader->getImage();
                    //$n['header'] = $getHeader->getImage();
                    //$next[$i] = $n;
                } else { 
                    $header = null; 
                   // $n['header'] = "rien a voir, circulez"; 
                    $getHeader = 0;
                }  
                $i++;
                $array = json_decode($serializer->serialize($n, 'json'), true);
                array_push($array, "projet");
                if($header) 
                    $array['header'] = $header; 
                array_push($search, $array); 
            }

        
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
