<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
//use App\Entity\TagClient;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinTable;
use App\Repository\ClientRepository;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Vich\UploaderBundle\Entity\File as EmbeddedFile;
use Vich\UploaderBundle\Mapping\Annotation\Uploadable;


#[ORM\Entity(repositoryClass: ClientRepository::class)]
#[ApiResource(
    collectionOperations: [
        "get",
    ],
    itemOperations: [
        "get",
    ],
)]
#[Uploadable]
class Client
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups("Projet")]
    private $nomClient;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $logo;

    #[ORM\OneToMany(mappedBy: 'client', targetEntity: Projet::class)]
    private $projet;

    #[ORM\OneToMany(mappedBy: 'Client', targetEntity: ClientImage::class, cascade: ["remove"])]
    private $clientImages;

    #[Vich\UploadableField(mapping: 'logoclient', fileNameProperty: 'logo')]
    private ?File $imageFile = null;


    #[ORM\Column(type: 'datetime', nullable: true)] //!obligé pour la mise à jour des images
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $histoire = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $enjeu = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $reponse = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $elementprecision = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups("Client")]
    private ?string $temoignage = null;

    #[ORM\ManyToOne(inversedBy: 'clients')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Secteur $secteur = null;

    #[ORM\ManyToMany(targetEntity: Categorie::class, inversedBy: 'clients')]
    private Collection $categorie;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $debut = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $fin = null;

    #[ORM\Column(length: 255)]
    private ?string $mission = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $duree = null;

    public function __construct()
    {
        $this->projet = new ArrayCollection();
        $this->clientImages = new ArrayCollection();
        $this->categorie = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomClient(): ?string
    {
        return $this->nomClient;
    }

    public function setNomClient(string $nomClient): self
    {
        $this->nomClient = $nomClient;

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

    /**
     * @return Collection<int, projet>
     */
    public function getProjet(): Collection
    {
        return $this->projet;
    }

    public function addProjet(projet $projet): self
    {
        if (!$this->projet->contains($projet)) {
            $this->projet[] = $projet;
            $projet->setClient($this);
        }

        return $this;
    }

    public function removeProjet(projet $projet): self
    {
        if ($this->projet->removeElement($projet)) {
            // set the owning side to null (unless already changed)
            if ($projet->getClient() === $this) {
                $projet->setClient(null);
            }
        }

        return $this;
    }

    public function __toString() {
        return $this->nomClient;
    }

    /**
     * @return Collection<int, ClientImage>
     */
    public function getClientImages(): Collection
    {
        return $this->clientImages;
    }

    public function addClientImage(ClientImage $clientImage): self
    {
        if (!$this->clientImages->contains($clientImage)) {
            $this->clientImages[] = $clientImage;
            $clientImage->setClient($this);
        }

        return $this;
    }

    public function removeClientImage(ClientImage $clientImage): self
    {
        if ($this->clientImages->removeElement($clientImage)) {
            // set the owning side to null (unless already changed)
            if ($clientImage->getClient() === $this) {
                $clientImage->setClient(null);
            }
        }

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

    public function getHistoire(): ?string
    {
        return $this->histoire;
    }

    public function setHistoire(?string $histoire): self
    {
        $this->histoire = $histoire;

        return $this;
    }

    public function getEnjeu(): ?string
    {
        return $this->enjeu;
    }

    public function setEnjeu(?string $enjeu): self
    {
        $this->enjeu = $enjeu;

        return $this;
    }

    public function getReponse(): ?string
    {
        return $this->reponse;
    }

    public function setReponse(?string $reponse): self
    {
        $this->reponse = $reponse;

        return $this;
    }

    public function getElementprecision(): ?string
    {
        return $this->elementprecision;
    }

    public function setElementprecision(?string $elementprecision): self
    {
        $this->elementprecision = $elementprecision;

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

    public function getMission(): ?string
    {
        return $this->mission;
    }

    public function setMission(string $mission): self
    {
        $this->mission = $mission;

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
