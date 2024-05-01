// Función para actualizar la información de actualización dinámicamente
function actualizarInfoActualizacion() {
    // Define la fecha de actualización en tu formato preferido
                                     //año-mes-dia/H -M -S
    var fechaActualizacion = new Date('2024-05-01 01:07:00');  // Reemplaza esto con la fecha de tu última actualización
    var ahora = new Date();
    var diferencia = ahora - fechaActualizacion;

    var segundosTranscurridos = Math.floor(diferencia / 1000);
    var minutosTranscurridos = Math.floor(segundosTranscurridos / 60);
    var horasTranscurridas = Math.floor(minutosTranscurridos / 60);
    var diasTranscurridos = Math.floor(horasTranscurridas / 24);

    var mensajeActualizacion = '';

    if (diasTranscurridos > 0) {
        mensajeActualizacion = 'Última actualización hace ' + diasTranscurridos + ' día(s)';
    } else if (horasTranscurridas > 0) {
        mensajeActualizacion = 'Última actualización hace ' + horasTranscurridas + ' hora(s)';
    } else if (minutosTranscurridos > 0) {
        mensajeActualizacion = 'Última actualización hace ' + minutosTranscurridos + ' minuto(s)';
    } else {
        mensajeActualizacion = 'Última actualización hace menos de un minuto';
    }

    document.getElementById('ultima-actualizacion').innerText = mensajeActualizacion;
}

// Llama a la función al cargar la página
actualizarInfoActualizacion();

// Actualiza la información cada minuto
setInterval(actualizarInfoActualizacion, 60000);  // 60000 milisegundos = 1 minuto
