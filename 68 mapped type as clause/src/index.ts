type Getter<T extends string> = `get${Capitalize<T>}`;
type Setter<T extends string> = `set${Capitalize<T>}`;

type Name = 'name';

type GetName = Getter<Name>;
type SetName = Setter<Name>;