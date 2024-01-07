
// const burger = document.querySelector(".main_header__burger")
// const sidebar = document.querySelector(".burger_sidebar")

// // const showElement = (elem) => elem.classList.add("show")
// const showElement = () => sidebar.classList.toggle("show")

// burger.addEventListener("click", showElement)
// console.log(sidebar.classList)

document.addEventListener("DOMContentLoaded", function() {
    // Obtén elementos del DOM
    var burgerNav = document.querySelector('.main_header__burger');
    var sidebar = document.querySelector('.burger_sidebar');
    var closeBtn = document.querySelector('.burger_sidebar__close');

    // Agrega evento de clic a la hamburguesa
    burgerNav.addEventListener('click', function() {
        // Alternar la clase show en la barra lateral
        //sidebar.classList.toggle('show');

        // Agrega o quita la clase hide en el contenido principal
        document.querySelector('.burger_sidebar').classList.toggle('hide');
    });

    // Agrega evento de clic al botón de cerrar la barra lateral
    closeBtn.addEventListener('click', function() {
        // Quita la clase show de la barra lateral
        sidebar.classList.remove('show');

        // Agrega la clase hide al contenido principal
        document.querySelector('.landing').classList.add('hide');
    });
});
