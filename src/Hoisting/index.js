//Hoisting

// console.log(nameOfDog);//Undefined. La variable aun no tiene valor y JS le asigna este valor
// var nameOfDog = 'Elmo';//Se asigna el valor a la variable
// console.log(nameOfDog);//Ahora si ya tiene el valor 'Elmo'

nameOfDog();

function nameOfDog() {//Esta me devolveria "El mejor perrito es undifined"
   console.log(`El mejor perrito es ${perro}`); //var perro al momento no ha sido declarado por eso JS le da el valor de 'Undefined'
}
var perro = 'Elmo' 
