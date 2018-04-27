<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/25/2018
 * Time: 10:46 PM
 */

namespace TodoApp\handlers;

use TodoApp\interfaces\IHandler;

class NotFound extends Handler implements IHandler {

    public static function getBurgers () {
        return ['Cheeseburger', 'Home grown huma -- beef burger!', 'Deer burger'];
    }

    public function render(): string {
        return '
                <div style="width:100vw; height:100vh; display: flex; justify-content: center; align-items: center">
                    <h1>404 not found!</h1>
                </div>
        ';
    }
}