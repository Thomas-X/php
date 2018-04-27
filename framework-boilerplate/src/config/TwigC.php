<?php
namespace TodoApp\config;

use Twig\Environment;
use Twig\Loader\ArrayLoader;

class TwigC {
    public static $twig;
    public static $loader;

    public static function setStatics ($loaderInstance) {
        self::$loader = $loaderInstance;
        self::$twig = new Environment(self::$loader);
    }
}
TwigC::setStatics(new ArrayLoader(array(
    'index' => 'Hello {{ name }}!',
)));