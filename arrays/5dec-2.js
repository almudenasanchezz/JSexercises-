//Ejercicio 1
// crea una funcion que dado el array numbers, te devuelva la posicion del elemento con valor 29.

function find29WithWhile(numbers) { //solo se puede hacer si estamos debajo de la funcion, porque si hay mas cosas no se ejecutaría

    for(let position = 0; position < numbers.length; position++){ // comprueba que position < 3 y si no encuentra el nº 29 se para de ejecutar
        if(numbers[position] === 29){
            return position;
        }
    }
    return -1;
}

find29WithWhile([1,2,29]);


//otra opcion 
function find29WithWhile(numbers) {

    let position;
    for(let position = 0; position < numbers.length; position++){ // comprueba que position < 3 y si no encuentra el nº 29 se para de ejecutar
        if(numbers[position] === 29){
            break;
        }
    }
    return numbers[position] === 29 ? position : -1;
}


