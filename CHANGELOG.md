
# [Unreleased]

# [2.10.0] - 2022-04-09

## Added
* `BaseObject` interface

## Fixes & Updated
* Added `minimist` and `marked` packages to yarn resolutions to resolve CVEs flagged by Github.
* Updated all dev dependencies to latest.
* Performed `yarn upgrade`.

# [2.9.1] - 2022-04-06

## New Types
* `Runnable<ArgT, ReturnT>` interface for classes which implement a runnable task interface.
* `RunnableTask<ArgT, ReturnT>` type signature for asynchronous functions invoked by `Runnable` classes.
* `RunnableTaskSync<ArgT, ReturnT>` type signature for synchronous functions invoked by `Runnable` classes. Prefer async tasks whenever possible.

# [2.8.0] - 2022-02-22

## New Types

### Cryptocurrency Units
* `AAVE`
* `ADA`
* `ALGO`
* `APE`
* `ATOM`
* `AVAX`
* `AXS`
* `BCH`
* `BCN`
* `BNB`
* `BTC`
* `BTM`
* `BTM`
* `BTT`
* `BTT`
* `BUSD`
* `CAKE`
* `CDAI`
* `CEL`
* `CELO`
* `Coins`
* `CUSDC`
* `DAI`
* `DASH`
* `DGB`
* `DOGE`
* `DOT`
* `ENJ`
* `EOS`
* `ETH`
* `FIL`
* `FLO`
* `FLOW`
* `FTM`
* `FTX`
* `FTX`
* `GALA`
* `GRT`
* `Hashrate`
* `HBAR`
* `KCS`
* `KSM`
* `LINK`
* `LRC`
* `LTC`
* `LUNA`
* `MANA`
* `MATIC`
* `MKR`
* `NEAR`
* `NEXO`
* `RVN`
* `SAND`
* `SHIB`
* `SOL`
* `STX`
* `SYS`
* `Tokens`
* `TRX`
* `TUSD`
* `UNI`
* `USDC`
* `USDT`
* `VET`
* `VTC`
* `WAVES`
* `WBTC`
* `WETH`
* `ZEC`
* `XLM`
* `XMR`
* `XRD`
* `XRP`
* `XTZ`
* `XVG`
* `ZEN`
* `ZIL`
* `ICP`

### Scientific Units
* `Amperes`
* `Degrees`
* `Katals`
* `Farads`
* `Hertz`
* `Joules`
* `Kelvin`
* `Kilograms`
* `Mole`
* `Newtons`
* `Ohms`
* `Radians`
* `Sieverts`
* `Telsas`

### Data Units
* `Bits`
* `Bytes`
* `Kilobytes`
* `Kilobits`
* `Megabytes`
* `Gigabytes`
* `Petabytes`
* `Megabits`
* `Gigabits`
* `Exabytes`
* `Terabytes`
* `Terabits`

### Data-rate Units
* `bps`
* `Bps`
* `Mbps`
* `MBps`
* `Gbps`
* `GBps`
* `Tbps`
* `TBps`
* `Pbps`
* `PBps`

### Size and Distance
#### Imperial
* `Feet`
* `FluidOunces`
* `Gallons`
* `Grams`
* `Inches`
* `Miles`
* `Ounces`
* `Pounds`
* `Yards`

#### Metric
* `Centimeters`
* `Decimeters`
* `Femtometers`
* `Gigameters`
* `Kilometers`
* `Megameters`
* `Meters`
* `Micrometers`
* `Micrometers`
* `Millimeters`
* `Nanometers`
* `Picometers`
* `Terameters`

* `HashStr` to express hash string values.
* `HashAlg` to express unique identifiers for hashing algorithms, e.g. `sha256`. Does not comfort to a specific format e.g. `sha256` vs `sha-256`, only that the stored value uniquely identifies a hashing algorithm.
* `FileSize` to express file sizes in bytes or other units.
* `PublicKey` to identify properties containing public key data, but does not describe algorithm, length, or other specific properties about the key.
* `PrivateKey` to identify properties containing private key data, but does not describe algorithm, length, or other specific properties about the key.

# [2.7.0] - 2022-02-21

## Added
* `Serializable` for classes which need both `serialize()` and `toData()` function support.

&nbsp;

# [2.6.0] - 2022-01-02

## Added
* `LifecycleServerDelegate` for server-side classes using lifecycles.
* `LifecycleClientDelegate` for client-side classes using lifecycles.
* `LifecyclePhaseId` as an expressive type to clarify the purpose of some name & id args used in lifecycle functions.
* `Itor` for Iterators which contain a next call.
* `ItorItem` for values returned by `Itor.next()`.
* `Clearable` for objects offering `.clear()` functionality.
* `Resettable` for objects offering state reset via `.reset()`.
* `Visitor<NodeT>` for Visitor functions used in Graph and Tree search algorithms. Returns `Promise<NodeT | null>`, allowing the function to return the next node or indicate there are no more nodes.
* `ArrayFunc<T, U>` used by `.forEach(...)` calls on Iterable objects.

&nbsp;

# [2.5.0] - 2021-11-18
## Added
* `IdFn` type that defines expected id properties as a string, helper function, or `Strong` type.
* `Cacheable` interface defining required properties for objects to be compatible with Toreda Cache classes.

&nbsp;

# [2.4.1] - 2021-11-08

## Added
* `Optional<T, K>` generic type which takes an interface `T` to make all properties optional except for one or more keys provided for `k`. For example: `Optional<MyInterface, 'one' | 'two'>` makes all properties on interface `MyInterface` optional except for keys which exactly match `one` or `two`.

## Removed
* `gulp-eslint` package dependency.

&nbsp;

# [2.4.0]
 * No changelog for release.

&nbsp;

# [2.0.0] - 2021-09-27

## Changed
* `CanBeNullOrUndefined` is now `NullOrUndefined` and moved from `./src/aliases.ts` to `./src/null/or/undefined.ts`.
* `GuardedType` is now `Guarded` and moved from `./src/aliases.ts` to `./src/guarded.ts`.

## Moved
* `ANY` from `./src/aliases.ts` to `./src/any.ts`.
* `AnyObj<T = unknown>` from `./src/any/obj.ts` to `./src/any/obj.ts`.
* `AnyFunc<T = unkown>` from `./src/aliases.ts` to `./src/any/func.ts`.
* `Arrayable<T = unknown>` from `./src/aliases.ts` to `./src/arrayable.ts`.
* `Awaited<T = unknown>` from `./src/aliases.ts` to `./src/awaited.ts`.
* `Constructor<T = unknown>` from `./src/aliases.ts` to `./src/constructor.ts`
* `DeepExpand<T>` from `./src/aliases.ts` to `./src/deep/expand.ts`..
* `DeepPartial<T>` from `./src/aliases.ts` to `./src/deep/partial.ts`.
* `DeepRequired<T>` from `./src/aliases.ts` to `./src/deep/required.ts`.
* `LiteralToPrimitive<SubOption>` from `./src/aliases.ts` to `./src/literal/to/primitive.ts`.
* `Nullable<T = unknown>` from `./src/aliases.ts` to `./src/nullable.ts`.
* `PrimitiveOrConstructor` from `./src/aliases.ts` to `./src/primitive/or/constructor.ts`.
* `Promisable<T = unknown>` from `./src/aliases.ts` to `./src/promisable.ts`.
* `Stringable<T = unknown>` from `./src/aliases.ts` to `./src/stringable.ts`.

&nbsp;

# [1.2.2]
* No changelog for release.


[Unreleased]: https://github.com/toreda/types/releases/compare/v2.8.0...HEAD
[2.7.0]: https://github.com/toreda/types/releases/compare/v2.7.0...v2.8.0
[2.7.0]: https://github.com/toreda/types/releases/compare/v2.6.0...v2.7.0
[2.6.0]: https://github.com/toreda/types/releases/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/toreda/types/releases/compare/v2.4.0...v2.5.0
[2.4.1]: https://github.com/toreda/types/releases/compare/v2.4.0...v2.4.1
[2.4.0]: https://github.com/toreda/types/releases/compare/v2.0.0...v2.4.0
[2.0.0]: https://github.com/toreda/types/releases/compare/v1.2.2...v2.0.0
[1.2.2]: https://github.com/toreda/types/releases/compare/v0.0.0...v1.2.2
[0.0.0]: https://github.com/toreda/types/releases
