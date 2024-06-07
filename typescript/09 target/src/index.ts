class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
