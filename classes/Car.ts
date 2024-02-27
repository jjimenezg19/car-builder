import Engine from "../components/Engine";
import GPSNavigator from "../components/GPSNavigator";
import TripComputer from "../components/TripComputer";
import CarType from "../enums/CarType";
import Transmission from "../enums/Transmission";

class Car {
  private engine: Engine;
  private transmission: Transmission;
  private tripComputer: TripComputer;
  private gpsNavigator: GPSNavigator;

  private carType: CarType;

  constructor(
    _engine: Engine,
    _transmission: Transmission,
    _tripComputer: TripComputer,
    _gpsNavigator: GPSNavigator,
    _carType: CarType
  ) {
    this.engine = _engine;
    this.transmission = _transmission;
    this.tripComputer = _tripComputer;
    this.gpsNavigator = _gpsNavigator;
    this.carType = _carType;
  }

  public getEngine(): Engine {
    return this.engine;
  }

  public setEngine(_engine: Engine) {
    this.engine = _engine;
  }

  public getTransmission(): Transmission {
    return this.transmission;
  }

  public setTransmission(_transmission: Transmission) {
    this.transmission = _transmission;
  }

  public getTripComputer(): TripComputer {
    return this.tripComputer;
  }

  public setTripComputer(_tripComputer: TripComputer) {
    this.tripComputer = _tripComputer;
  }

  public getGpsNavigator(): GPSNavigator {
    return this.gpsNavigator;
  }

  public setGpsNavigator(_gpsNavigator: GPSNavigator) {
    this.gpsNavigator = _gpsNavigator;
  }
  public getCarType(): CarType {
    return this.carType;
  }

  public setCarType(_carType: CarType) {
    this.carType = _carType;
  }
}

export default Car;
