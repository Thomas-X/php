<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/27/2018
 * Time: 2:13 PM
 */

namespace TodoApp\entities;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\GeneratedValue;


/**
 * @Entity(repositoryClass="TodoRepository")
 * @Table(name="todo")
 */
class Todo {

    /**
     * @param $data
     */
    public function set($data) {
        $this->setName($data['name']);
        $this->setIsFinished(false);
    }

    /**
     * @return array
     */
    public function get() {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'isFinished' => $this->isFinished,
        ];
    }

    /**
     * @Id
     * @GeneratedValue(strategy="AUTO")
     * @Column(type="integer")
     */
    protected $id;

    /**
     * @Column(type="string")
     */
    protected $name;

    /**
     * @Column(type="boolean")
     */
    protected $isFinished;

    /**
     * @return mixed
     */
    public function getisFinished() {
        return $this->isFinished;
    }

    /**
     * @param mixed $isFinished
     */
    public function setIsFinished($isFinished) {
        $this->isFinished = $isFinished;
    }

    /**
     * @return mixed
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id) {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getName() {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name) {
        $this->name = $name;
    }

}
