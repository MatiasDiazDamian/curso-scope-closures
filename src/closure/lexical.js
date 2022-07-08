//Ambito lexico

const myGlobal = 0;

function myFunction() {
    const myNum = 1;
    console.log(myGlobal);

    function parent() { //funcion interna (Esto ya seria un closure)
        const inner = 2;
        console.log(myNum, myGlobal);

        function child() {
            console.log(inner, myNum, myGlobal);
        };
        return child();
    }
    return parent();
}

myFunction();