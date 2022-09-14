<?php

namespace App\Repository;

use App\Entity\Projet;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Projet>
 *
 * @method Projet|null find($id, $lockMode = null, $lockVersion = null)
 * @method Projet|null findOneBy(array $criteria, array $orderBy = null)
 * @method Projet[]    findAll()
 * @method Projet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Projet::class);
    }

    public function add(Projet $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Projet $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Projet[] Returns an array of Projet objects
//     */
   public function findByExampleField($value): array
   {
       return $this->createQueryBuilder('c')
           ->andWhere('c.client = :val')
           ->setParameter('val', $value)
           ->orderBy('c.id', 'ASC')
           ->getQuery()
           ->getResult()
       ;
   }

   public function findOneBySomeField($value): ?Projet
   {
       return $this->createQueryBuilder('c')
           ->andWhere('c.id = :val')
           ->setParameter('val', $value)
           ->getQuery()
           ->getOneOrNullResult()
       ;
   }

   public function getAll()
   {
       return $this->createQueryBuilder('c')
        ->getQuery()
        ->getArrayResult();
   }
   
   public function getNull(): array
   {
       return $this->createQueryBuilder('c')
           ->andWhere('c.client is NULL')
           ->orderBy('c.id', 'ASC')
           ->getQuery()
           ->getArrayResult();
       ;
   }
   public function getCount()
   {
       return $this->createQueryBuilder('c')
       ->select('count(c.id)')
       ->getQuery()
       ->getSingleScalarResult();
       ;
   }

}
