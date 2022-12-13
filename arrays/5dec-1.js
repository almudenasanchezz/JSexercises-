//Ejercicio 1
// crea una funcion que dado el array numbers, te devuelva la posicion del elemento con valor 29.


function find29WithWhile(numbers) {
    let position = 0;
    let hasFound29 =  false;

    while(position < numbers.length && !hasFound29){ // comprueba que position < 3 y si no encuentra el nº 29 se para de ejecutar
        if(numbers[position] === 29){
            hasFound29 = true;
        } else {
            position = position + 1;
        }
    }

        // if has found 29velvuelve position si no, -1
    return hasFound29 ? position : -1;

}

find29WithWhile([1,2,29]);
