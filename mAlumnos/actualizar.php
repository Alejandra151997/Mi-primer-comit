<?php
//se manda llamar la conexion
include("../conexion/conexion.php");


//RECIBE VARIABLES AJAX
$noControl = $_POST["noControl"];
$idCarrera = $_POST["idCarrera"];
$ide       = $_POST["ide"];

$noControl    =trim($noControl);
$idCarrera   =trim($idCarrera);


$fecha=date("Y-m-d"); 
$hora=date ("H:i:s");

mysql_query("SET NAMES utf8");
 $insertar = mysql_query("UPDATE alumnos SET  
 								
 								no_control='$noControl',
 								id_carrera='$idCarrera',
 								fecha_registro='$fecha',
 								hora_registro='$hora',
 								id_registro='1'
 								
								WHERE id_alumno='$ide'
							",$conexion)or die(mysql_error());

?>