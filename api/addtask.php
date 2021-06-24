<?php
$dbh = new PDO("mysql:host=localhost;dbname=to-do-list","root","root2021");
$sql = " INSERT INTO tasks(taskname, taskdate) VALUES (:taskname,:taskdate)";
$addTaskQuery = $dbh->prepare($sql);
$addTaskQuery->bindParam(":taskname",$_POST["taskname"],PDO::PARAM_STR);
// $addTaskQuery->bindParam(":taskdate",$_POST["taskdate"],PDO::PARAM_STR);
// $addTaskQuery->bindParam(":done",$_POST["done"],PDO::PARAM_STR);
$addTaskQuery->execute();
?>