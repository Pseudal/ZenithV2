<?php

namespace App\Repository;

use App\Entity\Emails;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Emails>
 *
 * @method Emails|null find($id, $lockMode = null, $lockVersion = null)
 * @method Emails|null findOneBy(array $criteria, array $orderBy = null)
 * @method Emails[]    findAll()
 * @method Emails[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EmailsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Emails::class);
    }

    public function add(Emails $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Emails $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Emails[] Returns an array of Emails objects
//     */
   public function getAllNew(): array
   {
       return $this->createQueryBuilder('e')
           ->andWhere('e.new = :val')
           ->setParameter('val', 1)
           ->orderBy('e.id', 'ASC')
           ->getQuery()
           ->getResult()
       ;
   }

   public function getAllDesc(): array
   {
       return $this->createQueryBuilder('e')
           ->orderBy('e.id', 'DESC')
           ->getQuery()
           ->getResult()
       ;
   }

//    public function findOneBySomeField($value): ?Emails
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
public function getAllArrayCount()
{
    return $this->createQueryBuilder('c')
    ->select('count(c.new)')
    ->andWhere('c.new = 1')
    ->getQuery()
    ->getSingleScalarResult();
    ;
}

public function getAllArray()
{
    return $this->createQueryBuilder('c')
    ->orderBy('c.id', 'DESC')
     //    ->setMaxResults(10)
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
