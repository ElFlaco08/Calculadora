let valorVisual = '';
let currentOperation = '';

function agregarValor(value) {
  valorVisual += value;
  pantalla();
}

function agregarOperador(operator) {
  valorVisual += operator;
  pantalla();
}

function Eliminar() {
  valorVisual = '';
  pantalla();
}

function calcular() {
  try {
    currentOperation = valorVisual + '=' + eval(valorVisual);
    valorVisual = eval(valorVisual).toString();
    saveOperation(currentOperation);
  } catch (error) {
    valorVisual = 'Error';
  }
  pantalla();
}

function saveOperation(operation) {
  const guardarOperacion = JSON.parse(localStorage.getItem('Operacion')) || [];
  guardarOperacion.push(operation);
  localStorage.setItem('Operacion', JSON.stringify(guardarOperacion));
}

function pantalla() {
  document.getElementById('display').value = valorVisual;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('calculatorData');
  if (savedData) {
    valorVisual = savedData;
    pantalla();
  }
});
