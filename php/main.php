<?php

// verificar se o button com value["send"] foi clicado
if(isset($_POST["send"])){
  // MATERIA -> INSERT INTO
  $sigla = $_POST[""]; //PK
  $disciplina = $_POST[""];


  // ATIVIDADE -> INSERT INTO
  $atv_data = $_POST[""];
  $atv_desc = $_POST[""];
  $foto = $_FILES[""];
  $link = $_POST[""];
  $observacao = $_POST[""];
  $entregar = $_POST[""];


  //PROVA -> INSERT INTO
  $prova_data = $_POST[""];
  $conteudo = $_POST[""];
  $revisar = $_POST[""];
  $nota = $_POST[""];


}
?>