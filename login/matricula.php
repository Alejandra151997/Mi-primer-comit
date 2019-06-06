<?php
//se manda llamar la conexion
include("../conexion/conexion.php");

$matricula= $_POST["matricula"];

$fecha   = date("Y-m-d"); 
$hora    = date ("H:i:s");

//1-CONSULTA QUE EXISTA LA MATRICULA QUE INTRODUCES
// Codificacion de lenguaje
mysql_query("SET NAMES utf8");
//CONSULTA
	$consulta=mysql_query("SELECT
												id_alumno,
												id_carrera,
												id_persona,
												no_control,
												(SELECT personas.nombre FROM personas WHERE personas.id_persona=alumnos.id_persona) AS nPersona,
												(SELECT personas.ap_paterno FROM personas WHERE personas.id_persona=alumnos.id_persona) AS pPersona,
												(SELECT personas.ap_materno FROM personas WHERE personas.id_persona=alumnos.id_persona) AS mPersona	,											
												(SELECT carreras.nombre FROM carreras WHERE carreras.id_carrera=alumnos.id_carrera) AS nCarrera
	FROM
	alumnos
	WHERE no_control ='$matricula'",$conexion) or die (mysql_error());
	$row             =mysql_fetch_row($consulta);
	$contador        =mysql_num_rows($consulta);

//RESPUESTA

/*variables para insert*/
$idAlumno = $row[0];
$idPersona = $row[1];
$idCarrera=$row[2];


if ($contador!=0){
	//SI ENCONTRO EL ALUMNO Y VA A CHECAR SI ES UNA ENTRADA O UNA SALIDA
	$consulta2=mysql_query("SELECT 
							registros.id_registro,
							registros.id_alumno,
							registros.id_persona,
							registros.no_control,
							registros.fecha_ingreso,
							registros.hora_ingreso,
							registros.fecha_salida,
							registros.hora_salida
							FROM 
							registros 
							INNER JOIN alumnos on registros.id_alumno=alumnos.id_alumno
							WHERE alumnos.no_control='$matricula' and activo='1'  and fecha_ingreso='$fecha' and hora_salida is NULL
							",$conexion) or die (mysql_error());
							$rowSalidasNulas          =mysql_fetch_row($consulta2);
							$contador2        =mysql_num_rows($consulta2);
						
	$idRegistro=$rowSalidasNulas[0];


	if ($contador2!=0) {
		//SALIDA  PARA EL UPDATE
		$update=mysql_query("UPDATE registros SET 
							fecha_salida='$fecha',
							hora_salida='$hora'
							WHERE id_registro='$idRegistro'
							",$conexion) or die (mysql_error());

							$ES="Salida";
							$msj="Una salida";
							//$contador=1;
						

	}else{
		//ENTRADA  PARA EL INSERT
		$insertar = mysql_query("INSERT INTO registros
 								(
 								id_carrera,
 								id_alumno,
 								id_persona,
 								no_control,
 								fecha_ingreso,
 								hora_ingreso
 								)
							VALUES
								(
								'$idCarrera',
 								'$idAlumno',
 								'$idPersona',
 								'$matricula',
 								'$fecha',
 								'$hora'
								)
							",$conexion)or die(mysql_error());
		$ES="Entrada";
		$msj=" Una entrada";
		//$contador=1;

	}

}else{
//NO ENCONTRO MATRICULA
    $contador=0;
}

	//echo $contador;		

	//variables
	$nombreC= $row[4]." ".$row[5]." ".$row[6];	
	$carrera = $row[7];
	echo "$ES,$msj,$nombreC,$carrera";


 ?>
 
