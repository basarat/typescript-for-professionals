type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };
type Person = { name: string, email: string };

let point2: Point2D = { x: 0, y: 0 };
let point3: Point3D = { x: 10, y: 10, z: 10 };
let person: Person = { name: 'john', email: 'john@example.com' };

point2 = point3;
point3 = point2; // Error
point3 = point2 as Point3D; // Ok: I trust you

person = point3; // Error
point3 = person; // Error
point3 = person as Point3D; // Error: I don't trust you enough
point3 = person as unknown as Point3D; // Ok: I doubly trust you