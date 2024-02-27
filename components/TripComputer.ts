import CarStatus from "../enums/CarStatus";

class TripComputer {
  private carStatus: CarStatus;
  private description: string;

  constructor(_carStatus: CarStatus, _description: string) {
    this.carStatus = _carStatus;
    this.description = _description;
  }

  public getCarStatus(): CarStatus {
    return this.carStatus;
  }

  public setCarStatus(_carStatus: CarStatus) {
    this.carStatus = _carStatus;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(_description: string) {
    this.description = _description;
  }
}

export default TripComputer;
