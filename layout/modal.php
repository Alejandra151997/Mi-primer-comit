
<!-- Modal -->
	<div id="modalEditarcontra" class="modal fade" role="dialog">
	  <div class="modal-dialog modal-md">

	<!-- Modal content-->
	    <form id="frmActulizacambio">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">Cambiar mi contraseña</h4>
	      </div>
	      <div class="modal-body">
				<input type="hidden" id="idA" value="<?php echo $idA;?>">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<div class="form-group">
							<label for="contraR">Nueva Contraseña:</label>
							<input type="password" id="contraR" class="form-control " required="" placeholder="Escribe la contraseña">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<div class="form-group">
							<label for="vContraR">Verificar nueva Contraseña:</label>
							<input type="password" id="vContraR" class="form-control " required="" placeholder="Vuelve a esrcribir la contraseña">
						</div>
					</div>
					<hr class="linea">
				</div>
	      </div>
	      <div class="modal-footer">
				<div class="row">
					<div class="col-lg-12">
						<button type="button" id="btnCerrarR" class="btn btn-login  btn-flat  pull-left" data-dismiss="modal">Cerrar</button>
						<button type="button" id="btnMostrarR" class="btn btn-login  btn-flat  pull-left" 
						onclick="mostrarcontraseña()" value="oculto">
						<i class="far fa-eye fa-lg" id="icoMostrarR"></i>
						</button>
						<input type="submit" class="btn btn-login  btn-flat  pull-right" value="Actualizar Información">	
					</div>
				</div>
	      </div>
	    </div>
</form>
</div>
</div>
