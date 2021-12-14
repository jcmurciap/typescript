// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar():void;
}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}
conducirBatimovil(batimovil);


// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villian {
  reir?: boolean;
  comer: boolean;
  llorar: boolean;
}

const guason = {
  reir: true,
  comer: true,
  llorar: false,
}

const reir = ( guason: Villian ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

// Cree una interfaz para la siguiente funcion
interface Ciudadanos {
  ( a:string[]): number
}

let ciudadGotica: Ciudadanos 
ciudadGotica = ( ciudadanos ):number => {
  return ciudadanos.length;
}
console.log(ciudadGotica(["juan", "camilo", "murcia", "pimentel"]));

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos


interface Human {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements Human{
  nombre: string = 'Camilo';
  edad: number = 28;
  sexo: string = 'Male'; 
  estadoCivil: string = 'Single'; 
  imprimirBio(){
    console.log('Hello');
  }
}