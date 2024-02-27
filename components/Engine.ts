class Engine {
  private volume: number;
  private isStarted: boolean;

  constructor(_volume: number, _isStarted: boolean) {
    this.volume = _volume;
    this.isStarted = _isStarted;
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(_type: number) {
    this.volume = _type;
  }

  public getStarted(): boolean {
    return this.isStarted;
  }

  public setStarted(_isStarted: boolean) {
    this.isStarted = _isStarted;
  }

  public on(): void {
    this.isStarted = true;
  }

  public off(): void {
    this.isStarted = false;
  }
}

export default Engine;
