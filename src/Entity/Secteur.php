<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\SecteurRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: SecteurRepository::class)]
#[ApiResource(
    collectionOperations: [
        "get",
    ],
    itemOperations: [
        "get",
    ],
)]
class Secteur
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups("Projet")]
    private ?string $secteur = null;

    #[ORM\OneToMany(mappedBy: 'secteur', targetEntity: Projet::class)]
    private Collection $projets;

    #[ORM\OneToMany(mappedBy: 'secteur', targetEntity: Client::class)]
    private Collection $clients;

    public function __construct()
    {
        $this->projets = new ArrayCollection();
        $this->clients = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSecteur(): ?string
    {
        return $this->secteur;
    }

    public function setSecteur(string $secteur): self
    {
        $this->secteur = $secteur;

        return $this;
    }

    /**
     * @return Collection<int, Projet>
     */
    public function getProjets(): Collection
    {
        return $this->projets;
    }

    public function addProjet(Projet $projet): self
    {
        if (!$this->projets->contains($projet)) {
            $this->projets->add($projet);
            $projet->setSecteur($this);
        }

        return $this;
    }

    public function removeProjet(Projet $projet): self
    {
        if ($this->projets->removeElement($projet)) {
            // set the owning side to null (unless already changed)
            if ($projet->getSecteur() === $this) {
                $projet->setSecteur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Client>
     */
    public function getClients(): Collection
    {
        return $this->clients;
    }

    public function addClient(Client $client): self
    {
        if (!$this->clients->contains($client)) {
            $this->clients->add($client);
            $client->setSecteur($this);
        }

        return $this;
    }

    public function removeClient(Client $client): self
    {
        if ($this->clients->removeElement($client)) {
            // set the owning side to null (unless already changed)
            if ($client->getSecteur() === $this) {
                $client->setSecteur(null);
            }
        }

        return $this;
    }

    public function __toString() {
        return $this->secteur;
    }

}
