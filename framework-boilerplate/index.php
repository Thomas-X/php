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
use TodoApp\handlers\SomeApiEndpoint;

$routes = [
    'home' => [
        'url' => '/',
        'handler' => new Home(),
    ],
    'someapiendpoint' => [
        'url' => '/api/endpoint',
        'handler' => new SomeApiEndpoint(),
    ],
    'notfound' => [
        'url' => '*',
        'handler' => new NotFound(),
    ]
];

$router = new Router($routes);
$renderedData = $router->renderPage();


function output($data) {
    $preHTMl = file_get_contents('html/pre.html');
    $postHTML = file_get_contents('html/post.html');
    echo $preHTMl . $data . $postHTML;
}

if (is_array($renderedData)) {
    if ($renderedData['raw'] === true) {
        output($renderedData['data']);
        return;
    }
};

// Render HTML which we should return.
output($renderedData);
