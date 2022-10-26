// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
// const nuevaString = function(persona){
//     console.log(`Bienvenido/a ${persona}`)
// }
// nuevaString ("ROCIO");


// Crea una variable numérica, puede ser cualquier número:
// const nuevoNum = function(numero){
//     console.log( `num ${ numero}`)

// }
// nuevoNum (25);



// Crea una variable booleana:
// const nuevoBool = function(booleana){
//     console.log(`La respuesta es ${booleana}`)
// }
// nuevoBool("True");







// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

// function devolverString(str) {
//     // "Return" la string provista: str
//     // Tu código:
//     return str
      
//   }
//   console.log (devolverString("Ro"))


// function suma(x, y) {
//     // "x" e "y" son números
//     // Suma "x" e "y" juntos y devuelve el valor
//     // Tu código:
//     return (x + y)
//   }
//   console.log(suma(2,5));


// function resta(x, y) {
//     // Resta "y" de "x" y devuelve el valor
//     // Tu código:
//     return (x - y);
//   }
//   console.log( resta(10,6));


// function multiplica(x, y) {
//     // Multiplica "x" por "y" y devuelve el valor
//     // Tu código:
//     return (x * y);
//   }
//   console.log(multiplica(5,7));


// function divide(x, y) {
//     // Divide "x" entre "y" y devuelve el valor
//     // Tu código:
//     return (x / y);
//   }
//   console.log(divide(50,5));
  

// function sonIguales(x, y) {
//     // Devuelve "true" si "x" e "y" son iguales
//     // De lo contrario, devuelve "false"
//     // Tu código:
//     if (x === y){
//         return  true
//     }else{
//         return false
//     }

//   }
//   console.log(sonIguales(1,5))



// function tienenMismaLongitud(str1, str2) {
//     // Devuelve "true" si las dos strings tienen la misma longitud
//     // De lo contrario, devuelve "false"
//     // Tu código:
//     return str1.length === str2.length 
// }
// console.log(tienenMismaLongitud("vaca","vacas"))



// function menosQueNoventa(num) {
//     // Devuelve "true" si el argumento de la función "num" es menor que noventa
//     // De lo contrario, devuelve "false"
//     // Tu código:
//    return num <90 
// }
//   console.log( menosQueNoventa(105))



// function mayorQueCincuenta(num) {
//     // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
//     // De lo contrario, devuelve "false"
//     // Tu código:
//     return num > 50
//   } 
//   console.log(mayorQueCincuenta(55));


// function obtenerResto(x, y) {
//     // Obten el resto de la división de "x" entre "y"
//     // Tu código:
//     return x % y;
//   }
//   console.log(obtenerResto(400,3))
  

// function esPar(num) {
//     // Devuelve "true" si "num" es par
//     // De lo contrario, devuelve "false"
//     // Tu código:(
//     if (num % 2===0){
//         return true
//     }else {
//         return false 
//     }
//   }
//   console.log(esPar (4))



// function esImpar(num) {
//     // Devuelve "true" si "num" es impar
//     // De lo contrario, devuelve "false"
//     // Tu código:
//     return num % 2 ===1 
//   }
//   console.log(esImpar(5));
  

// function elevarAlCuadrado(num) {
//     // Devuelve el valor de "num" elevado al cuadrado
//     // ojo: No es raiz cuadrada!
//     // Tu código:
//     return num ** 2 
//   }
//   console.log(elevarAlCuadrado(5));


// function elevarAlCubo(num) {
//   // Devuelve el valor de "num" elevado al cubo
//   // Tu código:
//   return num ** 3
// }
// console.log(elevarAlCubo(3))


// function elevar(num, exponent) {
//   // Devuelve el valor de "num" elevado al exponente dado en "exponent"
//   // Tu código:
//   return num ** exponent 
// }
// console.log(elevar(5,2))


// function redondearNumero(num) {
//   // Redondea "num" al entero más próximo y devuélvelo
//   // Tu código:
//   return Math.round(num)
// }
// console.log(redondearNumero(20.01))

// function redondearHaciaArriba(num) {
//   // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
//   // Tu código:
//   return Math.round(num)
// }
// console.log(redondearHaciaArriba(25.7))

// function numeroRandom() {
//   //Generar un número al azar entre 0 y 1 y devolverlo
//   //Pista: investigá qué hace el método Math.random()
//   return Math.random()
// }
// console.log(numeroRandom())

// function esPositivo(numero) {
//   //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
//   //Si el número es positivo, devolver ---> "Es positivo"
//   //Si el número es negativo, devolver ---> "Es negativo"
//   //Si el número es 0, devuelve false
//   if (numero >0){
//     return "Es positivo";

//   }else if(numero<0) {
//     return "Es negativo";

//   } else {
//     return "false" ;
//   }
// }
// console.log(esPositivo(0))

// function agregarSimboloExclamacion(str) {
//   // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
//   // Ejemplo: "hello world" pasaría a ser "hello world!"
//   // Tu código:
//   let exclamación= ("!");
// return ( str +  exclamación)
// } 
// console.log(agregarSimboloExclamacion("Hola"))


// function combinarNombres(nombre, apellido) {
//     // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
//     // Ejemplo: "Soy", "Henry" -> "Soy Henry"
//     // Tu código:

//     return ( nombre + apellido)
//   }
//   console.log(combinarNombres("JUAN", "GOMEZ"))

// function obtenerSaludo(nombre) {
//     // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
//     // "Martin" -> "Hola Martin!"
//     // Tu código:
//     return (`HOLA ${nombre}`)
//   }
//   console.log(obtenerSaludo("PEPE"))

// function obtenerAreaRectangulo(alto, ancho) {
//     // Retornar el area de un rectángulo teniendo su altura y ancho
//     // Tu código:
//     return ( alto * ancho);
//   }
//   console.log(obtenerAreaRectangulo(6,12))


// function retornarPerimetro(lado) {
//     //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
//     //Escribe tu código aquí
//     return (4* lado)
//   }
// console.log(retornarPerimetro(5))

// function areaDelTriangulo(base, altura) {
//     //Desarrolle una función que calcule el área de un triángulo.
//     //Escribe tu código aquí
//     return (base * altura)/2
//   }
//   console.log(areaDelTriangulo(12,15))

// function deEuroAdolar(euro) {
//     //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
//     //como parámetro un número de euros y calcule el cambio en dólares.
//     //Escribe tu código aquí
//     return (euro * 1.20);
//   }
//   console.log(deEuroAdolar(15))

// function esVocal(letra) {
//     //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
//     //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
//     //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//     //Escribe tu código aquí
//     if (letra === "y"){
//         return "Es vocal"
//     }else {
//         return " Dato incorrecto"
//     }

//   }
//   console.log(esVocal("y"))

// function obtenerMayor(x, y) {
//     // "x" e "y" son números enteros (int).
//     // Devuelve el número más grande
//     // Si son iguales, devuelve cualquiera de los dos
//     // Tu código:
//     if ( x > y){
//         return x
//     }else {
//         return y
//     }
//   }
//   console.log(obtenerMayor(5,5))

// function mayoriaDeEdad(edad) {
//     //Determinar si la persona según su edad puede ingresar a un evento.
//     //Si tiene 18 años ó más, devolver --> "Allowed"
//     //Si es menor, devolver --> "Not allowed"
//     if ( edad >= 18){
//         return "Allowed"
//     } else {
//         return "Not allowed"
//     }
//   } console.log(mayoriaDeEdad(15))
  
// function conection(status) {
//     //Recibimos un estado de conexión de un usuario representado por un valor numérico.
//     //Cuando el estado es igual a 1, el usuario está "Online"
//     //Cuando el estado es igual a 2, el usuario está "Away"
//     //De lo contrario, presumimos que el usuario está "Offline"
//     //Devolver el estado de conexión de usuario en cada uno de los casos.
//     if ( status === 1){
//       return "Online";
//     } else if ( status === 2){
//       return "Away"
//     } else {
//       return "Offline"
//     }
//   }
//   console.log(conection(5))


// function saludo(idioma) {
//   // Devuelve un saludo en tres diferentes lenguajes:
//   // Si "idioma" es "aleman", devuelve "Guten Tag!"
//   // Si "idioma" es "mandarin", devuelve "Ni Hao!"
//   // Si "idioma" es "ingles", devuelve "Hello!"
//   // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
//   // Tu código:
//   if (idioma === "aleman"){
//     return "Guten Tag!"
//   }else if (idioma === "mandarin"){
//     return " Ni Hao!"
//   }else if (idioma === "ingles"){
//     return "Hello!"
//   }else{
//     return "Hola!"
//   }
// }
// console.log(saludo("aleman"))


// function colors(color) {
//   //La función recibe un color. Devolver el string correspondiente:
//   //En caso que el color recibido sea "blue", devuleve --> "This is blue"
//   //En caso que el color recibido sea "red", devuleve --> "This is red"
//   //En caso que el color recibido sea "green", devuleve --> "This is green"
//   //En caso que el color recibido sea "orange", devuleve --> "This is orange"
//   //Caso default: devuelve --> "Color not found"
//   //Usar el statement Switch.
//   switch(color){
//     case "blue":
//     console.log(`This is ${color}`);
//     break;
//     case "red":
//      console.log(`This is ${color}`) ;
//     break;
//     case "green":
//     console.log(`This is ${color}`);
//       break;
//     case "orange":
//     console.log(`This is ${color}`);
//     break;

//       default: 
//       console.log("color not found");
//       }
// }
// console.log(colors("red"))

// function esDiezOCinco(numero) {
//   // Devuelve "true" si "numero" es 10 o 5
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   return (numero===10 || numero === 5 )
// }
// console.log(esDiezOCinco(8))


// function estaEnRango(numero) {
//   // Devuelve "true" si "numero" es menor que 50 y mayor que 20
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   return (numero < 50 && numero > 20) 
// }
// console.log(estaEnRango(19))


// function esEntero(numero) {
//   // Devuelve "true" si "numero" es un entero (int/integer)
//   // Ejemplo: 0.8 -> false
//   // Ejemplo: 1 -> true
//   // Ejemplo: -10 -> true
//   // De lo contrario, devuelve "false"
//   // Pista: Puedes resolver esto usando `Math.floor`
//   // Tu código:
//   return Number.isInteger(numero)
// }
// console.log(esEntero(10.5))


// function fizzBuzz(numero) {
//   // Si "numero" es divisible entre 3, devuelve "fizz"
//   // Si "numero" es divisible entre 5, devuelve "buzz"
//   // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
//   // De lo contrario, devuelve el numero
//   if (( numero % 3===0) && (numero % 5===0)){
//     return "fizzbuzz"
//   }else if( numero % 3=== 0){
//     return "fizz"
//   }else if ( numero % 5 === 0){
//     return "buzz"
//   }else {
//     return (numero)
//   }
// }
// console.log(fizzBuzz(15))


// function operadoresLogicos(num1, num2, num3) {
//   //La función recibe tres números distintos.
//   //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//   //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//   //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//   //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//   //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
//   if (num1===0 || num2===0 || num3===0){
//     return "Error"
//   }else if ( num1 > num2 && num1 > num3 && num1 > 0){
//     return "Número 1 es mayor y positivo"
//   }else if ( num3 > num1 && num3 > num2){
//     num3= num3 + 1
//     return num3
//   }else {
//     return false
//   }
    
// }
// console.log(operadoresLogicos(10,50,10))



// function esPrimo(numero) {
//   // Devuelve "true" si "numero" es primo
//   // De lo contrario devuelve "falso"
//   // Pista: un número primo solo es divisible por sí mismo y por 1
//   // Pista 2: Puedes resolverlo usando un bucle `for`
//   // Nota: Los números 0 y 1 NO son considerados números primos
//   return ((numero % numero === 0) && (numero % 1=== 0))
// }
// console.log(esPrimo(0))

// function esVerdadero(valor) {
//   //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
//   //si su valor es true y “Soy falso” si su valor es false.
//   //Escribe tu código aquí
//   return (valor === "true")

// }
// console.log(esVerdadero("true"))


// function tablaDelSeis() {
//   //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//   //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//   //Escribe tu código aquí
//   let array= [];
//   for ( let i=0; i < 11; i++){
//     array.push(i*6);
//   }
//   return array;
// }
// console.log(tablaDelSeis())


// function tieneTresDigitos(numero) {
//   //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
//   //Escribe tu código aquí

// }



// function doWhile(numero) {
//   //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//   //Retornar el valor final.
//   //Usar el bucle do ... while.
//   let limite = 8;
//   let result= 0;
//   do { 
//     result += 5;
//     limite -= 1;
//   } while ( limite!==0)
//   return numero + result;
// }
// console.log(doWhile(10))


// function devolverPrimerElemento(array) {
//   // Devuelve el primer elemento de un array
//   // Tu código:
//   return array [0] ;
// }
// let array= [1,2,3,4,5] 
// console.log(devolverPrimerElemento(array))


// function devolverUltimoElemento(array) {
//   // Devuelve el último elemento de un array
//   // Tu código:
//   return array [array.length -1] 
// }
// let array = [1,2,3,4,5]
// console.log(devolverUltimoElemento(array))


// function obtenerLargoDelArray(array) {
//   // Devuelve el largo de un array
//   // Tu código:
//   return array.length 
// }
// let array= [1,2,3,4,5];
// console.log(obtenerLargoDelArray(array))


// function incrementarPorUno(array) {
//   // "array" debe ser una matriz de enteros (int/integers)
//   // Aumenta cada entero por 1
//   // y devuelve el array
//   // Tu código:
  
//   for ( let i= 0; i < array.length; i++){
//     console.log(array[i]+1)
//   }
// }
// let array= [1,2,3,4,5];
// console.log(incrementarPorUno(array))


// function agregarItemAlFinalDelArray(array, elemento) {
//   // Añade el "elemento" al final del array
//   // y devuelve el array
//   // Tu código:
//   array.push(elemento);
//   return array;
// }
// let array= [1,2,3,4,5];
// let elemento = "Item";
// console.log(agregarItemAlFinalDelArray(array,elemento))



// function agregarItemAlComienzoDelArray(array, elemento) {
//   // Añade el "elemento" al comienzo del array
//   // y devuelve el array
//   // Pista: usa el método `.unshift`
//   // Tu código:
//    array.unshift(elemento);
//    return array
// }
// let array= [1,2,3,4,5];
// let elemento = "Item";
// console.log(agregarItemAlComienzoDelArray(array,elemento))


// function dePalabrasAFrase(palabras) {
//   // "palabras" es un array de strings/cadenas
//   // Devuelve un string donde todas las palabras estén concatenadas
//   // con espacios entre cada palabra
//   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
//   // Tu código:
  
//   return palabras.join('')
// }
// let palabras= ["Hola ","word!"]
// console.log(dePalabrasAFrase(palabras))


// function arrayContiene(array, elemento) {
//   // Comprueba si el elemento existe dentro de "array"
//   // Devuelve "true" si está, o "false" si no está
//   // Tu código:
//    return array.includes(elemento);
// }
//  let array= [1,2,3,4,5,6];
//  let elemento = 8;
//  console.log(arrayContiene(array,elemento))


// function agregarNumeros(numeros) {
//   // "numeros" debe ser un arreglo de enteros (int/integers)
//   // Suma todos los enteros y devuelve el valor
//   // Tu código:
//   let sumar= 0; 
//   for( let i=0; i< numeros.length; i++){
//     sumar += numeros[i]
//     console.log(sumar)
//   }
// }
// let numeros= [1,2,3,4];
// console.log(agregarNumeros(numeros))

function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
  }
  

  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
  }
  
  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
  }
  
  function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
  }
  
  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
    //Escribe tu código aquí
  }
  
  function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
  }
  
  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí
  }
  
  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
  }
  
  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
  }
  
  function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
  }
  
  function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
  }
  
  function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
  }
  
  function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
  }
  
  function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
  }
  
  function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
  }
  
  function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
  }
  
  function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
  }
  
  function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
  }
  
  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
  }
  
  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
  }
  
  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
  }
  
  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
  }
  
  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
  }
  
  function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
  }
  
  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
    //Escribe tu código aquí
  }
  
  function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
  }
  
  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí
  }
  
  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
  }
  
  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
  }
  
  function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
  }
  
  function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
  }
  










