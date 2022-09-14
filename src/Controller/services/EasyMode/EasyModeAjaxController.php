<?php

namespace App\Controller\services\EasyMode;



use App\Entity\TagProjet;
use App\Repository\TagProjetRepository;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/ajax')]
class EasyModeAjaxController extends AbstractController
{
    
    #[Route('/gettag', name: 'app_bundle_route')]
    public function projetaction(Request $request): Response
    {
        if($request->request->get('some_var_name')){
            //make something curious, get some unbelieveable data
            $arrData = ['output' => 'AJAX :)'];
            return new JsonResponse($arrData);
        }
    }

    #[Route('/addtag', name: 'AjaxAddTag', methods: ['GET', 'POST'])]
    public function addtag(Request $request, TagProjetRepository $TagR): Response
    {
        if($request->request->get('output')){
            //make something curious, get some unbelieveable data
            $output = json_decode($request->request->get('output'));
            $tagProjet = new TagProjet();
            $tagProjet->setTag($output->tag);
            $TagR->add($tagProjet, true);
            //$arrData = ['output' => 'AJAX :)'];
            return new JsonResponse('Le tag ' .$output->tag. ' a été ajouté');
        }
    }
}
