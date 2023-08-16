<?php
// Lain Gamboa
    session_start();
    include_once("../../config/DBConect.php");
    include_once("../../config/Config.php");

    if(isset($_POST['nombre']))     $nombre = $_POST['nombre']; 
    if(isset($_POST['docente']))    $docente = $_POST['docente']; 
    if(isset($_POST['area']))       $area = $_POST['area']; 
    if(isset($_POST['promedio']))   $promedio = $_POST['promedio']; 
    if(isset($_POST['id']))         $id = $_POST['id']; 

    $conexion = new Database;  
    $result = $conexion->updateMateria($nombre,$docente,$area,$promedio,$id);

    header("Location: ".ROOT."modulos/materias/materias.php?mensaje=".$result);

?>