class GPSNavigator {
  private route: string;
  private started: boolean;

  constructor(_route: string) {
    this.route = _route;
    this.started = false;
  }

  public isStarted(): boolean {
    return this.started;
  }

  public setStarted(_started: boolean) {
    this.started = _started;
  }

  public getRoute(): string {
    return this.route;
  }

  public setRoute(_rote: string) {
    this.route = _rote;
  }

  public start(): void {
    this.started = true;
  }

  public off(): void {
    this.started = false;
  }
}

export default GPSNavigator;
