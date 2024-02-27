import Car from "./classes/Car";
import DirectorCarBuilder from "./director/DirectorCarBuilder";
import ConcreteCarBuilder from "./builder/ConcreteCarBuilder";

// Crear un constructor de coches concreto
const builder: ConcreteCarBuilder = new ConcreteCarBuilder();

// Crear un director de constructor de coches
const director: DirectorCarBuilder = new DirectorCarBuilder();

// Construir un carro deportivo
director.buildSportCar(builder);
const sportCar: Car = builder.getCar();
console.log(sportCar.getCarType());
