<?php

namespace App\Repository;

use App\Entity\CustomWebSiteText;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CustomWebSiteText>
 *
 * @method CustomWebSiteText|null find($id, $lockMode = null, $lockVersion = null)
 * @method CustomWebSiteText|null findOneBy(array $criteria, array $orderBy = null)
 * @method CustomWebSiteText[]    findAll()
 * @method CustomWebSiteText[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomWebSiteTextRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CustomWebSiteText::class);
    }

    public function add(CustomWebSiteText $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CustomWebSiteText $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return CustomWebSiteText[] Returns an array of CustomWebSiteText objects
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

//    public function findOneBySomeField($value): ?CustomWebSiteText
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
