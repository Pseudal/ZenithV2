<?php

namespace App\Controller\admin;

use App\Entity\User;
use App\Form\User1Type;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[Route('/admin/user')]
class UserController extends AbstractController
{
    #[Route('/', name: 'admin_user_index', methods: ['GET'])]
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('admin/user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'admin_user_new', methods: ['GET', 'POST'])]
    public function new(Request $request, UserRepository $userRepository): Response
    {
        $user = new User();
        $form = $this->createForm(User1Type::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userRepository->add($user, true);

            return $this->redirectToRoute('admin_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/user/new.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'admin_user_show', methods: ['GET'])]
    public function show(User $user): Response
    {
        return $this->render('admin/user/show.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/{id}/edit', name: 'admin_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, UserRepository $userRepository): Response
    {
        $form = $this->createForm(User1Type::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userRepository->add($user, true);

            return $this->redirectToRoute('admin_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'admin_user_delete', methods: ['POST'])]
    public function delete(Request $request, User $user, UserRepository $userRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $userRepository->remove($user, true);
        }

        return $this->redirectToRoute('admin_user_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('userremove', name: 'admin_user_remove')]
    public function userRemove(Request $request, userRepository $userR): Response
    {
        $id = $request->request->get('data');

        try {
            $user = $userR->find($id);

            // encode the plain password
            $userR->remove($user, true);

            return $this->redirectToRoute('dashboard');

            return new JsonResponse(['data' => true]);
        } catch (\Throwable $th) {
            return new JsonResponse(['error' => $th]);
        }
    return new JsonResponse(['error' => "erreur inconnue"]);
     }

     #[Route('useredit', name: 'admin_user_edit')]
     public function useredit(Request $request,  UserRepository $userR, UserPasswordHasherInterface $userPasswordHasher, ManagerRegistry $doctrine): Response
     {
        $entityManager = $doctrine->getManager();


         $id = $request->request->get('id');
         $login = $request->request->get('Login');
         $password = $request->request->get('Password');

           $user = $entityManager->getRepository(User::class)->find($id);
             // encode the plain password
             if($password){
                $user->setPassword(
                 $userPasswordHasher->hashPassword(
                     $user,
                     $password
                    )
                );
             }


             $user->setEmail($login);
             //$entityManager->persist($user);
             $entityManager->flush();
             // do anything else you need here, like send an email
             return $this->redirectToRoute('dashboard');
;
        
     return new JsonResponse(['error' => "erreur inconnue"]);
      }
 }

