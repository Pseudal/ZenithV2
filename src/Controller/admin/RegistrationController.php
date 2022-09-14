<?php

namespace App\Controller\admin;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Controller\admin\Security\UserAuthenticator;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;

class RegistrationController extends AbstractController
{
    #[Route('/adminregisterFromAdmin', name: 'admin_register_FromAdmin')]
    public function registerFromAdmin(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        $login = $request->request->get('Login');
        $password = $request->request->get('Password');
        
        try {
            $user = new User();

            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $password
                )
            );
            $user->setRoles(['ROLE_ADMIN'])->setEmail($login);
            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email
            return $this->redirectToRoute('dashboard');
            // return $userAuthenticator->authenticateUser(
            //     $user,
            //     $authenticator,
            //     $request
            // );
       

            return new JsonResponse(['data' => true]);
        } catch (\Throwable $th) {
            return new JsonResponse(['error' => $th]);
        }
    return new JsonResponse(['error' => "erreur inconnue"]);
     }
}

