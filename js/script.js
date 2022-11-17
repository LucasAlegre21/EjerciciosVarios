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
/* ????????????????????????????????????????????????????????????????
    !a && !b
    !a || !b     

*/

///////////////////////////////////////////    Loops
/// While

//Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

const listarNumeros = () => {
  nroUsuario = parseInt(prompt("Ingrese un numero"));
  let i = 1;
  if (nroUsuario < 40000) {
    while (i <= nroUsuario) {
      console.log(i);
      i++;
    }
  } else {
    result = window.confirm(
      "El numero es muy grande podria tildar la PC, desea continuar?"
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

const listarNumerosx2 = () => {
  let i = 1;
  nroUsuario = parseInt(prompt("Ingrese un numero"));

  if (nroUsuario < 40000) {
    while (i <= nroUsuario) {
      console.log(i);
      i = i + 2;
    } //return console.log(nroUsuario);   para mostrar el nro ingresado al final por mas que no llegue, ejemplo ingreso 10 y muestra solo hasta el 9
  } else {
    result = window.confirm(
      "El numero es muy grande podria tildar la PC, desea continuar?"
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

//////////////////////Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.

const listarNumerosHasta1 = () => {
  let i = 1;
  nroUsuario = parseInt(prompt("Ingrese un numero"));

  if (nroUsuario < 40000) {
    while (i <= nroUsuario) {
      console.log(nroUsuario);
      nroUsuario = nroUsuario - 1;
    }
  } else {
    result = window.confirm(
      "El numero es muy grande podria tildar la PC, desea continuar?"
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

const tablaDELnueve = () => {
  let i = 1;
  while (i <= 10) {
    console.log(`9 * ${i} = ${9 * i}`);
    i++;
  }
};

let tabla9 = document.getElementById("tabladel9");
tabla9.addEventListener("click", tablaDELnueve);

//Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.
//??????????????????????????????????
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
    console.log(
      `Esta es la suma total de los pares entre ${numeroN} y ${numeroM} ⬇`
    );
    operacion(numeroN, numeroM);
  } else {
    ////M mayor a N
    console.log(
      `Esta es la suma total de los pares entre ${numeroN} y ${numeroM} ⬇`
    );
    operacion(numeroM, numeroN);
  }
};

let pares = document.getElementById("botonPar");
pares.addEventListener("click", sumarNrosPares);

//Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.
///???????????????????

//Realizar el factorial de los primeros N números.
// https://factorialhr.ar/numero-funcion-factorial
const factorial = () => {
  nroUsuario = parseInt(prompt("Ingrese un numero"));
  console.log(`Este es el factorial del numero ${nroUsuario}`);
  let i = 1;
  let resultado = 1;
  while (i <= nroUsuario) {
    resultado = resultado * i;
    i++;
  }
  console.log(resultado);
};

let calFacto = document.getElementById("botonFacto");
calFacto.addEventListener("click", factorial);

//---------------Ejercicios de divisores con while (o for)----------------------//

//Encontrar todos los divisores de un número.
const divisoresNRO = () => {
  nroUsuario = parseInt(prompt("Ingrese un número"));
  let i = 1;
  console.log(`Estos son los divisores del numero ${nroUsuario}`);
  while (i <= nroUsuario) {
    if (nroUsuario % i === 0) {
      console.log(i);
      i++;
    } else {
      i++;
    }
  }
};

let diviNum = document.getElementById("botonDivisores");
diviNum.addEventListener("click", divisoresNRO);
//Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.

//-----------------------------------------

//Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)

const nroPerfectoDivisores = () => {
  nroUsuario = parseInt(prompt("Ingrese un numero"));

  let i = 1;
  let sumPer = 0;

  console.log(`Estos son los divisores del numero ${nroUsuario}`);

  while (i < nroUsuario) {
    if (nroUsuario % i === 0) {
      console.log(i);
      sumPer = sumPer + i;
      i++;
    } else {
      i++;
    }
  }
  if (sumPer === nroUsuario) {
    console.log(`${nroUsuario} es un numero perfecto`);
  } else {
    console.log(`${nroUsuario} NO es un numero perfecto`);
  }
};

let perfNum = document.getElementById("botonPerfecto");
perfNum.addEventListener("click", nroPerfectoDivisores);

//<-----------------------Patrones con Loop anidados----------------------------------------->

//Dibujar los siguientes patrones ocupando document.write, para rellenar los espacios vacíos se debe imprimir un espacio vacío.

//Cuadrado lleno:
const cuadradoLleno = () => {
  for (let linea = 1; linea <= 5; linea++) {
    for (let linea2 = 1; linea2 <= 5; linea2++) {
      document.write("*");
    }
    document.write("<br>");
  }
};
let cl = document.getElementById("botonCuadLleno");
cl.addEventListener("click", cuadradoLleno);

/* Cuadrado hueco:
//https://uniwebsidad.com/libros/xhtml/capitulo-3/espacios-en-blanco-y-nuevas-lineas

*****
*   *
*   *
*   *
*****

 */

const cuadradoHueco = () => {
  document.write("*****");
  document.write("<br>");
  for (let linea = 1; linea <= 3; linea++) {
    document.write("*");
    for (let linea2Esp = 1; linea2Esp <= 3; linea2Esp++) {
      document.write("&nbsp;");
      document.write("&nbsp;");
      //ESPACIO EN BLANCO
    }
    document.write("*");
    document.write("<br>");
  }
  document.write("*****");
};

let ch = document.getElementById("botonCuadHueco");
ch.addEventListener("click", cuadradoHueco);

//Tablero de Ajedrez:

/* Tablero de Ajedrez:
///////////////
* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * * 
 ///////////////////

 */

const tableroAjedrez = () => {
  for (let fila = 1; fila <= 8; fila++) {
    if (fila % 2 === 0) {
      document.write("&nbsp;");
      document.write("&nbsp;");
    }
    for (let columna = 1; columna <= 8; columna++) {
      document.write("*");
      document.write("&nbsp;");
    }

    document.write("<br>");
    document.write("&nbsp;");
  }
};

let ta = document.getElementById("botonAjedrez");
ta.addEventListener("click", tableroAjedrez);

////----------------Funciones-----------------------------///
//Crear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), llamar a la función pasando el valor 5

const mostrarEnconsola = (x) => {
  x = parseInt(prompt("Ingrese un número para mostar por consola"));
  console.log(x);
};
let mostrarConsola = document.getElementById("nroConsola");
mostrarConsola.addEventListener("dblclick", mostrarEnconsola);

//La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla

/* function multiply(a, b){
  a * b
} 
*/
function multiplicacion(a, b) {
  return (resultado = a * b);
}
multiplicacion(4, 2);

//Crear una función que reciba dos valores y devuelva la suma de ellos.

const sumar2numeros = (x, y) => {
  resultSuma = x + y;
  console.log(`El resultado de la suma de ${x} y ${y} es = ${resultSuma}`);
};
//-----

const pedir2num = () => {
  num1 = parseInt(prompt("Ingrese 1 numero"));
  num2 = parseInt(prompt("Ingrese 2do numero"));
  sumar2numeros(num1, num2);
};

let sum2num = document.getElementById("2numsuma");
sum2num.addEventListener("click", pedir2num);

//Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.

const datoDifNum = () => {
  let datoRecibido = parseFloat(prompt("Hola ingresa un dato"));
  if (isNaN(datoRecibido)) {
    console.log("Ingresaste un dato que no es del tipo NUMBER");
  } else {
    console.log("Ingresaste un número, bien!");
  }
};

let btnDatoDif = document.getElementById("botonDATOdif");
btnDatoDif.addEventListener("click", datoDifNum);
//Crear una función autoejecutable que muestre "muuu" en pantalla
/* const vaca=()=>{
  alert("muuuuuuuuuuu🐄🐄🐄🐄🐄🐄")
}
vaca(); */

/*-------------------------------------------------------------Array------------------------------------------------------------------*/
//////////////////Dado el array = [1,2,3,4,5,6]

let arrayPrincipal = [1, 2, 3, 4, 5, 6];

//Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
const itewhile = () => {
  let i = 0;
  console.log("Estos son los datos del array utilizando WHILE = ");
  while (i < arrayPrincipal.length) {
    console.log(arrayPrincipal[i]);
    i++;
  }
};
let btnitewhile = document.getElementById("botonIteWhile");
btnitewhile.addEventListener("click", itewhile);

//Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.

const iteFor = () => {
  console.log("Estos son los datos del array utilizando FOR =");
  for (let i = 0; i < arrayPrincipal.length; i++) {
    console.log(arrayPrincipal[i]);
  }
};
let btnitefor = document.getElementById("botonIteFor");
btnitefor.addEventListener("click", iteFor);

///Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.

const iteForeach = () => {
  console.log("Estos son los datos del array utilizando FOR EACH =");
  arrayPrincipal.forEach((dato) => {
    console.log(dato);
  });
};

let btniteforeach = document.getElementById("botonIteEach");
btniteforeach.addEventListener("click", iteForeach);

//Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

const suma1array = () => {
  console.log("Estos son los datos del array sumandole uno a cada elemento =");
  for (let i = 0; i < arrayPrincipal.length; i++) {
    console.log(arrayPrincipal[i] + 1);
  }
};

let btnarray1 = document.getElementById("botonArray+1");
btnarray1.addEventListener("click", suma1array);

//Generar una copia de un array pero con todos los elementos incrementado en 1.
const arraysumandouno = () => {
  let arrayMasUno = arrayPrincipal.map((x) => {
    return x + 1;
  });
  console.log("Este es el array principal");
  console.log(arrayPrincipal);
  console.log("Este es el array nuevo incrementado en 1 cada valor");
  console.log(arrayMasUno);
  console.log("--------------------------------");
};

let arraysumuno = document.getElementById("arraynuevomasuno");
arraysumuno.addEventListener("click", arraysumandouno);

//Calcular el promedio
let promedio = 0;
const promediodeArray = () => {
  arrayPrincipal.map((x) => {
    promedio = promedio + x;
  });
  console.log("Este es el array principal");
  console.log(arrayPrincipal);
  console.log("Este es la suma total");
  console.log(promedio);
  console.log("Este es el promedio");
  console.log(promedio / arrayPrincipal.length);
  console.log("--------------------------------");
};

let promArray = document.getElementById("promArray");
promArray.addEventListener("click", promediodeArray);

//Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.
const array20azar = () => {
  let nrosAzarArray = [];
  for (let i = 1; i <= 20; i++) {
    nrosAzarArray.push(aleatorio(1, 50));
  }
  console.log("Este el array nuevo con 20 números al azar");
  console.log(nrosAzarArray);
};

let btn20azar = document.getElementById("boton20azar");
btn20azar.addEventListener("click", array20azar);

//Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

const array20azarUsuario = () => {
  let nrosAzarArray = [];
  let USU = parseInt(
    prompt("¿Cuantos numeros quiere que tenga el nuevo array?")
  );
  for (let i = 1; i <= USU; i++) {
    nrosAzarArray.push(aleatorio(1, 50));
  }
  console.log(`Este el array nuevo con ${USU} números al azar`);
  console.log(nrosAzarArray);
};

let btn20azarUsuario = document.getElementById("botonAzarUsuario");
btn20azarUsuario.addEventListener("click", array20azarUsuario);

//dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

let coloresArray = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
const buscarColor = () => {
  let colorUsuario = prompt(
    "Ingrese un color para buscar en el array"
  ).toUpperCase();
  let encontrado = coloresArray.find((x) => x.toUpperCase() == colorUsuario);
  if (!encontrado) {
    console.log(`El color ${colorUsuario} no se encuentra en el array`);
  } else {
    console.log(`El color ${colorUsuario} está en el array 👌`);
  }
};

let btnColor = document.getElementById("botonColor");
btnColor.addEventListener("click", buscarColor);
/*---------------------------------------String y arrays----------------------------------------------------------------------------*/

//El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5])

const stringArray = () => {
  let texto = prompt(
    "Ingrese palabras separadas por coma y se creara un array con las mismas (ejemplo = 1,2,3) El array será [1,2,3]"
  );
  let arrayVacio = texto.split(",");
  console.log(texto);
  console.log(arrayVacio);
};

let btnstrArr = document.getElementById("botonStringArray");
btnstrArr.addEventListener("click",stringArray);

//Convertir un array ingresado dentro del código en un string (existe un método en javascript para hacerlo)







/*---------------------------------------------------------Unión, intersección y conteo---------------------------*/

//Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2]

//Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la unión de ambos elementos, (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4]

//El usuario ingresa dos conjuntos de números separados por coma, el programa debe determinar si ambos conjuntos tienen la misma cantidad de números.

//El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])
