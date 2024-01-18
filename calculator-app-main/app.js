
var screenText = document.querySelector("screen__text")
//Seleccionamos los botones pulsables
var keyButtons = document.querySelectorAll(".keys__button")

console.log(keyButtons)
keyButtons.forEach(button => {
    button.addEventListener("click", () => console.log(button.innerHTML));
});