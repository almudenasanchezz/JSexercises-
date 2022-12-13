// Un vehículo podrá recorrer un km, cada km le resta 1 litro a su combustible
function Vehicle(doors, speed, motorized, wheels) {
    this.doorNumber = doors;
    this.maxSpeed = speed;
    this.isMotorized = motorized;
    this.wheelNumber = wheels;
    
    const initialFuel = 30;

    this.fuel = initialFuel;

    this.advance1km = function advance1km () {
        this.fuel = this.fuel - 1;
    }

    this.getKmsDone = function (){
        return initialFuel - this.fuel;
    }
  }

  const car = new Vehicle(5, 120, true, 4);

  console.log(car);
  car.advance1km();
  console.log(car);



  class VehicleClass {
    color = 'red'; // todo lo que esta fuera del constructor quiere decir que siempre se parte de estos valores
    fuel = 30;

    constructor(doors, speed, motorized, wheels) { // el constructor es la funcion a la que se llama cuando se hace un 'new'
        this.doorNumber = doors; // dentro del constructor se incluyen valores variables
        this.maxSpeed = speed;
        this.isMotorized = motorized;
        this.wheelNumber = wheels;
    }

    fillFuel(newFuel) { // todo esto son funciones pero al ser clases no se pone la palabra 'function'
        if(typeof newFuel !== 'number' || newFuel < 0){
            console.error('la gasolina debe ser un número positivo')
            return;
        }

        this.fuel = this.fuel + newFuel;
    }

    setColor(newColor) {
        this.color = newColor;
    }

    advance1km(){
        this.fuel = this.fuel - 1;
    }
    
    getKmsDone (){
        return 30 - this.fuel;
    }
  }

  const carClass = new VehicleClass(5, 120, true, 4);
  console.log(carClass.color) // aqui en consola el color aparece rojo

  carClass.setColor('yellow'); // de esta forma se cambia el color de rojo a amarillo
  console.log(carClass.color) // aqui en consola el color es amarillo