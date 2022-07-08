//Strict Mode
'use strict';
pi = 3.1416; //directamente asignamos sin declararla
console.log(pi); //pi no esta definido

function myFunction() {
  'use strict' //activando el modo stricto dentro de una funcion
  return pi = 3.1416;//pi no esta definido por lo que lanza error
}

console.log(myFunction());