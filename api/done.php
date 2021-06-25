<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost;dbname=to-do-list","root","root2021");
$sql = "UPDATE tasks SET done = :done WHERE idtasks = $id";
$addClassesQuery = $dbh->prepare($sql);
$addClassesQuery->bindParam(":done",$_POST["done"],PDO::PARAM_STR);
$addClassesQuery->execute();
?>