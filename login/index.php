<?php 
include'../conexion/conexion.php';
// Variables de configuración
$titulo="Registro de alumnos";
$opcionMenu="A";
 ?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="../plugins/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="../plugins/fontawesome-free-5.8.1-web/css/all.min.css">
	<link rel="stylesheet" type="text/css" href="../css/estilos.css">
	<!-- Alertify	 -->
	<link rel="stylesheet" type="text/css" href="../plugins/alertifyjs/css/alertify.css">
	<link rel="stylesheet" type="text/css" href="../plugins/alertifyjs/css/themes/bootstrap.css">

	    <!-- bootstrap-toggle-master -->
			<link href="../plugins/bootstrap-toggle-master/css/bootstrap-toggle.css" rel="stylesheet">
    <link href="../plugins/bootstrap-toggle-master/stylesheet.css" rel="stylesheet">
</head>
<body class="login">
	<div class="container" style="display:none" id="cuerpo">
		<div class="row justify-content-md-center">
			<div class="col-md-auto login-box borde sombra">
				<h3 class="text-center titulo">Iniciar Sesión</h3>
				<hr>
				<form id="frmIngreso">
					<div class="form-row">
						<div class="col-md-12">
							<label for="" class="colorLetra">Nombre de usuario:</label>
					          <div class="form-group has-feedback salto">
					            <input type="text" id="username" placeholder="Usuario" class="form-control " autofocus>
					            <span class="glyphicon glyphicon-user form-control-feedback"></span>
					          </div>
						</div>
						<div class="col-md-12">
							<label for="" class="colorLetra">Contraseña:</label>
					          <div class="form-group has-feedback salto">
					            <input type="password" id="pass" placeholder="Usuario" class="form-control " >
					            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
					          </div>
						</div>
					</div>
				<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">

								<button type="button" class="btn btn-login  btn-flat  pull-left"  onclick="registro();">Registros <i class="far fa-clipboard"></i></button>


								<p align="center"><input id="chkContra"  onchange='evaluarCheck(this.value)' data-on="Si" data-off="No" type="checkbox" checked data-toggle="toggle" data-size="mini" value='no'><label class="colorLetra"> &nbsp; Cambiar Contraseña</label>


		              			<button type="submit" class="btn btn-login  btn-flat  pull-right" id="btnIngresar">
			              			<i class="fas fa-lock-open"></i>
			              			Ingresar
		              			</button></p>
	              			</div>
	            		</div><!-- /.co-->
					</div>

				</form>
			</div>			
		</div>
	</div>
	<br>
	

<div class="container" id="registro" style="display: none;">
		<div class="row justify-content-md-center">
			<div class="contenido borde sombra">
				<div align="center">
					
					<h3 class="text-center titulo">Registro de alumnos</h3>
				</div>
					<form id="frmRegistro">
					<div class="form-row">
							<div class="col-md-8" style="text-align: center; width: 200px;">
							<img src="../images/logo.png" id="img" alt="Fotografica"width="190" height="190px">
						</div>
						<div class="col-md-8">
							<label for="matricula" class="colorLetra">Matricula:</label>
					          <div class="form-group has-feedback salto">
					            <input type="matricula" id="matricula"  class="form-control " >
					            <span class="glyphicon glyphicon-list-alt form-control-feedback"></span>
					          </div>
						</div>

						<div class="col-md-4">
							<div id="laFechaA"></div>
						</div>
						<br>
						<div class="col-md-4">
							<div id="infoA"></div>
						</div>

						<div class="col-md-12">
							<br>
							<label for="nombre" class="colorLetra">Nombre:</label>
					          <div class="form-group has-feedback salto">
					            <input type="nombre" id="nombre"  class="form-control " placeholder="Nombre">
					            <span class="glyphicon glyphicon-user form-control-feedback"></span>
					          </div>
						</div>

						<div class="col-md-12">
							<label for="carrera" class="colorLetra">Carrera:</label>
					          <div class="form-group has-feedback salto">
					            <input type="carrera" id="carrera"  class="form-control " placeholder="Carrera" >
					            <span class="glyphicon glyphicon-inboxform-control-feedback"></span>
					          </div>
						</div>

						<div class="col-md-6">
           						<label for="ES" class="colorLetra">Entrada/Salida</label>
           						<div class="form-group has-feedback salto">
             						 <input type="ES" id="ES"  class="form-control" placeholder="Entrada/Salida" >
					            <span class="glyphicon glyphicon-inbox form-control-feedback"></span>
             						 </div>
								</div>

						<div class="col-md-6">
           						<label for="descripcion" class="colorLetra">Mensaje</label>
           						<div class="form-group has-feedback salto">
             						 <textarea  class="form-control"  id="descripcion" placeholder="Descripcion del caso" disabled=""></textarea>
             						 </div>
							</div>
							<div class="container-fluid">
								<button type="button" class="btn btn-login  btn-flat  pull-left" id="btnSalir" onclick="salir()">
			              			<i class="fas fa-times"></i>
			              			Cancelar
		              			</button>
							</div>
							
				</div>
				</form>
		
			</div>
		</div>
</div>
<br>
<br>



<!-- CAMBIO DE CONTRASEÑA -->

	<div class="container" style="display:none" id="cambiarContra">
		<div class="row justify-content-md-center">
			<div class="col-md-auto login-box borde sombra">
				<h3 class="text-center titulo">Cambiar Contraseña</h3>
				<hr>
				<form id="frmCambiar">
					<div class="form-row">
						<div class="col-md-12">
							<input type="hidden" id="usuario" class="form-control">
						<div class="col-md-12">
							<label for="vContra1" class="colorLetra">Contraseña:</label>
					          <div class="form-group has-feedback salto">
					            <input type="password" id="vContra1"  class="form-control " >
					            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
					          </div>
						</div>
						<div class="col-md-12">
							<label for="vContra2" class="colorLetra">Verificar Contraseña:</label>
					          <div class="form-group has-feedback salto">
					            <input type="password" id="vContra2"  class="form-control " >
					            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
					          </div>
						</div>
					</div>
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">
												<button type="button" class="btn btn-login  btn-flat  pull-left" id="btnCancelar" onclick="cancelar()">
			              			<i class="fas fa-times"></i>
			              			Cancelar
		              			</button>
		              			<button type="submit" class="btn btn-login  btn-flat  pull-right" id="btnActualizar">
			              			<i class="fas fa-lock-open"></i>
			              			Actualizar
		              			</button>
	              			</div>
	            		</div><!-- /.col -->
					</div>
				</div>
				</form>
			</div>			
		</div>
	</div>
	
	<script src="../plugins/jQuery/jQuery-2.1.4.min.js"></script>
	<script src="../plugins/bootstrap/js/bootstrap.min.js"></script>
	<script src="../plugins/Preloaders/jquery.preloaders.js"></script>
 
	<!-- alertify -->
	<script type="text/javascript" src="../plugins/alertifyjs/alertify.js"></script>
	<!-- bootstrap-toggle-master -->
	<script src="../plugins/bootstrap-toggle-master/doc/script.js"></script>
    <script src="../plugins/bootstrap-toggle-master/js/bootstrap-toggle.js"></script>
    <!-- Funciones propias -->
    <script src="funciones.js"></script>
    <script src="../js/menu.js"></script>
    <script src="../js/precarga.js"></script>

  <!-- Audio para la voz-->
    <script type="text/javascript" src="../plugins/voice/responsivevoice.js"></script>


		<script>
		window.onload = function() {
			$("#cuerpo").fadeIn("slow");
			$("#username").focus();
		};	
		$('#chkContra').bootstrapToggle('off');
		$('#chkContra').val('no');
	</script>


</body>
</html>