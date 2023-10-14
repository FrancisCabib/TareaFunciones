// Usamos const para guardar el elemento con id 'key'
const keyDiv = document.getElementById('key');

// Usamos arrow function para cambiar el color del div al negro
const cambiarColorNegro = (event) => {
    event.target.style.backgroundColor = 'black';
}

// Añadimos event listeners a los divs para cambiar su color al hacer click en ellos
document.querySelectorAll('div').forEach(div => {
    div.addEventListener('click', cambiarColorNegro);
});

// Usamos arrow function para cambiar el color del div 'key' según la tecla presionada
document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        keyDiv.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        keyDiv.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        keyDiv.style.backgroundColor = 'cyan';
    }
});

// Usamos arrow function para agregar divs de colores al presionar ciertas teclas
document.addEventListener('keydown', (event) => {
    if (['q', 'w', 'e'].includes(event.key)) {
        const newDiv = document.createElement('div');
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.border = '1px solid black';
        newDiv.addEventListener('click', cambiarColorNegro); // Añadimos el event listener al nuevo div

        if (event.key === 'q') {
            newDiv.style.backgroundColor = 'purple';
        } else if (event.key === 'w') {
            newDiv.style.backgroundColor = 'gray';
        } else if (event.key === 'e') {
            newDiv.style.backgroundColor = 'brown';
        }
        
        document.body.appendChild(newDiv);
    }
});

