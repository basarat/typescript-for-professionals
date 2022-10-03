export type Setters<State> = {
  [K in keyof State & string as `set${Capitalize<K>}`]: (value: State[K]) => void;
};

export type Getters<State> = {
  [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K];
};

export type Store<State> = Setters<State> & Getters<State>;

type PersonState = {
  name: string;
  age: number;
};

type PersonStore = Store<PersonState>;

declare const personStore: PersonStore;
personStore.setName("John");
personStore.setAge(20);
const name: string = personStore.getName();
const age: number = personStore.getAge();

