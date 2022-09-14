<?php

namespace App\Repository;

use App\Entity\ClientImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ClientImage>
 *
 * @method ClientImage|null find($id, $lockMode = null, $lockVersion = null)
 * @method ClientImage|null findOneBy(array $criteria, array $orderBy = null)
 * @method ClientImage[]    findAll()
 * @method ClientImage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClientImageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ClientImage::class);
    }

    public function add(ClientImage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ClientImage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ClientImage[] Returns an array of ClientImage objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ClientImage
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
public function findByExampleField($value): array
{
    return $this->createQueryBuilder('c')
        ->andWhere('c.Client  = :val')
        ->setParameter('val', $value)
        ->orderBy('c.id', 'ASC')
     //    ->setMaxResults(10)
        ->getQuery()
        ->getResult()
    ;
}

public function findLast(): array
{
    return $this->createQueryBuilder('c')
    ->orderBy('c.id', 'DESC')
    ->setMaxResults(1)
     //    ->setMaxResults(10)
     ->getQuery()
     ->getResult()
    ;
}
public function checkHeader($value): ?ClientImage
{
   return $this->createQueryBuilder('c')
       ->andWhere('c.header = 1 AND c.Client = :val')
       ->setParameter('val', $value)
       ->getQuery()
       ->getOneOrNullResult()
   ;
}
public function checkSecondaire($value): ?ClientImage
{
   return $this->createQueryBuilder('c')
       ->andWhere('c.secondaire = 1 AND c.Client = :val')
       ->setParameter('val', $value)
       ->getQuery()
       ->getOneOrNullResult()
   ;
}
public function checkFocus($value): ?ClientImage
{
   return $this->createQueryBuilder('c')
       ->andWhere('c.imageprecision = 1 AND c.Client = :val')
       ->setParameter('val', $value)
       ->getQuery()
       ->getOneOrNullResult()
   ;
}

public function getOneById($value): ?ClientImage
{
   return $this->createQueryBuilder('c')
       ->andWhere('c.id = :val')
       ->setParameter('val', $value)
       ->getQuery()
       ->getOneOrNullResult()
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
