
# [Unreleased]

# [2.6.0] - 2021-12-08
## Added
* `LifecycleServerDelegate` for server-side classes using lifecycles.
* `LifecycleClientDelegate` for client-side classes using lifecycles.
* `LifecyclePhaseId` as an expressive type to clarify the purpose of some name & id args used in lifecycle functions.

# [2.5.0] - 2021-11-18
## Added
* `IdFn` type that defines expected id properties as a string, helper function, or `Strong` type.
* `Cacheable` interface defining required properties for objects to be compatible with Toreda Cache classes.

# [2.4.1] - 2021-11-08

## Added
* `Optional<T, K>` generic type which takes an interface `T` to make all properties optional except for one or more keys provided for `k`. For example: `Optional<MyInterface, 'one' | 'two'>` makes all properties on interface `MyInterface` optional except for keys which exactly match `one` or `two`.

## Removed
* `gulp-eslint` package dependency.

# [2.0.0] - 2021-09-27

## Changed

* Moved each type from `./src/aliases` to individual files with 1 export each:
* `CanBeNullOrUndefined` is now `NullOrUndefined` and moved from `./src/aliases.ts` to `./src/null/or/undefined.ts`.
* `GuardedType` is now `Guarded` and moved from `./src/aliases.ts` to `./src/guarded.ts`.
* Moved `ANY` from `./src/aliases.ts` to `./src/any.ts`.
* Moved `AnyObj<T = unknown>` from `./src/any/obj.ts` to `./src/any/obj.ts`.
* Moved `AnyFunc<T = unkown>` from `./src/aliases.ts` to `./src/any/func.ts`.
* Moved `Arrayable<T = unknown>` from `./src/aliases.ts` to `./src/arrayable.ts`.
* Moved `Awaited<T = unknown>` from `./src/aliases.ts` to `./src/awaited.ts`.
* Moved `Constructor<T = unknown>` from `./src/aliases.ts` to `./src/constructor.ts`
* Moved `DeepExpand<T>` from `./src/aliases.ts` to `./src/deep/expand.ts`..
* Moved `DeepPartial<T>` from `./src/aliases.ts` to `./src/deep/partial.ts`.
* Moved `DeepRequired<T>` from `./src/aliases.ts` to `./src/deep/required.ts`.
* Moved `LiteralToPrimitive<SubOption>` from `./src/aliases.ts` to `./src/literal/to/primitive.ts`.
* Moved `Nullable<T = unknown>` from `./src/aliases.ts` to `./src/nullable.ts`.
* Moved `PrimitiveOrConstructor` from `./src/aliases.ts` to `./src/primitive/or/constructor.ts`.
* Moved `Promisable<T = unknown>` from `./src/aliases.ts` to `./src/promisable.ts`.
* Moved `Stringable<T = unknown>` from `./src/aliases.ts` to `./src/stringable.ts`.

# [1.2.2]

[Unreleased]: https://github.com/toreda/types/releases/compare/v1.2.2...HEAD
[2.4.0]: https://github.com/toreda/types/releases/compare/v2.0.0...v2.4.0
[2.0.0]: https://github.com/toreda/types/releases/compare/v1.2.2...v2.0.0
[1.2.2]: https://github.com/toreda/types/releases/compare/v0.0.0...v1.2.2
[0.0.0]: https://github.com/toreda/types/releases
