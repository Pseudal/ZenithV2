<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ChiffresRepository;
use ApiPlatform\Core\Annotation\ApiResource;

#[ORM\Entity(repositoryClass: ChiffresRepository::class)]
#[ApiResource(
    collectionOperations: [
        "get",
    ],
    itemOperations: [
        "get",
    ],
)]
class Chiffres
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $collab = null;

    #[ORM\Column(length: 255)]
    private ?string $digital = null;

    #[ORM\Column(length: 255)]
    private ?string $photo = null;

    #[ORM\Column(length: 255)]
    private ?string $video = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCollab(): ?string
    {
        return $this->collab;
    }

    public function setCollab(string $collab): self
    {
        $this->collab = $collab;

        return $this;
    }

    public function getDigital(): ?string
    {
        return $this->digital;
    }

    public function setDigital(string $digital): self
    {
        $this->digital = $digital;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getVideo(): ?string
    {
        return $this->video;
    }

    public function setVideo(string $video): self
    {
        $this->video = $video;

        return $this;
    }
}
