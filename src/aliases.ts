// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ANY = any;

export type jsonType = ANY;

export type Primitive = bigint | boolean | null | number | string | symbol | undefined;

export type AnyObj<T = unknown> = Record<string, T>;

export type AnyFunc<T = unknown> = (...args: ANY[]) => T;

export type Constructor<T = unknown> = {new (...args: ANY[]): T};
