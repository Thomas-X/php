<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/26/2018
 * Time: 1:17 AM
 */

namespace TodoApp\handlers;


use TodoApp\interfaces\IHandler;

class SomeApiEndpoint implements IHandler {

    /**
     * @return string | [ 'data' => 'some html or whatever', 'raw' => true ]
     */
    public function render() {
        $arr = [
            'name' => 'Thomas',
            'occupation' => 'h3ckerman',
            'address' => 'l33t'
        ];


        return [
          'data' => json_encode($arr),
          'raw' => true,
        ];
    }
}