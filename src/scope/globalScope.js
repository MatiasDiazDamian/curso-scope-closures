//VARIABLES

var a; //declarando la variable "a"

var b = 5; //declaramos y asignamos al mismo tiempo

b = 10; //reasignacion

var a = 'Matias'; //redeclarando la variable


//GLOBAL SCOPE
var fruit = 'Apple';  //Esta es variable Global

function bestFruit() {
console.log(fruit);  //Puedo acceder a fruit dentro de la funcion porque esta en Global
}
bestFruit();
                     //ejemplo 2---------------------

function countries() {
   country ='Argentina'; //Al asignar pero no declararlo se convierte en Scope Global.
   console.log(country);    
}



