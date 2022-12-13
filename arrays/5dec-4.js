const user = {
    profile: {  // se puede añadir un propiedad con algunos datos en profile y otros datos fuera, eso depende de bases de datos
        avatarUrl: 'https://.....',
        nombre: 'José Miguel González García',
    },
    timezone: 'Europe/Madrid',
    edad: 33,
    email: 'jmgonzalez@esat.com'
}


const vehicle = {
    type: 'car',
    year: 2019,
    marca: 
    color: '',
    modelo: '',
    motor: '',
    caracteristicas {
        numeroRuedas: 2,
    }
    
}

function vehicleType (vehicle) {
    if(vehicle.caracteristicas.numeroRuedas === 2){
        return 'moto'
    } else {
        return 'coche';
    }
}