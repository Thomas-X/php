<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

require 'vendor/autoload.php';

class EntityManagerCreator {
    static protected $entityManager;

    private static function createEntityManager() {
        // Create a simple "default" Doctrine ORM configuration for Annotations
        $isDevMode = true;
        $config = Setup::createAnnotationMetadataConfiguration(array(__DIR__ . "/src/entities"), $isDevMode);
        // or if you prefer yaml or XML
        //$config = Setup::createXMLMetadataConfiguration(array(__DIR__."/config/xml"), $isDevMode);
        //$config = Setup::createYAMLMetadataConfiguration(array(__DIR__."/config/yaml"), $isDevMode);

        // database configuration parameters
        $conn = array(
            'driver' => 'pdo_mysql',
            'host' => '127.0.0.1',
            'dbname' => 'mydb',
            'user' => 'root',
            'password' => ''
        );

        // obtaining the entity manager
        self::$entityManager = EntityManager::create($conn, $config);
    }

    /**
     * @return EntityManager
     */
    public static function getEntityManager(): EntityManager {
        if(!self::$entityManager) {
            self::createEntityManager();
        }
        return self::$entityManager;
    }
}
