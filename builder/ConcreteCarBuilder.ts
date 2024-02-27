import Car from "../classes/Car";
import Engine from "../components/Engine";
import GPSNavigator from "../components/GPSNavigator";
import TripComputer from "../components/TripComputer";
import CarType from "../enums/CarType";
import Transmission from "../enums/Transmission";
import IBuilder from "./IBuilder";

class ConcreteCarBuilder implements IBuilder {
  private engine!: Engine;
  private transmission!: Transmission;
  private tripComputer!: TripComputer;
  private gpsNavigator!: GPSNavigator;
  private carType!: CarType;

  setCarType(_type: CarType): void {
    this.carType = _type;
  }
  setEngine(_engine: Engine): void {
    this.engine = _engine;
  }
  setTransmission(_transmission: Transmission): void {
    this.transmission = _transmission;
  }
  setTripComputer(_tripComputer: TripComputer): void {
    this.tripComputer = _tripComputer;
  }
  setGPSNavigator(_gpsNavigator: GPSNavigator): void {
    this.gpsNavigator = _gpsNavigator;
  }
  getCar(): Car {
    return new Car(
      this.engine,
      this.transmission,
      this.tripComputer,
      this.gpsNavigator,
      this.carType
    );
  }
}

export default ConcreteCarBuilder;
