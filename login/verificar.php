<?php 
include "../conexion/conexion.php";
$usuario   = $_POST['usuario'];
$contra    = $_POST['contra'];
$contraMD5 = md5($contra);
    mysql_query("SET NAMES utf8");
    $consulta = mysql_query("SELECT
                                usuarios.id_usuario,
                                usuarios.usuario,
                                usuarios.contra,
                                personas.nombre,
                                personas.ap_paterno,
                                personas.ap_materno,
                                CONCAT(personas.nombre,' ',personas.ap_paterno,' ',personas.ap_materno)as NomPersona,
                                personas.id_persona,
                                usuarios.pvez
                            FROM
                                usuarios
                            INNER JOIN personas ON usuarios.id_persona = personas.id_persona
                            WHERE usuario='$usuario' AND contra='$contraMD5'
                            AND personas.activo=1 AND usuarios.activo=1",$conexion)or die(mysql_error());
    $row=mysql_fetch_row($consulta);
    $contador=mysql_num_rows($consulta);
    $pvez=$row[8];
    // $contador=($contador==1)?1:0;
    if($contador==1){
        switch($pvez){
            case 1 :
             $contador=2;
            break;
            case 0 :
            $contador=1;
            break;
        }
    }else{
        $contador==0;
    }
    echo $contador;
    session_name("loginUsuario"); 
    // inicio la sesión 
    session_start(); 
    //defino la sesión que demuestra que el usuario estó autorizado 
    $_SESSION["autentificado"]= "SI"; 
    //defino la fecha y hora de inicio de sesión en formato aaaa-mm-dd hh:mm:ss 
    $_SESSION["ultimoAcceso"]= date("Y-n-j H:i:s"); 
    
    //Defino variables de session restantes
    $_SESSION["nCompleto"]= $row[6]; //Nombre de completo de la persona
    $_SESSION["idUsuario"]= $row[0]; //ID del usuario
    $_SESSION["idPersona"]= $row[7]; //ID de persona
?> 