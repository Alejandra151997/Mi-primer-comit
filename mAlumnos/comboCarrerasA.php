<?php 
include "../conexion/conexion.php";

mysql_query("SET NAMES utf8");
$consulta = mysql_query("SELECT
							carreras.id_carrera,
							carreras.nombre
						FROM
							carreras WHERE carreras.activo=1",$conexion)or die(mysql_error());
 ?>
 	<option value="0">Seleccione...</option>
 <?php 

while ($row=mysql_fetch_row($consulta))
 {
	?>	
		<option value="<?php echo	$row[0]; ?>"><?php echo $row[1]; ?></option>
	<?php 
}

?> 
