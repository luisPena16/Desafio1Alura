let HoraDesafio = document.querySelector('h1');
HoraDesafio.innerHTML = 'Hora del Desafio';

let Question = Text;
let AlertLabel = 'Yo amo JS';
let Num1 = 0;
let Num2 = 0;
let Resultado = 0;

function ClickButton() {
    alert('El boton fue clicado');
}

function QuestionCity() {
   Question = prompt('Nombre de una ciudad de brasil');
   alert('Estuve en ' + Question + ' y me acorde de ti');
}

function ClickAlert() {
    alert(AlertLabel);
}

function Suma() {
    Num1 = prompt('Introduce el primer numero para la suma');
    Num2 = prompt('Introduce el segundo numero para la suma');
    Resultado = parseInt(Num1) + parseInt(Num2);
    alert('La suma es: ' + Resultado);
}