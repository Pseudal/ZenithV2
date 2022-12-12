<?php

namespace App\Repository;

use App\Entity\ProjetImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProjetImage>
 *
 * @method ProjetImage|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProjetImage|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProjetImage[]    findAll()
 * @method ProjetImage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjetImageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProjetImage::class);
    }

    public function add(ProjetImage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ProjetImage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ProjetImage[] Returns an array of ProjetImage objects
//     */
   public function findByExampleField($value): array
   {
       return $this->createQueryBuilder('c')
           ->andWhere('c.projet  = :val')
           ->setParameter('val', $value)
           ->orderBy('c.id', 'ASC')
        //    ->setMaxResults(10)
           ->getQuery()
           ->getResult()
       ;
   }

   public function findLast($projet): array
   {
       return $this->createQueryBuilder('c')
       ->orderBy('c.id', 'DESC')
       ->andWhere('c.projet = :val')
       ->setParameter('val', $projet)
       ->setMaxResults(1)
        //    ->setMaxResults(10)
        ->getQuery()
        ->getResult()
       ;
   }

    public function getOneById($value): ?ProjetImage
    {
       return $this->createQueryBuilder('c')
           ->andWhere('c.id = :val')
           ->setParameter('val', $value)
           ->getQuery()
           ->getOneOrNullResult()
       ;
    }

    public function checkHeader($value): ?ProjetImage
    {
       return $this->createQueryBuilder('c')
           ->andWhere('c.header = 1 AND c.projet = :val')
           ->setParameter('val', $value)
           ->getQuery()
           ->getOneOrNullResult()
       ;
    }
    public function checkSecondaire($value): ?ProjetImage
    {
       return $this->createQueryBuilder('c')
           ->andWhere('c.secondaire = 1 AND c.projet = :val')
           ->setParameter('val', $value)
           ->getQuery()
           ->getOneOrNullResult()
       ;
    }
    public function checkFocus($value): ?ProjetImage
    {
       return $this->createQueryBuilder('c')
           ->andWhere('c.focus = 1 AND c.projet = :val')
           ->setParameter('val', $value)
           ->getQuery()
           ->getOneOrNullResult()
       ;
    }

    public function checkCreation($value): ?ProjetImage
    {
       return $this->createQueryBuilder('c')
           ->andWhere('c.creation = 1 AND c.projet = :val')
           ->setParameter('val', $value)
           ->getQuery()
           ->getOneOrNullResult()
       ;
    }

//    public function findOneBySomeField($value): ?ProjetImage
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
public function getCount()
{
    return $this->createQueryBuilder('c')
    ->select('count(c.id)')
    ->getQuery()
    ->getSingleScalarResult();
    ;
}

public function findByExampleFieldArray($value): array
{
    return $this->createQueryBuilder('c')
        ->andWhere('c.projet  = :val')
        ->setParameter('val', $value)
        ->orderBy('c.id', 'ASC')
     //    ->setMaxResults(10)
        ->getQuery()
        ->getArrayResult();
    ;
}
}
