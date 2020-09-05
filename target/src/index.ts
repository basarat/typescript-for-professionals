class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
