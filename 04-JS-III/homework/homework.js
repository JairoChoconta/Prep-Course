// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array.shift();
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for ( let i = 0; i < array.length; i++ ) {
    array[i] += 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  /* var string = '';
  for ( let i = 0; i < palabras.length; i++ ) {
    string = string + palabras[i];
  }
  return string; */
  string = palabras[0];
  for ( let i = 1; i < palabras.length; i++ ) {
    string += ' ' + palabras[i];
  }
  return string;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var cont = 0;
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] === elemento ) {
      cont = 1;
    }
  }
  if ( cont === 1 ) {
    return true;
  } else {
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for ( let i = 0; i < numeros.length; i++ ) {
    suma += numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for ( let i = 0; i < resultadosTest.length; i++ ) {
    suma += resultadosTest[i];
  }

  return suma/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroAnterior = numeros[0];
  var mayor = numeroAnterior;
  for ( let i = 1; i < numeros.length; i++ ) {
    if ( numeros[i] > mayor ) {
      mayor = numeros[i];
    }
    numeroAnterior = numeros[i];
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var producto = 1;
  if ( arguments.length === 0 ) {
    return 0;
  } else if ( arguments.length === 1 ) {
    return arguments[0];
  }

  for ( let i = 0; i < arguments.length; i++ ) {
    producto *= arguments[i]; 
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad = 0;
  for ( let i = 0; i < arreglo.length; i++ ) {
    if ( arreglo[i] > 18 ) {
      cantidad += 1;
    }
  }
  return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if ( numeroDeDia === 1 || numeroDeDia === 7 ) {
    return 'Es fin de semana';
  } else {
    return 'Es dia Laboral';
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var string = n.toString();
  if ( parseInt(string[0]) === 9 ) {
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var anterior = arreglo[0];
  for ( let i = 1; i < arreglo.length; i++ ) {
    if ( arreglo[i] !== anterior ) {
      return false;
    }
    var anterior = arreglo[i];
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  var posicionArray = 0, contEnero = 0, contMarzo = 0, contNoviembre = 0;

  for ( let i = 0; i < array.length; i++ ) {
    switch ( array[i] ) {
      case 'Enero':
        nuevoArray[posicionArray] = array[i];
        contEnero++;
        posicionArray++;
      break;
      case 'Marzo':
        nuevoArray[posicionArray] = array[i];
        contMarzo++;
        posicionArray++;
      break;
      case 'Noviembre':
        nuevoArray[posicionArray] = array[i];
        contNoviembre++;
        posicionArray++;
      break;
      default: 
      break;
    }
  }
  if ( contEnero === 0 || contMarzo === 0 || contNoviembre === 0 ) {
    return 'No se encontraron los meses pedidos';
  }
  return nuevoArray;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  var posicionArray = 0;
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] > 100 ) {
      nuevoArray[posicionArray] = array[i];
      posicionArray++;
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  array[0] = numero + 2;
  for ( let i = 1; i < 10; i++ ) {
      array[i] = array[i - 1] + 2;
       if ( array[i] === i ) {
          break;
        }
  }
  if ( array.length === 10 ) {
    return array;
  } else {
    return 'Se interrumpió la ejecución';
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var i = 0;
  array[0] = numero + 2;
  do {
    if ( i === 5) {
      var arrayAux = [];
      arrayAux[i] = 
      i++;
      continue;
    }
    array.push(array[i] + 2); 
    i++;
  } while ( i < 9 );
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
