<?php

namespace TodoApp\util;

/**
 * Class Util
 * @package TodoApp\util
 */
class Util {

    /**
     * @param $args
     *
     * @return string
     */
    public static function toJSON($args) {
        return json_encode($args);
    }

    /**
     * @return mixed
     */
    public static function getJSON() {
        $json = file_get_contents("php://input");
        $obj = json_decode($json, true);
        return $obj;
    }
}