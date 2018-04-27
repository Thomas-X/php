<?php

namespace TodoApp\interfaces;

interface ICrud {
    public function create($obj);
    public function read($id);
    public function update($obj);
    public function delete($id);
}