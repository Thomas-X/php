<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/25/2018
 * Time: 9:24 PM
 */

namespace TodoApp\classes;

use EntityManagerCreator;
use TodoApp\interfaces\ICrud;

class Database implements ICrud {
    protected $link;

    public static function save ($document) {
        $entityManager = EntityManagerCreator::getEntityManager();

        $entityManager->persist($document);
        $entityManager->flush();
    }
}