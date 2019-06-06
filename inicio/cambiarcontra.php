
<?php
//se manda llamar la conexion
include("../conexion/conexion.php");
//$pvez=$_POST["pvez"];
$idUser    = $_POST["ide"];

$fecha=date("Y-m-d"); 
$hora=date ("H:i:s");
$contra  = $_POST["contra"];
$contraMD5=md5($contra);

mysql_query("SET NAMES utf8");
 $insertar = mysql_query("UPDATE usuarios SET
                            contra='$contraMD5',
                            fecha_registro='$fecha',
                            hora_registro='$hora',
                            id_registro='1',
                            pvez='1'
                        WHERE id_usuario='$idUser'
                             ",$conexion)or die(mysql_error());
?>