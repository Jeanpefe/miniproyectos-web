
var screenText = document.querySelector(".screen__text")
//Seleccionamos los botones pulsables
var keyButtons = document.querySelectorAll(".keys p")
var operations = ""
string = ""
keyButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.className === "keys__button") {
            string += button.innerHTML
            screenText.innerHTML = string
        }
        else if (button.className === "keys__button--reset") {
            string = ""
            screenText.innerHTML = 0
        }
    })
});