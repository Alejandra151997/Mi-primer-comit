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

function ver_alta(){
    // preCarga(800,4);
    $("#lista").slideUp('low');
    $("#alta").slideDown('low');
    $("#nombre").focus();
}

function ver_lista(){
    $("#alta").slideUp('low');
    $("#lista").slideDown('low');
}

$('#btnLista').on('click',function(){
    llenar_lista();
    ver_lista();
});

$("#frmAlta").submit(function(e){
  
    var idPersona = $("#idPersona").val();
    var usuario   = $("#usuario").val();
    var contra    = $("#contra").val();
    var vContra   = $("#vContra").val();

    // validacion para no meter id de persona en 0
    if(idPersona==0){
        alertify.dialog('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();

        alertify.alert()
        .setting({
            'title':'Información',
            'label':'Salir',
            'message': 'Debes seleccionar el dato de una persona.' ,
            'onok': function(){ alertify.message('Gracias !');}
        }).show();
        return false;       
    }

    // validacion para que el nombre de usuario sea minimo de 5 caracteres
    caracteres=$("#usuario").val().length;
    if(caracteres < 5){
        alertify.dialog('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();

        alertify.alert()
        .setting({
            'title':'Información',
            'label':'Salir',
            'message': 'La cantidad de caracteres para el usario debe de ser mayor a 5' ,
            'onok': function(){ alertify.message('Gracias !');}
        }).show();
        $("#usuario").focus();
        return false;       
    }

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
        $("#contra").focus();
        return false;       
    }
  

        $.ajax({
            url:"guardar.php",
            type:"POST",
            dateType:"html",
            data:{
                    'idPersona':idPersona,
                    'usuario':usuario,
                    'contra':contra
                 },
            success:function(respuesta){
              
            alertify.set('notifier','position', 'bottom-right');
            alertify.success('Se ha guardado el registro' );
            $("#frmAlta")[0].reset();
            llenar_persona();
            },
            error:function(xhr,status){
                alert(xhr);
            },
        });
        e.preventDefault();
        return false;
});

function abrirModalEditar(idUsuario,idPersona,usuario,contra,){
   
    $("#frmActuliza")[0].reset();

    llenar_personaU(idPersona);

    $("#idE").val(idUsuario);
    
    $("#usuarioE").val(usuario);
    //$("#contraE").val(contra);
    //$("#vContraE").val(contra);

    $("#modalEditar").modal("show");

     $('#modalEditar').on('shown.bs.modal', function () {
         $('#usuarioE').focus();
     });   
}

$("#frmActuliza").submit(function(e){
  
    var usuario = $("#usuarioE").val();
    //var contra  = $("#contraE").val();
    //var vContra  = $("#vContraE").val();

       // validacion para que el nombre de usuario sea minimo de 5 caracteres
       caracteres=$("#usuarioE").val().length;
       if(caracteres < 5){
           alertify.dialog('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();
   
           alertify.alert()
           .setting({
               'title':'Información',
               'label':'Salir',
               'message': 'La cantidad de caracteres para el usario debe de ser mayor a 5' ,
               'onok': function(){ alertify.message('Gracias !');}
           }).show();
           $("#usuarioE").focus();
           return false;       
       }
   
       // validacion para que las contraseñas coincidan
   
    var ide     = $("#idE").val();

        $.ajax({
            url:"actualizar.php",
            type:"POST",
            dateType:"html",
            data:{
                    'usuario':usuario,
                  //  'contra':contra,
                    'ide':ide
                    //'restaurar':1
                 },
            success:function(respuesta){

            alertify.set('notifier','position', 'bottom-right');
            alertify.success('Se ha actualizado el registro' );
            $("#frmActuliza")[0].reset();
            $("#modalEditar").modal("hide");
            llenar_lista();
            },
            error:function(xhr,status){
                alert(xhr);
            },
        });
        e.preventDefault();
        return false;
});

function status(concecutivo,id){
    var nomToggle = "#interruptor"+concecutivo;
    var nomBoton  = "#boton"+concecutivo;
    var numero    = "#tConsecutivo"+concecutivo;
    var nCompleto = "#tNcompleto"+concecutivo;
    var usuario   = "#tUsuario"+concecutivo;
    var registro  = "#tRegistro"+concecutivo;
    var nomBotonR  = "#botonR"+concecutivo;

    if( $(nomToggle).is(':checked') ) {
        // console.log("activado");
        var valor=0;
        alertify.success('Registro habilitado' );
        $(nomBoton).removeAttr("disabled");
        $(nomBotonR).removeAttr("disabled");
        $(numero).removeClass("desabilita");
        $(nCompleto).removeClass("desabilita");
        $(usuario).removeClass("desabilita");
        $(registro).removeClass("desabilita");

    }else{
        // console.log("desactivado");
        var valor=1;
        alertify.error('Registro deshabilitado' );
        $(nomBoton).attr("disabled", "disabled");
        $(nomBotonR).attr("disabled", "disabled");
        $(numero).addClass("desabilita");
        $(nCompleto).addClass("desabilita");
        $(usuario).addClass("desabilita");
        $(registro).addClass("desabilita");

    }
    // console.log(concecutivo+' | '+id);
    $.ajax({
        url:"status.php",
        type:"POST",
        dateType:"html",
        data:{
                'valor':valor,
                'id':id
             },
        success:function(respuesta){
            // console.log(respuesta);
        },
        error:function(xhr,status){
            alert(xhr);
        },
    });
}


function llenar_persona()
{
    // alert(idRepre);
    $.ajax({
        url : 'comboPersonas.php',
        // data : {'id':id},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            $("#idPersona").empty();
            $("#idPersona").html(respuesta);      
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}

function restaurarContra(idUser){
    // console.log(idUser);
    $.ajax({
        url:"restaurarContra.php",
        type:"POST",
        dateType:"html",
        data:{
                'idUser':idUser
             },
                success:function(respuesta){

         // console.log("Saliendo del sistema...")
    alertify.confirm('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();
    alertify.confirm(
        'Sistema de Registro de Alumnos', 
        '¿Deseas restaurar la contraseña?', 
        function(){ 
                alertify.success('Restaurando....') ; 
                preCarga(2000,2);
                setInterval(salida, 2000);
            }, 
        function(){ 
                alertify.error('Cancelar') ; 
                console.log('cancelado')}
    ).set('labels',{ok:'Si',cancel:'Cancelar'});

},
   error:function(xhr,status){
            alert(xhr);
 },
});

}

function llenar_personaU(idPersona)
{
    // alert(idRepre);
    $.ajax({
        url : 'comboPersonasU.php',
        // data : {'id':id},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            $("#nombreE").empty();
            $("#nombreE").html(respuesta);
            $("#nombreE").val(idPersona);
            $("#nombreE").select2();       
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}
function imprimir(){

    var titular = "Lista de usuarios";
    var mensaje = "¿Deseas generar un archivo con PDF oon la lista de usuarios activas";
    // var link    = "pdfListaPersona.php?id="+idPersona+"&datos="+datos;
    var link    = "pdfListaUsuarios.php?";

    alertify.confirm('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();
    alertify.confirm(
        titular, 
        mensaje, 
        function(){ 
            window.open(link,'_blank');
            }, 
        function(){ 
                alertify.error('Cancelar') ; 
                // console.log('cancelado')
              }
    ).set('labels',{ok:'Generar PDF',cancel:'Cancelar'}); 
}