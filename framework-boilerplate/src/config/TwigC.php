<?php
namespace TodoApp\config;

use Twig\Environment;
use Twig\Loader\ArrayLoader;

/**
 * Class TwigC
 * @package TodoApp\config
 */
class TwigC {
    public static $twig;
    public static $loader;

    /**
     * @param $loaderInstance
     */
    public static function setStatics ($loaderInstance) {
        self::$loader = $loaderInstance;
        self::$twig = new Environment(self::$loader);
    }
}
TwigC::setStatics(new ArrayLoader(array(
    'index' => 'Hello {{ name }}!',
    'error' => '<pre>{{ error }}</pre>'
)));