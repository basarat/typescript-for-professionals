type Square = {
  size: number,
};

type Rectangle = {
  width: number,
  height: number,
};

type Shape = Square | Rectangle;

function area(shape: Shape): void|number {
  if ('size' in shape) {
    return shape.size * shape.size;
  }
  if ('width' in shape) {
    return shape.width * shape.height;
  }
}

area({ size: 2 });             // 4
area({ width: 2, height: 3 }); // 6
