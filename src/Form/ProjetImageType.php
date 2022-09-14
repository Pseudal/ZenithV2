<?php

namespace App\Form;

use App\Entity\ProjetImage;
use Symfony\Component\Form\AbstractType;
use Emrdev\SymfonyDropzone\Form\DropzoneType;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;

class ProjetImageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('imageFile', DropzoneType::class,[
                'class' => ProjetImageType::class,
                'maxFiles' => 6,
                'multiple' => true,
           ]) 
            //->add('Client')
        ;
    }

    // public function configureOptions(OptionsResolver $resolver): void
    // {
    //     $resolver->setDefaults([
    //         'data_class' => ProjetImage::class,
    //     ]);
    // }
}
