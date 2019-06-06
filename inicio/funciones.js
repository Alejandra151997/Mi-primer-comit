 function llenar_lista(){
     // console.log("Se ha llenado lista");
    // preCarga(1000,4);
    var fecha1, fecha2;
    fecha1=$("#fecha1").val();
      fecha2=$("#fecha2").val();
    $.ajax({
        url:"llenarLista.php",
        type:"POST",
        dateType:"html",
        data:{
            'fecha1':fecha1,
            'fecha2':fecha2
        },
        success:function(respuesta){
            $("#lista").html(respuesta);
            $("#lista").slideDown("fast");
        },
        error:function(xhr,status){
            alert("no se muestra");
        }
    });	
}


function ver_lista(){
    //$("#alta").slideUp('low');
    $("#lista").slideDown('low');
}







