<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/27/2018
 * Time: 2:13 PM
 */

namespace TodoApp\entities;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;


/**
 * @Entity(repositoryClass="TodoRepository")
 * @ORM\Table(name="todo")
 */
class Todo {

    /** @Id @Column(type="integer") @GeneratedValue **/
    protected $id;
    /** @Column(type="string") **/
    protected $name;

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