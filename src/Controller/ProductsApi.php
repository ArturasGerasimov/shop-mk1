<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProductsApi extends AbstractController
{
    #[Route('/api/v1/userRegister', name: 'app_v1_user_register', methods: ['POST', 'HEAD'])]
    public function registerUserApi(Request $request): Response
    {
        $data = json_decode($request->getContent());
        $email = $request->request->get('email');
        dump($data->username);

        return new Response('OK');
    }
}