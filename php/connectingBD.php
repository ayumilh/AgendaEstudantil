<?php
$hostname = "localhost";
$database = "";
$username = "root";
$password = "";

$mysql = new mysqli($hostname, $username, $password, $database);
if($mysql->connect_errno){
  die("Falha ao conectar: (" . $mysql->connect_errno . ") " . $mysql->connect_error);
}

?>