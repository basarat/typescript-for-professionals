initializationWithSideEffects();

function initializationWithSideEffects() {
  specialConstant = 42;
  console.log("Side effects have occurred!");
}

export let specialConstant: number;