<?php

namespace App\Repository;

use App\Entity\CustomWebSiteImg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CustomWebSiteImg>
 *
 * @method CustomWebSiteImg|null find($id, $lockMode = null, $lockVersion = null)
 * @method CustomWebSiteImg|null findOneBy(array $criteria, array $orderBy = null)
 * @method CustomWebSiteImg[]    findAll()
 * @method CustomWebSiteImg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomWebSiteImgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CustomWebSiteImg::class);
    }

    public function add(CustomWebSiteImg $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CustomWebSiteImg $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return CustomWebSiteImg[] Returns an array of CustomWebSiteImg objects
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

//    public function findOneBySomeField($value): ?CustomWebSiteImg
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
