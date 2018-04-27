<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 4/26/2018
 * Time: 1:17 AM
 */

namespace TodoApp\handlers;

use EntityManagerCreator;
use TodoApp\entities\Todo;
use TodoApp\interfaces\IHandler;
use TodoApp\util\Util;

class Todos extends Handler implements IHandler {
    private $em;

    private static function returnStatus ($isSuccess) {
        return Util::toJSON([ 'success' => $isSuccess]);
    }

    private function execQuery($dql) {
        $query = $this->em->createQuery($dql);
        $result = $query->getResult();
        $this->em->flush();

        if ((int)$result === 1) {
            return Todos::returnStatus(true);
        }
        if ((int)$result === 0) {
            return Todos::returnStatus(false);
        }
        return Util::toJSON($result);
    }

    private static function generateSet($val, $field, $hasNext = false, $noStrings = false) {
        if ($hasNext) {
            if (!$noStrings) {
                $str = (string)$val ? "t." . $field . " = '" . $val . "'" : '';
                return $str . ',';
            }
            if ($noStrings) {
                $str = (string)$val ? "t." . $field . " = " . $val . "" : '';
                return $str . ',';
            }
        }
        if ($noStrings) {
            return (string)$val ? "t." . $field . " = " . $val . "" : '';
        }
        return (string)$val ? "t." . $field . " = '" . $val . "'" : '';
    }

    public function __construct() {
        $this->em = EntityManagerCreator::getEntityManager();
    }

    public function update($params) {
        if(!$params['id']) {
            return Todos::returnStatus(false);
        }
        // 🤗🤗🤗 don't look!
        $dql = "UPDATE " . Todo::class . " t SET
        " . Todos::generateSet($params['isFinished'], 'isFinished', true, true) . "
        " . Todos::generateSet($params['name'], 'name') . "
        WHERE t.id=" . $params['id'] . "
        ";

        // exec queryy
        return $this->execQuery($dql);
    }

    public function delete($params) {
        $dql = "DELETE FROM " . Todo::class . " t WHERE t.id = " . $params['id'];
        return $this->execQuery($dql);
    }

    public function render() {
        // This is not used anyway.
        return null;
    }
}