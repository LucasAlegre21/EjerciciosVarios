/* Operaciones básicas, Tipos de datos, Prompt y Alert
Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma. */

const sumatoria = () => {
  numero1 = prompt("Ingrese un número para sumar");
  numero2 = prompt("Ingrese un segundo número para sumar");
  resultado = parseInt(numero1) + parseInt(numero2);
  alert(
    `Este es el resultado de la suma entre los numeros ${numero1} y ${numero2} es =${resultado}`
  );
};

let boton = document.getElementById("sumaDosNumeros");
boton.addEventListener("click", sumatoria);

/* Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.*/

const temperatura = () => {
  tempeCel = prompt("Ingrese la temperatura en Celsius");
  tempeFar = (tempeCel * 9) / 5 + 32;
  alert(
    `La temperatura en Celsius ${tempeCel}° es igual a ${tempeFar}° Farenheit`
  );
};

let btnTemp = document.getElementById("cambioTemperatura");
btnTemp.addEventListener("click", temperatura);

//Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5

const division = () => {
  numero1 = prompt("Ingrese número para dividir por 10");
  alert(`la division de ${numero1} por 10 es de ${numero1 / 10}`);
};

let dividirX10 = document.getElementById("dividir");
dividirX10.addEventListener("click", division);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.

let a = [1, 2, 3];
const type = () => {
  alert(`El tipo de dato del array de nombre "a" es ${typeof a}`);
};

let saberTipo = document.getElementById("tipoDato");
saberTipo.addEventListener("click", type);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//IF AND ELSE
///Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

const saberPar = () => {
  numero = prompt("Ingrese un número para determinar si es par");
  if (numero % 2 == 0) {
    alert(`El número ${numero} es par `);
  } else {
    alert(`El número ${numero} es impar`);
  }
};

let nroPar = document.getElementById("numeroPar");
nroPar.addEventListener("click", saberPar);

///Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

///Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
