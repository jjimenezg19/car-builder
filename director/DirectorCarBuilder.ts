import Engine from "../components/Engine";
import GPSNavigator from "../components/GPSNavigator";
import TripComputer from "../components/TripComputer";
import CarStatus from "../enums/CarStatus";
import CarType from "../enums/CarType";
import Transmission from "../enums/Transmission";
import IBuilder from "../builder/IBuilder";

class DirectorCarBuilder {
  public buildSportCar(_builder: IBuilder) {
    _builder.setCarType(CarType.SPORT_CAR);
    _builder.setEngine(new Engine(3200, false));
    _builder.setTransmission(Transmission.SPORTTRONIC);
    _builder.setTripComputer(new TripComputer(CarStatus.GOOD, "Sprt Car"));
    _builder.setGPSNavigator(new GPSNavigator("Desamparados"));
  }
}
export default DirectorCarBuilder;
