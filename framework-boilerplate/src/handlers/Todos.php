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

/**
 * Class Todos
 * @package TodoApp\handlers
 */
class Todos extends Handler implements IHandler {
    private $em;

    /**
     * @param $isSuccess
     *
     * @return string
     */
    private static function returnStatus ($isSuccess) {
        return Util::toJSON([ 'success' => $isSuccess]);
    }

    /**
     * @param $dql
     *
     * @return string
     */
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

    /**
     * @param      $val
     * @param      $field
     * @param bool $hasNext
     * @param bool $noStrings
     *
     * @return string
     */
    private static function generateSet($val, $field, $hasNext = false, $noStrings = false) {
        if(!$val) {
            return $str = '';
        }
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

    /**
     * Todos constructor.
     */
    public function __construct() {
        $this->em = EntityManagerCreator::getEntityManager();
    }

    /**
     * @param $params
     *
     * @return string
     */
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

    /**
     * @param $params
     *
     * @return string
     */
    public function delete($params) {
        $dql = "DELETE FROM " . Todo::class . " t WHERE t.id = " . $params['id'];
        return $this->execQuery($dql);
    }

    /**
     * @return null
     */
    public function render() {
        // This is not used anyway.
        return null;
    }
}