<?php

namespace App\Controller\admin;

use App\Entity\Secteur;
use App\Entity\Categorie;
use App\Repository\SecteurRepository;
use App\Repository\CategorieRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/tags')]
class TagAllController extends AbstractController
{
    #[Route('/all', name: 'admin_tagAll_index')]
    public function index(SecteurRepository $secteur, CategorieRepository $categorie): Response
    {
        return $this->render('admin/tag_all/index.html.twig', [
            'secteurs' => $secteur->findAll(),
            'categories' => $categorie->findAll(),
        ]);
    }

    #[Route('addsecteur/', name: 'admin_tags_addsecteur', methods: ['POST'])]
    public function addsecteur(SecteurRepository $secteurR, CategorieRepository $categorieR, Request $request): Response
    {
        $data = $request->request->get('secteur');
        $type = $request->request->get('type');

        if($type == "secteur"){
            try {
                $secteur = new Secteur();
                $secteur->setSecteur($data);
                $secteurR->add($secteur, true);
                return new JsonResponse(['data' => "success"]);
            } catch (\Throwable $th) {
                return new JsonResponse(['error' => $th]);
            }
        }else{
            try {
                $categorie = new Categorie();
                $categorie->setCategorie($data);
                $categorieR->add($categorie, true);
                return new JsonResponse(['data' => "success"]);
            } catch (\Throwable $th) {
                return new JsonResponse(['error' => $th]);
            }
        }


        return new JsonResponse(['error' => "erreur inconnu, merci de contacter le developpeur"]);
    }

    #[Route('edittags/', name: 'admin_tags_edittags', methods: ['POST'])]
    public function edittags(SecteurRepository $secteurR, CategorieRepository $categorieR, Request $request, ManagerRegistry $doctrine): Response
    {
        $data = $request->request->get('newValue');
        $type = $request->request->get('type');
        $id = $request->request->get('id');

        if($type == "secteur"){
            try {
                $entityManager = $doctrine->getManager();
                $secteur = $entityManager->getRepository(Secteur::class)->find($id);
                $secteur = $secteurR->find($id);
                $secteur->setSecteur($data);
                $entityManager->flush();
                return new JsonResponse(['data' => "success"]);
            } catch (\Throwable $th) {
                return new JsonResponse(['error' => $th]);
            }
        }else{
            try {
                $entityManager = $doctrine->getManager();
                $categorie = $entityManager->getRepository(Categorie::class)->find($id);
                $categorie->setCategorie($data);
                $entityManager->flush();
                return new JsonResponse(['data' => "success"]);
            } catch (\Throwable $th) {
                return new JsonResponse(['error' => $th]);
            }
        }


        return new JsonResponse(['error' => "erreur inconnu, merci de contacter le developpeur"]);
    }

    #[Route('supptag/', name: 'admin_tags_supptag', methods: ['POST'])]
    public function supptag(SecteurRepository $secteurR, CategorieRepository $categorieR, Request $request, ManagerRegistry $doctrine): Response
    {
        $id = $request->request->get('id');
        $type = $request->request->get('type');

        if($type == "secteur"){
            try {
                $secteur = $secteurR->find($id);
                $secteurR->remove($secteur, true);
                return new JsonResponse(['data' => "success"]);
            } catch (\Throwable $th) {
                return new JsonResponse(['error' => $th]);
            }
        }else{
            try {
                $categorie = $categorieR->find($id);
                $categorieR->remove($categorie, true);
                return new JsonResponse(['data' => "success"]);
            } catch (\Throwable $th) {
                return new JsonResponse(['error' => $th]);
            }
        }


        return new JsonResponse(['error' => "erreur inconnu, merci de contacter le developpeur"]);
    }
}
