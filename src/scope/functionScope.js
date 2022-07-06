//FUNCTION SCOPE

function greeting() {
   let userName = 'Marias'; //declarada dentro de una function solo se prodra acceder desde dentro de ella.
   console.log(userName);
   
   if ( userName === 'Marias') {
    console.log(`Hello ${userName}!`) //Tambien pudo ser accedida desde dentro de una funcion anidada
   };
}

greeting();
console.log(userName); //desde afuera de la funcion no podremos acceder a esa variable.