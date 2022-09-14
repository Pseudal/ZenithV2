<?php

namespace App\Entity;

use App\Entity\Client;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ClientImageRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Vich\UploaderBundle\Entity\File as EmbeddedFile;
use Vich\UploaderBundle\Mapping\Annotation\Uploadable;

#[ORM\Entity(repositoryClass: ClientImageRepository::class)]
#[ApiResource(
    collectionOperations: [
        "get",
    ],
    itemOperations: [
        "get",
    ],
)]
#[Uploadable]
class ClientImage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Client::class, inversedBy: 'clientImages')]
    private $Client;

    #[Vich\UploadableField(mapping: 'imageclient', fileNameProperty: 'image')]
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
    private ?bool $imageprecision = null;

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

    public function getClient(): ?Client
    {
        return $this->Client;
    }

    public function setClient(?Client $Client): self
    {
        $this->Client = $Client;

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
        return $this->image;
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

    public function isImageprecision(): ?bool
    {
        return $this->imageprecision;
    }

    public function setImageprecision(bool $imageprecision): self
    {
        $this->imageprecision = $imageprecision;

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
