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

/**
 * Class Database
 * @package TodoApp\classes
 */
class Database implements ICrud {
    protected $link;

    /**
     * @param $document
     */
    public static function save ($document) {
        $entityManager = EntityManagerCreator::getEntityManager();

        $entityManager->persist($document);
        $entityManager->flush();
    }
}