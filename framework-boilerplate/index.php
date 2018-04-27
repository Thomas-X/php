<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/25/2018
 * Time: 10:07 PM
 */
require 'bootstrap.php';

use TodoApp\classes\Router;
use TodoApp\handlers\Home;
use TodoApp\handlers\NotFound;
use TodoApp\handlers\Todos;
use TodoApp\entities\Todo;

$routes = [
    'home' => [
        'url' => '/',
        'handler' => new Home(),
        'type' => null,
        'entity' => null,
        'method' => 'GET',
    ],
    'getAllTodos' => [
        'url' => '/api/getAllTodos',
        'handler' => new Todos(),
        'type' => 'index',
        'entity' => Todo::class,
        'method' => 'GET',
    ],
    'createTodo' => [
        'url' => '/api/createTodo',
        'handler' => new Todos(),
        'type' => 'create',
        'entity' => Todo::class,
        'method' => 'POST',
    ],
    'deleteTodo' => [
        'url' => '/api/deleteTodo',
        'handler' => new Todos(),
        'type' => 'delete',
        'entity' => Todo::class,
        'method' => 'POST',
    ],
    'updateTodo' => [
        'url' => '/api/updateTodo',
        'handler' => new Todos(),
        'type' => 'update',
        'entity' => Todo::class,
        'method' => 'POST',
    ],
    'notfound' => [
        'url' => '*',
        'handler' => new NotFound(),
        'method' => 'GET',
    ]
];

$router = new Router($routes);
$renderedData = $router->renderPage();

function output($data) {
    //    $preHTMl = file_get_contents('html/pre.html');
    //    $postHTML = file_get_contents('html/post.html');
    //    echo $preHTMl . $data . $postHTML;
    echo $data;
}

// Render HTML/JSON/whatever which we should return.
output($renderedData);
