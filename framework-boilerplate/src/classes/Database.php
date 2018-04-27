<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/25/2018
 * Time: 9:24 PM
 */

namespace TodoApp\classes;

use TodoApp\interfaces\ICrud;

class Database implements ICrud {
    protected $link;

    public function __construct() {
        $this->link = new PDO('mysql:host=localhost:3306;dbname=mydb', 'root', '');
    }

    public function create($obj) {
        // TODO: Implement create() method.
    }

    public function read($id) {
        // TODO: Implement read() method.
    }

    public function update($obj) {
        // TODO: Implement update() method.
    }

    public function delete($id) {
        // TODO: Implement delete() method.
    }
}