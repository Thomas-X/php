<?php
// create_product.php <name>

require '../bootstrap.php';

use TodoApp\entities\Todo;

$todoName = $argv[1];

$todo = new Todo();
//$todo->setIsFinished(false);
$todo->setName($todoName);

$entityManager = EntityManagerCreator::getEntityManager();

$entityManager->persist($todo);

$entityManager->flush();

echo "Created Product with ID " . $todo->getId() . "\n";