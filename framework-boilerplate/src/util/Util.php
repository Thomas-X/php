<?php

namespace TodoApp\util;

class Util {

    public static function toJSON($args) {
        return json_encode($args);
    }

    public static function getJSON() {
        $json = file_get_contents("php://input");
        $obj = json_decode($json, true);
        return $obj;
    }
}