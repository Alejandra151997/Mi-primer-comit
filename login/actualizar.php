<?php
//se manda llamar la conexion
include("../conexion/conexion.php");

$usuario = $_POST["usuario"];
$contra  = $_POST["contra"];
$contraMD5=md5($contra);
//$ide     = $_POST["ide"];

$usuario = trim($usuario);
//$contra  = trim($contra);

$fecha   = date("Y-m-d"); 
$hora    = date ("H: i: s");

mysql_query("SET NAMES utf8");
 $insertar = mysql_query("UPDATE usuarios SET
							contra='$contraMD5',
							fecha_registro='$fecha',
							hora_registro='$hora',
							id_registro='1',
							pvez='0'
						WHERE usuario='$usuario'
							 ",$conexion)or die(mysql_error());

?>