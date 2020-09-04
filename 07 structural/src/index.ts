type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 10, z: 20 };

/** Extra info ok */
point2D = point3D;
function takesPoint2D(point: Point2D) { /** ... */ }
takesPoint2D(point3D);

/** Error: missing info */
point3D = point2D;
function takesPoint3D(point: Point3D) { /** ... */ }
takesPoint3D(point2D);