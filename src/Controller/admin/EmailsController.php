<?php

namespace App\Controller\admin;

use App\Entity\Emails;
use App\Form\EmailsType;
use App\Repository\EmailsRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('admin/emails')]
class EmailsController extends AbstractController
{
    #[Route('/', name: 'app_emails_index', methods: ['GET'])]
    public function index(EmailsRepository $emailsRepository, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $emails = $emailsRepository->getAllNew();
        foreach($emails as $email){
            $thismail = $entityManager->getRepository(Emails::class)->find($email->getId());
            $thismail->setNew(0);
            $entityManager->flush();
        }
        
        return $this->render('admin/emails/index.html.twig', [
            'emails' => $emailsRepository->getAllDesc(),
        ]);
    }

    #[Route('notification', name: 'app_emails_notif', methods: ['GET', 'POST'])]
    public function notification(EmailsRepository $emailsRepository): Response
    {
        $new = $emailsRepository->getAllArrayCount();
        if ($new > 0)
            return new JsonResponse($new);
        else
            return new JsonResponse(false);

    } 

    #[Route('getallemail', name: 'app_emails_getall', methods: ['GET', 'POST'])]
    public function getall(EmailsRepository $emailsRepository): Response
    {
        $new = $emailsRepository->findAll();

        $rows = array();
        foreach ($new as $event) {
            $data = array($event->getId(), $event->getEmail());
    
            $rows[] = implode(',', $data);
        }
    
        $content = implode("\n", $rows);
        $response = new Response($content);
        $response->headers->set('Content-Type', 'text/csv');

        return $response;
    } 

    // #[Route('/new', name: 'app_emails_new', methods: ['GET', 'POST'])]
    // public function new(Request $request, EmailsRepository $emailsRepository): Response
    // {
    //     $email = new Emails();
    //     $form = $this->createForm(EmailsType::class, $email);
    //     $form->handleRequest($request);

    //     if ($form->isSubmitted() && $form->isValid()) {
    //         $emailsRepository->add($email, true);

    //         return $this->redirectToRoute('app_emails_index', [], Response::HTTP_SEE_OTHER);
    //     }

    //     return $this->renderForm('emails/new.html.twig', [
    //         'email' => $email,
    //         'form' => $form,
    //     ]);
    // }

    // #[Route('/{id}', name: 'app_emails_show', methods: ['GET'])]
    // public function show(Emails $email): Response
    // {
    //     return $this->render('emails/show.html.twig', [
    //         'email' => $email,
    //     ]);
    // }

    // #[Route('/{id}/edit', name: 'app_emails_edit', methods: ['GET', 'POST'])]
    // public function edit(Request $request, Emails $email, EmailsRepository $emailsRepository): Response
    // {
    //     $form = $this->createForm(EmailsType::class, $email);
    //     $form->handleRequest($request);

    //     if ($form->isSubmitted() && $form->isValid()) {
    //         $emailsRepository->add($email, true);

    //         return $this->redirectToRoute('app_emails_index', [], Response::HTTP_SEE_OTHER);
    //     }

    //     return $this->renderForm('emails/edit.html.twig', [
    //         'email' => $email,
    //         'form' => $form,
    //     ]);
    // }

    // #[Route('/{id}', name: 'app_emails_delete', methods: ['POST'])]
    // public function delete(Request $request, Emails $email, EmailsRepository $emailsRepository): Response
    // {
    //     if ($this->isCsrfTokenValid('delete'.$email->getId(), $request->request->get('_token'))) {
    //         $emailsRepository->remove($email, true);
    //     }

    //     return $this->redirectToRoute('app_emails_index', [], Response::HTTP_SEE_OTHER);
    // }
}
