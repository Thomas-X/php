<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/25/2018
 * Time: 9:33 PM
 */

namespace TodoApp\handlers;

use TodoApp\config\TwigC;
use TodoApp\interfaces\IHandler;

/**
 * Class Home
 * @package TodoApp\handlers
 */
class Home extends Handler implements IHandler {

    /**
     * @return mixed
     */
    public function render() {
        return TwigC::$twig->render('index', array('name' => 'Fabien'));
    }
}