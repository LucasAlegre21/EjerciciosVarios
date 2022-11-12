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
const dividirX5 = () => {
  numero = prompt(
    "Ingrese un numero para saber si es divisible por 5, se mostrara el resultado en la consola 👉"
  );
  if (numero % 5 === 0) {
    console.log(`El número ${numero} SI divisible por 5`);
  } else {
    console.log(`El número ${numero} NO es divisible por 5, intenta otra vez `);
  }
};

let div5 = document.getElementById("divPor5");
div5.addEventListener("click", dividirX5);

///Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
const dividirX5y11 = () => {
  numero = prompt(
    "Ingrese un numero para saber si es divisible por 5 y 11 a la vez, se mostrara el resultado en la consola 👉"
  );
  if (numero % 5 === 0 && numero % 11 === 0) {
    console.log(`El número ${numero} SI divisible por 5 y 11 a la vez`);
  } else {
    console.log(
      `El número ${numero} NO es divisible por 5 y 11 a la vez, intenta de nuevo `
    );
  }
};

let div5y11 = document.getElementById("divPor5y11");
div5y11.addEventListener("click", dividirX5y11);

//Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

const mayor = () => {
  numero1 = parseInt(prompt("Ingrese un número"));
  numero2 = parseInt(
    prompt("Ingrese un segundo número y se mostrará cual es el mayor")
  );
  if (numero1 > numero2) {
    alert(`El número ${numero1}  es mayor al número ${numero2}`);
  } else {
    alert(`El número ${numero2}  es mayor al número ${numero1}`);
  }
};

let saberMayor = document.getElementById("nroMayor");
saberMayor.addEventListener("click", mayor);

//Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.

const mayor2 = () => {
  numero1 = parseInt(prompt("Ingrese un número"));
  numero2 = parseInt(
    prompt("Ingrese un segundo número y se mostrará cual es el mayor")
  );
  let cualMayor =
    numero1 > numero2
      ? alert(`El número ${numero1}  es mayor al número ${numero2}`)
      : alert(`El número ${numero2}  es mayor al número ${numero1}`);
};

let saberMayor2 = document.getElementById("nroMayor2");
saberMayor2.addEventListener("click", mayor2);

//Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

/* const sabernroletra = () => {
  estring = prompt("Ingrese un texto");
};

let palabraNroLetra = document.getElementById("nropalabra");
palabraNroLetra.addEventListener("click", sabernroletra); */

//Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

/* const angulos = () => {
  ang1 = prompt("Ingrese el primer angulo");
  ang2 = prompt("Ingrese el segundo angulo");
  ang3 = prompt("Ingrese el tercer angulo");

  let suma = ang1 + ang2 + ang3;
  if (suma <= 180 && suma > 0) {
  }
};

let angulosTriangulo = document.getElementById("botonAngulos");
angulosTriangulo.addEventListener("click", angulos); */

//Determinar si una palabra empieza con mayúscula o no
// ?????????????????

//Determinar si un año dado es bisiesto.
//https://es.wikihow.com/calcular-los-a%C3%B1os-bisiestos
//https://miniwebtool.com/es/leap-years-list/?start_year=1800&end_year=2022

const añoBisiesto = () => {
  let año = parseInt(prompt("Ingrese un año para verificar si es bisiesto"));

  if (año % 4 === 0 && año % 100 !== 0) {
    console.log("SIIII");
  } else if (año % 400 === 0) {
    console.log("Sii");
  } else console.log("NO");
};

let añBi = document.getElementById("añoBisiesto");
añBi.addEventListener("click", añoBisiesto);

//Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const compararNumeros = () => {
  let nroAzar = aleatorio(1, 10);
  let nroUsuario = parseInt(
    prompt(
      "Ingrese un numero y se verificara si es el mismo que escoge la maquina, suerte!"
    )
  );
  if (nroAzar == nroUsuario) {
    console.log(
      `Buen trabajo, es el mismo numero: tuyo ${nroUsuario} PC ${nroAzar}`
    );
  } else {
    console.log(
      `Los numeros no coinciden ingresaste ${nroUsuario} y la PC ${nroAzar}`
    );
  }
};

let usupcnumeros = document.getElementById("nroazarpcusuario");
usupcnumeros.addEventListener("click", compararNumeros);

// El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:
// // Obtener edad
/* let edad = parseInt(prompt("hola"));

if (edad <= 13) { // se agrega = para tomar al niño si tiene 13 inclusive
  console.log("Es niño");
} else if (edad <= 18) { //se agrega else al if y =, adolescente de 14 a 18 inclusive
  console.log("Es adolecente");
} else {
  console.log("Es adulto");//mayor a 18 es adulto.
} */

//Negar las siguientes expresión de forma de mantener la tabla de verdad, crear el programa que muestre el valor de la expresión a medida que se cambia los valores de a y b.
/* 
    !a && !b
    !a || !b     

*/

///////////////////////////////////////////    Loops
/// While

//Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.
let i = 1;
const listarNumeros = () => {
  nroUsuario = parseInt(prompt("Ingrese un numero"));

  if (nroUsuario < 40000) {
    while (i <= nroUsuario) {
      console.log(i);
      i++;
    }
  } else {
    result = window.confirm(
      "El numero es muy grande podria tildar la maquina, desea continuar?"
    );
    if (result == true) {
      while (i <= nroUsuario) {
        console.log(i);
        i++;
      }
    }
  }
};

let listaNros = document.getElementById("nrosxn");
listaNros.addEventListener("click", listarNumeros);

//Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.
//let i = 1; scope global en el primer ejercicio
const listarNumerosx2 = () => {
  nroUsuario = parseInt(prompt("Ingrese un numero"));

  if (nroUsuario < 40000) {
    while (i <= nroUsuario) {
      console.log(i);
      i = i + 2;
    } //return console.log(nroUsuario);   para mostrar el nro ingresado al final por mas que no llegue, ejemplo ingreso 10 y muestra solo hasta el 9
  } else {
    result = window.confirm(
      "El numero es muy grande podria tildar la maquina, desea continuar?"
    );
    if (result == true) {
      while (i <= nroUsuario) {
        console.log(i);
        i = i + 2;
      }
    }
  } //return console.log(nroUsuario);   para mostrar el nro ingresado al final por mas que no llegue, ejemplo ingreso 10 y muestra solo hasta el 9
};
let listaNrosx2 = document.getElementById("nrosxnx2");
listaNrosx2.addEventListener("click", listarNumerosx2);

//Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.
//let i = 1; scope global en el primer ejercicio
const listarNumerosHasta1 = () => {
  nroUsuario = parseInt(prompt("Ingrese un numero"));

  if (nroUsuario < 40000) {
    while (i <= nroUsuario) {
      console.log(nroUsuario);
      nroUsuario = nroUsuario - 1;
    }
  } else {
    result = window.confirm(
      "El numero es muy grande podria tildar la maquina, desea continuar?"
    );
    if (result == true) {
      while (i <= nroUsuario) {
        console.log(nroUsuario);
        nroUsuario = nroUsuario - 1;
      }
    }
  }
};

let listaNrosa1 = document.getElementById("nrosxnHasta1");
listaNrosa1.addEventListener("click", listarNumerosHasta1);

//Escribir utilizando console.log la tabla del 9 hasta 9x10. */
//let i = 1; scope global en el primer ejercicio
const tablaDELnueve = () => {
  while (i <= 10) {
    console.log(`9 * ${i} = ${9 * i}`);
    i++;
  }
};

let tabla9 = document.getElementById("tabladel9");
tabla9.addEventListener("click", tablaDELnueve);

//Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.

const sumarDigNum = () => {
  nroUsuario = prompt("Ingrese un numero para sumar sus digitos");
};

//Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

/* let numPar = 0;
let sumaTotalPar = 0; */

const operacion = (x, y) => {
  let numPar = 0;
  let sumaTotalPar = 0;
  if (x % 2 === 0) {
    numPar = x;
    while (numPar <= y) {
      sumaTotalPar = sumaTotalPar + numPar;
      numPar = numPar + 2;
    }
    console.log(sumaTotalPar);
  } else {
    numPar = x + 1;
    while (numPar <= y) {
      sumaTotalPar = sumaTotalPar + numPar;
      numPar = numPar + 2;
    }
    console.log(sumaTotalPar);
  }
};

const sumarNrosPares = () => {
  numeroN = parseInt(prompt("Ingrese un numero"));
  numeroM = parseInt(prompt("Ingrese otro numero"));

  ///calculo de cual es menor
  if (numeroN < numeroM) {
    ////N menor a M
    operacion(numeroN, numeroM);
  } else {
    ////M mayor a N
    operacion(numeroM, numeroN);
  }
};

let pares = document.getElementById("botonPar");
pares.addEventListener("click", sumarNrosPares);

//Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.
///???????????????????


//Realizar el factorial de los primeros N números.
