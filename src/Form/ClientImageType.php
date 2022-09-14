<?php

namespace App\Form;

use App\Entity\ClientImage;
use Symfony\Component\Form\AbstractType;
use Symfony\UX\Dropzone\Form\DropzoneType;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;

class ClientImageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('imageFile', DropzoneType::class,[
            'multiple' => true,
            'label' => 'Client Image',
            'attr'=>['class' => 'btn inline', 'width' => "100", 'accept' => ".png,.jpg,.jpeg"],
            'label_attr' => ['class' => '']]) 
            //->add('Client')
        ;
    }

    // public function configureOptions(OptionsResolver $resolver): void
    // {
    //     $resolver->setDefaults([
    //         'data_class' => ClientImage::class,
    //     ]);
    // }
}
