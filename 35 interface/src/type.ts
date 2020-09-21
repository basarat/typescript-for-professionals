type Point2D = {
  x: number,
  y: number,
};

type Point3D = Point2D & {
  z: number,
};

export const point: Point3D = {
  x: 0,
  y: 0,
  z: 0,
};