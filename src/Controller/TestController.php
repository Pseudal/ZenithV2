<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class TestController extends AbstractController
{
    #[Route('/test', name: 'app_test')]
    public function index(): Response
    {
        return $this->render('test/index.html.twig', [
            'controller_name' => 'TestController',
        ]);
    }

    #[Route('/ajaxget', name: 'app_testget', methods: ['GET', 'POST'])]
    public function index2(Request $request): Response
    {

        $data = $request->request->get('form');
        if (!empty($data)) {
            $array = json_decode($data, true); // 2nd param to get ass array
        }
        dd($data);
        return new JsonResponse($arrData);
    }
}
