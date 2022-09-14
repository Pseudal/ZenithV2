<?php

namespace App\Controller\services;

use Gumlet\ImageResize;
use App\Entity\ClientImage;
use App\Entity\ProjetImage;
use App\Repository\ClientRepository;
use App\Repository\ClientImageRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/uploader')]
class UploadHandlerController extends AbstractController
{
    

}

