// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ANY = any;

export type jsonType = ANY;

export type Primitive = bigint | boolean | null | number | string | symbol | undefined;

export type AnyObj<T = unknown> = Record<string, T>;

export type AnyFunc<T = unknown> = (...args: ANY[]) => T;

export type ToStringable = {toString: () => string};

export type Constructor<T = unknown> = {new (...args: ANY[]): T};

export type Promisable<T = unknown> = T | Promise<T>;

export type Nullable<T = unknown> = T | null;

export type CanBeNullOrUndefined<T = unknown> = T | null | undefined;

export type Arrayable<T> = T | T[];
