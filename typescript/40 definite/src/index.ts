class Point {
  x!: number;
  y!: number;
  constructor() {
    this.moveRandom();
  }
  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}