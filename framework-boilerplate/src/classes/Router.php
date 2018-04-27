<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/25/2018
 * Time: 9:17 PM
 */

namespace TodoApp\classes;

use TodoApp\config\TwigC;
use TodoApp\interfaces\IRouter;
use TodoApp\util\Util;

class Router implements IRouter {
    private $routes;

    public function __construct(array $routes) {
        $this->routes = $routes;
    }

    public function renderPage() {
        $path = $_SERVER['REQUEST_URI'];
        $httpRequestType = $_SERVER['REQUEST_METHOD'];

        foreach ($this->routes as $route) {
            if ($route['url'] === $path) {
                $handler = $route['handler'];
                $method = $route['method'];
                $type = $route['type'];
                $entity = $route['entity'];
                $handler->setEntity($entity);

                // Check HTTP method if valid with type of endpoint
                if($httpRequestType !== $method) {
                    http_response_code(400);
                    return TwigC::$twig->render('error', [
                        'error' =>
                        "Invalid HTTP request method, expected ". $method . " "
                    ]);
                }

                // Depending on the type, call methods accordingly
                switch($type) {
                    case 'index':
                        return $handler->index();
                    case 'create':
                        return $handler->create(Util::getJSON());
                    case 'delete':
                        return $handler->delete(Util::getJSON());
                    case 'update':
                        return $handler->update(Util::getJSON());
                }
                return $route['handler']->render();
            }
        }
        return $this->routes['notfound']['handler']->render();
    }
}