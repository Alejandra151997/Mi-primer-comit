
$("#frmActulizacambio").submit(function(e){
  
     
     var contra =$("#contraR").val();
     var vContra = $("#vContraR").val();

    // validacion para que las contraseñas coincidan
    if(contra != vContra){
        alertify.dialog('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();

        alertify.alert()
        .setting({
            'title':'Información',
            'label':'Salir',
            'message': 'Las contraseñas deben de ser iguales.' ,
            'onok': function(){ alertify.message('Gracias !');}
        }).show();
        //$("#contraR").focus();
        return false;       
    }
//alert(contra);
  var ide = $("#idA").val();
  //alert(ide);

        $.ajax({
            url:"../inicio/cambiarcontra.php",
            type:"POST",
            dateType:"html",
            data:{
                    'contra':contra,
                    'ide':ide
                 },
            success:function(respuesta){
              
            alertify.set('notifier','position', 'bottom-right');
            alertify.success('Se ha guardado el registro' );
            //$("#frmActulizacambio")[0].reset();
            $("#modalEditarcontra").modal("hide");
            
            },
            error:function(xhr,status){
                alert(xhr);
            },
        });
        e.preventDefault();
        return false;
});

function mostrarcontraseña(){
    var btnMostrar=$('#btnMostrarR').val();
    // console.log(btnMostrar);
    preCarga(300,2);
    if(btnMostrar=='oculto'){
        $("#contraR").attr("type","text");
        $("#vContraR").attr("type","text");
        $("#btnMostrarR").attr("value","visto");
        $("#icoMostrarR").removeClass("far fa-eye fa-lg");
        $("#icoMostrarR").addClass("far fa-eye-slash fa-lg");
    }
    else{
        $("#contraR").attr("type","password");
        $("#vContraR").attr("type","password");
        $("#btnMostrarR").attr("value","oculto");
        $("#icoMostrarR").removeClass("far fa-eye-slash fa-lg");
        $("#icoMostrarR").addClass("far fa-eye fa-lg");       
    }
}