<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/25/2018
 * Time: 9:17 PM
 */

namespace TodoApp\classes;

use TodoApp\interfaces\IRouter;

class Router implements IRouter {
    private $routes;

    public function __construct(array $routes) {
        $this->routes = $routes;
    }

    public function renderPage() {
        $path = $_SERVER['REQUEST_URI'];

        foreach ($this->routes as $route) {
            if ($route['url'] === $path) {
                return $route['handler']->render();
            }
        }
        return $this->routes['notfound']['handler']->render();
    }
}