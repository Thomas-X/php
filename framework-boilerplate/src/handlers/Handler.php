<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/25/2018
 * Time: 10:48 PM
 */

namespace TodoApp\handlers;

use EntityManagerCreator;
use TodoApp\classes\Database;
use TodoApp\entities\Todo;
use TodoApp\interfaces\IHandlerParent;
use TodoApp\util\json;
use TodoApp\entities as ENTITIES;
use TodoApp\util\Util;

/**
 * Class Handler
 * @package TodoApp\handlers
 */
class Handler implements IHandlerParent {

    private $entity;

    /**
     * @param mixed $entity
     */
    public function setEntity($entity) {
        $this->entity = $entity;
    }

    /**
     * @param $params
     *
     * @return string
     */
    public function create($params) {
        $document = new $this->entity();

        $document->set($params);

        Database::save($document);

        return Util::toJSON($document->get());
    }

    /**
     * @return string
     */
    public function index() {
        $em = EntityManagerCreator::getEntityManager();
        $qb = $em->createQueryBuilder();
        $q = 0 / 0;
        $qb
            ->select('t')
            ->from(Todo::class, 't');
        $query = $qb->getQuery();
        return Util::toJSON($query->getArrayResult());
    }
}