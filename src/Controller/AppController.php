<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route('/', name: 'app')]
    public function runApp(): Response
    {
        return $this->render('BaseAppLayout.html.twig');
    }

    #[Route('/user/register', name: 'app_user_register')]
    public function registerAction(): Response
    {
        return $this->render('BaseAppLayout.html.twig');
    }
}