<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProjetRepository;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Vich\UploaderBundle\Entity\File as EmbeddedFile;
use Vich\UploaderBundle\Mapping\Annotation\Uploadable;

#[ORM\Entity(repositoryClass: ProjetRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['Projet']],
    collectionOperations: [
        "get",
    ],
    itemOperations: [
        "get",
    ],
)]
#[Uploadable]
class Projet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups("Projet")]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups("Projet")]
    private $logo;
    
    #[ORM\ManyToOne(targetEntity: Client::class, inversedBy: 'projet')]
    #[JoinColumn(name: "client_id", referencedColumnName: "id", onDelete:"SET NULL")]
    #[Groups("Projet")]
    private $client;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups("Projet")]
    private $projet;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups("Projet")]
    private $description;

    #[ORM\OneToMany(mappedBy: 'projet', targetEntity: ProjetImage::class, cascade: ["remove"])]
    #[Groups("Projet")]
    private $image;

    #[ORM\Column(length: 255)]
    #[Groups("Projet")]
    private ?string $mission = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups("Projet")]
    private ?string $demande = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups("Projet")]
    private ?string $defi = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups("Projet")]
    private ?string $action = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups("Projet")]
    private ?string $focus = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups("Projet")]
    private ?string $temoignage = null;

    #[Vich\UploadableField(mapping: 'logoprojet', fileNameProperty: 'logo')]
    private ?File $imageFile = null;

    #[ORM\Column(type: 'datetime', nullable: true)] //!obligé pour la mise à jour des images
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\ManyToOne(inversedBy: 'projets')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups("Projet")]
    private ?Secteur $secteur = null;

    #[ORM\ManyToMany(targetEntity: Categorie::class, inversedBy: 'projets')]
    #[Groups("Projet")]
    private Collection $categorie;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups("Projet")]
    private ?\DateTimeInterface $debut = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups("Projet")]
    private ?\DateTimeInterface $fin = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $duree = null;


    public function __construct()
    {
        $this->image = new ArrayCollection();
        $this->categorie = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProjet(): ?string
    {
        return $this->projet;
    }

    public function setProjet(string $projet): self
    {
        $this->projet = $projet;

        return $this;
    }
    /**
     * @return Collection<int, ProjetImage>
     */
    public function getImage(): Collection
    {
        return $this->image;
    }

    public function addImage(ProjetImage $image): self
    {
        if (!$this->image->contains($image)) {
            $this->image[] = $image;
            $image->setProjet($this);
        }

        return $this;
    }

    public function removeImage(ProjetImage $image): self
    {
        if ($this->image->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getProjet() === $this) {
                $image->setProjet(null);
            }
        }

        return $this;
    }
    
    public function getClient(): ?Client
    {
        return $this->client;
    }
    
    public function setClient(?Client $client): self
    {
        $this->client = $client;
        
        return $this;
    }  
    
    public function __toString() {
        return $this->projet;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getMission(): ?string
    {
        return $this->mission;
    }

    public function setMission(string $mission): self
    {
        $this->mission = $mission;

        return $this;
    }

    public function getDemande(): ?string
    {
        return $this->demande;
    }

    public function setDemande(?string $demande): self
    {
        $this->demande = $demande;

        return $this;
    }

    public function getDefi(): ?string
    {
        return $this->defi;
    }

    public function setDefi(?string $defi): self
    {
        $this->defi = $defi;

        return $this;
    }

    public function getAction(): ?string
    {
        return $this->action;
    }

    public function setAction(?string $action): self
    {
        $this->action = $action;

        return $this;
    }

    public function getFocus(): ?string
    {
        return $this->focus;
    }

    public function setFocus(?string $focus): self
    {
        $this->focus = $focus;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(?string $logo): void
    {
        $this->logo = $logo;

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

    public function getSecteur(): ?Secteur
    {
        return $this->secteur;
    }

    public function setSecteur(?Secteur $secteur): self
    {
        $this->secteur = $secteur;

        return $this;
    }

    /**
     * @return Collection<int, Categorie>
     */
    public function getCategorie(): Collection
    {
        return $this->categorie;
    }

    public function addCategorie(Categorie $categorie): self
    {
        if (!$this->categorie->contains($categorie)) {
            $this->categorie->add($categorie);
        }

        return $this;
    }

    public function removeCategorie(Categorie $categorie): self
    {
        $this->categorie->removeElement($categorie);

        return $this;
    }

    public function getDebut(): ?\DateTimeInterface
    {
        return $this->debut;
    }

    public function setDebut(?\DateTimeInterface $debut): self
    {
        $this->debut = $debut;

        return $this;
    }

    public function getFin(): ?\DateTimeInterface
    {
        return $this->fin;
    }

    public function setFin(?\DateTimeInterface $fin): self
    {
        $this->fin = $fin;

        return $this;
    }

    public function getTemoignage(): ?string
    {
        return $this->temoignage;
    }

    public function setTemoignage(?string $temoignage): self
    {
        $this->temoignage = $temoignage;

        return $this;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    public function getDuree(): ?string
    {
        return $this->duree;
    }

    public function setDuree(?string $duree): self
    {
        $this->duree = $duree;

        return $this;
    }
}
