/**
 * Alias for 'any'. Toreda types avoid 'any' whenever possible. Accurate types,
 * generics, or even unknown are always preferred. In rare cases where 'any' is necessary,
 * this alias avoids compiler warnings and demonstrates 'any' usage is intentional.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ANY = any;

export type jsonType = ANY;

/** Single type union alias for Javascript primitives. */
export type Primitive = bigint | boolean | null | number | string | symbol | undefined;

/** Type alias for simple objects. */
export type AnyObj<T = unknown> = Record<string, T>;

/** Type alias for functions. */
export type AnyFunc<T = unknown> = (...args: ANY[]) => T;

export type ToStringable = {toString: () => string};

export type Constructor<T = unknown> = {new (...args: ANY[]): T};

export type Promisable<T = unknown> = T | Promise<T>;

export type Awaited<T = unknown> = T extends PromiseLike<infer U> ? U : T;

export type Nullable<T = unknown> = T | null;

export type CanBeNullOrUndefined<T = unknown> = T | null | undefined;

export type Arrayable<T> = T | T[];
