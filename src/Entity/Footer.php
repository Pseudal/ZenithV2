<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\FooterRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation\Uploadable;

#[ORM\Entity(repositoryClass: FooterRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['footer']],
    collectionOperations: [
        "get",
    ],
    itemOperations: [
        "get",
    ],
)]
#[Uploadable]
class Footer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups("footer")]
    private ?string $adresse = null;

    #[ORM\Column(length: 255)]
    #[Groups("footer")]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Groups("footer")]
    private ?string $tel = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(string $tel): self
    {
        $this->tel = $tel;

        return $this;
    }
}
