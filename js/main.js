/* MOSTRAR Y OCULTAR MENU PRINCIPAL */
const btnAbrirMenu = document.querySelector("#btn-abrir-menu");
btnAbrirMenu.addEventListener("click", abrirMenu);

const btnCerrarMenu = document.querySelector("#btn-cerrar");
btnCerrarMenu.addEventListener("click", cerrarMenu);

function abrirMenu(){
    const menuOculto = document.querySelector("#menuOculto");
    menuOculto.style.width = "75%";
}
function cerrarMenu(){
    const menuOculto = document.querySelector("#menuOculto");
    menuOculto.style.width = "0%";
}

/* MOSTRAR Y OCULTAR MENU ENTRENAMIENTOS */
const btnAbrirMenuEntrenamientos = document.querySelector("#btn-add");
btnAbrirMenuEntrenamientos.addEventListener("click", interaccionBoton);

function interaccionBoton(){
    const menuOculto = document.querySelector("#menuOcultoEntrenos");
    var estaOculto = menuOculto.classList.contains( 'ocultarMenuEntrenos' );
    (estaOculto) ? menuOculto.classList.remove( 'ocultarMenuEntrenos') : menuOculto.classList.add( 'ocultarMenuEntrenos');
}