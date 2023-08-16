<?php
// Lain Gamboa
    session_start();
    include_once("../../config/DBConect.php");
    include_once("../../config/Config.php");    

    if(isset($_POST['nombre']))      $nombre = $_POST['nombre']; 
    if(isset($_POST['docente']))     $docente = $_POST['docente'];
    if(isset($_POST['area']))        $area = $_POST['area'];
    if(isset($_POST['promedio']))    $promedio = $_POST['promedio'];

    $conexion = new Database;  
    $result = $conexion->CrearMateria($nombre,$docente,$area,$promedio);

    
    header("Location: ".ROOT."modulos/materias/materias.php?mensaje=".$result);



?>