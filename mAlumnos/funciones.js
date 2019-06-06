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
    
    var noControl = $("#noControl").val();
    var idPersona = $("#idPersona").val();
    var idCarrera = $("#idCarrera").val();
    //Validaciones
    if(noControl.length<5){
        alertify.dialog('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();

        alertify.alert()
        .setting({
            'title':'Información',
            'label':'Salir',
            'message': 'El numero de control debe contener al menos 5 caracteres.' ,
            'onok': function(){ alertify.message('Gracias !');}
        }).show();
        return false;       
    }
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
    if(idCarrera==0){
        alertify.dialog('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();

        alertify.alert()
        .setting({
            'title':'Información',
            'label':'Salir',
            'message': 'Debes seleccionar una carrera.' ,
            'onok': function(){ alertify.message('Gracias !');}
        }).show();
        return false;       
    }
    
    // console.log(nombreCompleto);

        $.ajax({
            url:"guardar.php",
            type:"POST",
            dateType:"html",
            data:{
                    'noControl':noControl,
                    'idPersona':idPersona,
                    'idCarrera':idCarrera
                 },
            success:function(respuesta){
              
            alertify.set('notifier','position', 'bottom-right');
            alertify.success('Se ha guardado el registro' );
            $("#frmAlta")[0].reset();
            llenar_persona();
            llenar_carrera();
            },
            error:function(xhr,status){
                alert(xhr);
            },
        });
        e.preventDefault();
        return false;
});

function abrirModalEditar(idAlumno,idPersona,idCarrera,no_control){
   
   $("#frmActualiza")[0].reset();

    llenar_personaA(idPersona);
    llenar_carreraA(idCarrera);

    $("#idE").val(idAlumno);
    //$("#nombreE").val(idPersona);
    //$("#idPersonaE").val(idPersona);
    //$("#idCarreraE").val(idCarrera);
    $("#noControlE").val(no_control);

    $("#modalEditar").modal("show");

     $('#modalEditar').on('shown.bs.modal', function () {
         $('#noControlE').focus();
         return false;
     });   
}

$("#frmActualiza").submit(function(e){
  
    var noControl = $("#noControlE").val();
    var idCarrera = $("#carreraE").val();
    var ide       = $("#idE").val();
    
    //Validaciones

    if(noControl.length<5){
        alertify.dialog('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();

        alertify.alert()
        .setting({
            'title':'Información',
            'label':'Salir',
            'message': 'El numero de control debe contener al menos 5 caracteres.' ,
            'onok': function(){ alertify.message('Gracias !');}
        }).show();
        return false;       
    }

    if(idCarrera==0){
        alertify.dialog('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();

        alertify.alert()
        .setting({
            'title':'Información',
            'label':'Salir',
            'message': 'Debes seleccionar una carrera.' ,
            'onok': function(){ alertify.message('Gracias !');}
        }).show();
        $("#contra").focus();
        return false;       
    }

        $.ajax({
            url:"actualizar.php",
            type:"POST",
            dateType:"html",
            data:{
                    'noControl':noControl,
                    'idCarrera':idCarrera,
                    'ide':ide
                 },
            success:function(respuesta){

            alertify.set('notifier','position', 'bottom-right');
            alertify.success('Se ha actualizado el registro' );
            $("#frmActualiza")[0].reset();
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
    var nomToggle          = "#interruptor"+concecutivo;
    var nomBoton           = "#boton"+concecutivo;
    var numero             = "#tConsecutivo"+concecutivo;
    var tNoControl         = "#tNoControl"+concecutivo;
    var tnomAlumnoCompleto = "#tnomAlumnoCompleto"+concecutivo;
    var tnomCarrera        = "#tnomCarrera"+concecutivo;

    if( $(nomToggle).is(':checked') ) {
        // console.log("activado");
        var valor=0;
        alertify.success('Registro habilitado' );
        $(nomBoton).removeAttr("disabled");
        $(numero).removeClass("desabilita");
        $(tNoControl).removeClass("desabilita");
        $(tnomAlumnoCompleto).removeClass("desabilita");
        $(tnomCarrera).removeClass("desabilita");

    }else{
        // console.log("desactivado");
        var valor=1;
        alertify.error('Registro deshabilitado' );
        $(nomBoton).attr("disabled", "disabled");
        $(numero).addClass("desabilita");
        $(tNoControl).addClass("desabilita");
        $(tnomAlumnoCompleto).addClass("desabilita");
        $(tnomCarrera).addClass("desabilita");

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

function llenar_carrera()
{
    // alert(idRepre);
    $.ajax({
        url : 'comboCarreras.php',
        // data : {'id':id},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            $("#idCarrera").empty();
            $("#idCarrera").html(respuesta);      
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}
function llenar_personaA(idPersona)
{
    // alert(idRepre);
    $.ajax({
        url : 'comboPersonasA.php',
        // data : {'id':id},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            $("#nombreE").empty();
            $("#nombreE").html(respuesta);  
            $("#nombreE").val(idPersona);
            $(".select2").select2();

        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}

function llenar_carreraA(idCarrera)
{
    // alert(idRepre);
    $.ajax({
        url : 'comboCarrerasA.php',
        // data : {'id':id},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            $("#carreraE").empty();
            $("#carreraE").html(respuesta);  
            $("#carreraE").val(idCarrera);
            $(".select2").select2();

        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}

function imprimir(){

    var titular = "Lista de personas";
    var mensaje = "¿Deseas generar un archivo con PDF oon la lista de personas activas";
    // var link    = "pdfListaPersona.php?id="+idPersona+"&datos="+datos;
    var link    = "pdfListaAlumnos.php?";

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