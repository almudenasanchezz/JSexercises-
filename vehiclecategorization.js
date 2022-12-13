// dada cierta informacion devuelva el tipo de vehiculo que es
// crea un objeto que represente un vehiculo
const vehicle = { 
    doorsNumber: 3,
    maxSpeed: 120,
    wheelNumber: 4,
    isMotorized: true,
}

const vehicle2 = {
    doorsNumber: 3,
    maxSpeed: 120,
    wheelNumber: 4,
    isMotorized: true,   
}

const vehicle3 = {
    doorsNumber: 5,
    maxSpeed: 120,
    wheelNumber: 4,
    isMotorized: true,   
}

// crea una funcion que acepte un vehiculo como parametro y te devuelva la categoria
// en este caso hay que decirle todas las caracteristicas, no hay una forma más rápida de hacerlo
function vehicleType(vehicleArgument) { // foto2 en el movil de las diferentes opciones a escribir. Un argumento es lo que hay entre parentesis dentro de una función
    const { doorsNumber, maxSpeed, wheelNumber, isMotorized } = vehicle;
    if((doorsNumber === 3 || doorsNumber === 5) && maxSpeed > 100 && wheelNumber === 4 && isMotorized) { // el booleano no se pone compara con ===
        return 'car';
    }

    if(doorsNumber === 0 && maxSpeed > 80 && wheelNumber === 2 && isMotorized) { // el booleano no se pone compara con ===
        return 'motorcycle';
    }
    
    if(doorsNumber === 0 && maxSpeed === 40 && wheelNumber === 2 && isMotorized) { // el booleano no se pone compara con ===
        return 'patinete eléctrico';
    }

    if(doorsNumber === 0 && maxSpeed === 50 && wheelNumber === 2 && !isMotorized) { // el booleano no se pone compara con ===
        return 'bicicleta';
    }

    return 'vehiculo desconocido'
}


// otra opcion más corta sería asi
if((doorsNumber === 3 || doorsNumber === 5) && maxSpeed > 100 && wheelNumber === 4 && isMotorized) { // el booleano no se pone compara con ===
    return 'car';

    if(doorsNumber === 0 && wheelNumber === 2) { // el booleano no se pone compara con ===
        return 'motorcycle';

        if(maxSpeed === 40 && isMotorized) { // el booleano no se pone compara con ===
            return 'patinete eléctrico';
        }

        if(maxSpeed === 50 && !isMotorized) { // el booleano no se pone compara con ===
            return 'bicicleta';
        }
    }
    
} return 'vehiculo desconocido'


// array de vehiculos y recorrelo indicando en consola la categoria a la que pertenece
const vehicles = ['vehicle', 'vehicle2', 'vehicle3', 'vehicle4']; // otra opcion foto de movil, se puede declarar en el array sin usar variables
vehicles.forEach(function(vehicle) { //forEach es una forma comoda de recorrer el array que acepta como argumento una funcion con cero, uno o dos parametros
    console.log(vehicleType(vehicle)); // donde pone vehicle podemos llamarlo como queramos
})

// otra opcion
for(let index = 0; index<vehicles.length; index++) { // se incrementa una posición
    const vehicle = vehicles[index]; // aquí accede a la posición 0 del array vehicles, luego a la posicion 1, y luego a la 2, en nuestro caso sería vehicle, vehicle2, vehicle3...
    const type = vehicleType(vehicle); // esto es simplemente para ser más legible 
    console.log(type)
} 

//opcion de sole
function Vehicle(doorsNumber, maxSpeed, isMotorized, wheelNumber){ // funcion con la primera letra mayuscula para identificar que crea objetos
    this.doorsNumber = doorsNumber; //this es el contexto de la funcion, con ello podemos ir metiendo info a la memoria de la funcion
    this.maxSpeed = maxSpeed; //esto sirve para devolver los valores que estén indicados con .this
    this.isMotorized = motorized;
    this.wheelNumber = wheels;
    this.type = vehicle.Type(this); // esto te dice el tipo de vehículo 
}

const vehiclesWithNew = [new Vehicle(5, 120, true, 4), new Vehicle(6, 120, true, 4), new Vehicle(2, 1, true, 5)]; // todos estos vehiculos definidos se van metiendo dentro de la funcion de antes

console.log(new Vehicle(5, 120, true, 4));


