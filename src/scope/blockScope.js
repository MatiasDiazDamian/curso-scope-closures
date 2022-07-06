//BLOCK SCOPE

function fruits() {
  if (true) {
     var fruits1 = 'Apple'; //tiene alcance de function scope.
     let fruits2 = 'Mango';  //tiene alcance de bloque unicamente.
     const fruits3 = 'Sandia'; //tiene alcance de bloque unicamente.
  }  
  
  console.log(fruits1); //llamo la variable desde afuera de su bloque.
  console.log(fruits2); //llamo la variable desde afuera de su bloque.
  console.log(fruits3); //llamo la variable desde afuera de su bloque.
}

fruits();