function llenar_lista(){
     // console.log("Se ha llenado lista");
    // preCarga(1000,4);
    $.ajax({
        url:"llenarLista.php",
        type:"POST",
        dateType:"html",
        data:{},
        success:function(respuesta){
            $("#lista").html(respuesta);
            $("#lista").slideDown("fast");
        },
        error:function(xhr,status){
            alert("no se muestra");
        }
    }); 
}

function abrirModalSubir(mat){
   
    $('#mat').val(mat);
    $("#modalSubir").modal("show");
}

$(document).ready(function() {
    $(".upload").on('click', function() {

        var formData = new FormData();

        var files = $('#image')[0].files[0];
        var matricula=$('#mat').val();

        formData.append('file',files);
        formData.append('mat',matricula);

        $.ajax({
            url: 'upload.php',
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                if (response != 0) {
                    $(".card-img-top").attr("src", response);
                    $('#image').fileinput('reset').trigger('custom-event');
                    alertify.success('La imagen ha sido cargada con exito.');
                    $("#modalSubir").modal("hide");
                    llenar_lista();
                } else {
					alertify.error('Formato de imagen incorrecto.');
				}
            },
            error:function(xhr,status){
                alertify.error('Error en proceso');
            },
        });
		return false;
    });
});