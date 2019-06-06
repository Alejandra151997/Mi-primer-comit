function salir(){
    // console.log("Saliendo del sistema...")
    alertify.confirm('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show();
    alertify.confirm(
        'Sistema de Registro de Alumnos', 
        '¿Deseas salir del Sistema?', 
        function(){ 
                alertify.success('Saliendo....') ; 
                preCarga(2000,2);
                setInterval(salida, 2000);
            }, 
        function(){ 
                alertify.error('Cancelar') ; 
                console.log('cancelado')}
    ).set('labels',{ok:'Salir',cancel:'Cancelar'});

}

function salida(){
    window.location='../sesiones/cerrarsesion.php';
}