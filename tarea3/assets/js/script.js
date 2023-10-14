const elementos = document.querySelectorAll(".ele");

elementos.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        pintar(evento, "yellow");
    });
    elemento.style.backgroundColor = "green";
});

function pintar(evento, color = "green") {
    evento.target.style.backgroundColor = color;
}
