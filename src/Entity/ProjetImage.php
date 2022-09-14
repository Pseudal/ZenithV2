<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProjetImageRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Vich\UploaderBundle\Mapping\Annotation\Uploadable;
use Vich\UploaderBundle\Entity\File as EmbeddedFile;

#[ORM\Entity(repositoryClass: ProjetImageRepository::class)]
#[ApiResource(
    collectionOperations: [
        "get",
    ],
    itemOperations: [
        "get",
    ],
)]
#[Uploadable]
class ProjetImage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Projet::class, inversedBy: 'image')]
    private $projet;

    /**
     * NOTE: This is not a mapped field of entity metadata, just a simple property. 
     * * Partie de vichuploader
     */
    #[Vich\UploadableField(mapping: 'imageprojet', fileNameProperty: 'image')]
    private ?File $imageFile = null;

    #[ORM\Column(type: 'string', length: 255)]
    private $image;

    #[ORM\Column(type: 'datetime')] //!obligé pour la mise à jour des images
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\Column(options: ["default" => 0])]
    private ?bool $header = null;

    #[ORM\Column(options: ["default" => 0])]
    private ?bool $secondaire = null;

    #[ORM\Column(options: ["default" => 0])]
    private ?bool $focus = null;

    #[ORM\Column(options: ["default" => 1])]
    private ?bool $visible = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): void
    {
        $this->image = $image;

    }

    public function getProjet(): ?Projet
    {
        return $this->projet;
    }

    public function setProjet(?Projet $projet): self
    {
        $this->projet = $projet;

        return $this;
    }

    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function __toString() {
        return $this->projet;
    }

    public function isHeader(): ?bool
    {
        return $this->header;
    }

    public function setHeader(bool $header): self
    {
        $this->header = $header;

        return $this;
    }

    public function isSecondaire(): ?bool
    {
        return $this->secondaire;
    }

    public function setSecondaire(bool $secondaire): self
    {
        $this->secondaire = $secondaire;

        return $this;
    }

    public function isFocus(): ?bool
    {
        return $this->focus;
    }

    public function setFocus(bool $focus): self
    {
        $this->focus = $focus;

        return $this;
    }

    public function isVisible(): ?bool
    {
        return $this->visible;
    }

    public function setVisible(bool $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

}
