<?php

namespace TodoApp\interfaces;

/**
 * Interface IHandler
 * @package TodoApp\interfaces
 */
interface IHandler {

    /**
     * @return string | [ 'data' => 'some html or whatever', 'raw' => true ]
     */
    public function render();
}