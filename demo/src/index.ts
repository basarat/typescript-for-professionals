type A<T> = (x: T) => T;
interface GenericInterfaceForFunction<T> {
  (x: T): T;
}

type B = <T>(x: T) => T;
interface InterfaceForGenericFunction {
  <T>(x: T): T;
}