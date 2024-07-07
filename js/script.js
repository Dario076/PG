const botonMostrar = document.getElementById('mostrarBtn');
const informacion = document.getElementById('informacion');


botonMostrar.addEventListener('click', () => {
    // Cambia el estilo del elemento de información
    if (informacion.style.display === 'block') {
        informacion.style.display = 'none'; // Oculta la información si ya está visible
    } else {
        informacion.style.display = 'block'; // Muestra la información si está oculta
    }
});