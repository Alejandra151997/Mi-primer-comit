<?php
//se manda llamar la conexion
include("../conexion/conexion.php");

$idUser    = $_POST["idUser"];

$fecha=date("Y-m-d"); 
$hora=date ("H:i:s");

$contraMD5=md5('12345');

mysql_query("SET NAMES utf8");
 $insertar = mysql_query("UPDATE usuarios SET
							contra='$contraMD5',
							fecha_registro='$fecha',
							hora_registro='$hora',
							pvez='1',
							id_registro='1'
						WHERE id_usuario='$idUser'
							 ",$conexion)or die(mysql_error());
?>