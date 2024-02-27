import CarType from "../enums/CarType";
import Engine from "../components/Engine";
import Transmission from "../enums/Transmission";
import TripComputer from "../components/TripComputer";
import GPSNavigator from "../components/GPSNavigator";
import Car from "../classes/Car";

interface IBuilder {
  setCarType(_type: CarType): void;
  setEngine(_engine: Engine): void;
  setTransmission(_transmission: Transmission): void;
  setTripComputer(_tripComputer: TripComputer): void;
  setGPSNavigator(_gpsNavigator: GPSNavigator): void;

  getCar(): Car;
}

export default IBuilder;
