function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function E(selector, parent) {
    if (selector instanceof HTMLElement) {
        return selector;
    }

    return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    E("." + className).forEach((elem) =>
        elem.classList.remove(className));
    element.classList.toggle(className);
}

function tabs(navElem) {
    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if (hasClass(target, "tab"))
            radioClass(target, "active");

        let linkedtab = E("." + target.id)[0];

        radioClass(linkedtab, "visible");
    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id)[0], "visible");
    }
}

function mostrarSeleccion() {
    var opciones = document.getElementById("opciones");
    var seleccion = opciones.options[opciones.selectedIndex].value;

    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.tab-content');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }

    // Mostrar la sección seleccionada
    document.querySelector('.' + seleccion).style.display = "grid";
}

// Obtener el elemento del menú y llamar a la función tabs
var menuNav = document.querySelector(".menu-nav");
tabs(menuNav);