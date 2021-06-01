export type ANY = any;

export type AnyFunction<T = unknown> = () => T;

export type AnyObj<T = unknown> = Record<string, T>;

export type Constructor = {new (...args: ANY[]): ANY};

export type NotNull<T> = T extends null | undefined ? never : T;

export type Primitive = bigint | boolean | null | number | string | symbol | undefined;

export type UnavoidableAny = any;
