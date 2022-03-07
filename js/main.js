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