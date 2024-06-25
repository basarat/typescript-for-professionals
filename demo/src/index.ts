enum Size {
  Small,
  Medium,
  Large,
}

type Pizza = {
  type: string;
  size: Size;
};

const pizza: Pizza = {
  type: "pepperoni",
  size: Size.Medium,
};
