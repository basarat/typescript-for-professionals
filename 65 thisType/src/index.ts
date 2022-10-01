type StateDescription<D, M> = {
  data: D;
  methods: M & ThisType<D & M>;
};

function createState<D, M>(desc: StateDescription<D, M>): D & M {
  return { ...desc.data, ...desc.methods };
}

let state = createState({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    },
  },
});

state.x = 10;
state.y = 20;
state.moveBy(5, 5);