// Seleccionar elementos del DOM
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Inicializar el valor del contador
let counterValue = 0;

// Actualizar el contador en pantalla
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Eventos para los botones
incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counterValue = 0;
    updateCounter();
});
