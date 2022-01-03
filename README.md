[![Toreda](https://content.toreda.com/logo/toreda-logo.png)](https://www.toreda.com)

[![CI](https://img.shields.io/github/workflow/status/toreda/types/CI?style=for-the-badge)](https://github.com/toreda/types/actions) [![Coverage](https://img.shields.io/sonar/coverage/toreda_types?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)](https://sonarcloud.io/project/activity?graph=coverage&id=toreda_types) [![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/toreda_types?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)](https://sonarcloud.io/summary/new_code?id=toreda_types)

[![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/toreda/types/master?style=for-the-badge)](https://github.com/toreda/types/releases/latest) [![GitHub Release Date](https://img.shields.io/github/release-date/toreda/types?style=for-the-badge)](https://github.com/toreda/types/releases) [![GitHub issues](https://img.shields.io/github/issues/toreda/types?style=for-the-badge)](https://github.com/toreda/types/issues)

 [![license](https://img.shields.io/github/license/toreda/types?style=for-the-badge)](https://github.com/toreda/types/blob/master/LICENSE)

&nbsp;

# `@toreda/types`

Improve readability, reduce redundancy. Functional &amp; Expressive Types used in [**Toreda**](https://www.toreda.com) packages.

&nbsp;

# **Contents**
- [`@toreda/types`](#toredatypes)
- [**Contents**](#contents)
- [**Functional Types**](#functional-types)
	- [`DeepRequired<T>`](#deeprequiredt)
	- [`Primitive`](#primitive)
		- [Import](#import)
		- [Use](#use)
	- [`Stringable`](#stringable)
		- [**Import**](#import-1)
		- [**Use**](#use-1)
- [**Expressive Types**](#expressive-types)
	- [**`BitMask`**](#bitmask)
		- [**Import**](#import-2)
		- [**Use**](#use-2)
- [Install](#install)
	- [Yarn](#yarn)
	- [NPM](#npm)
- [Legal](#legal)
	- [License](#license)
	- [Copyright](#copyright)

&nbsp;

# **Functional Types**

Types & aliases provide shorthand to reduce code duplication and simplify statements.

&nbsp;
## `DeepRequired<T>`
Recursively require all properties on object & children.

&nbsp;
## `Primitive`
Implementer's type is any JavaScript primitive.

### Import
```typescript
import {Primitive} from '@toreda/types'
```

### Use
```typescript
const myValue: Primitive = null;
```

&nbsp;
## `Stringable`
Implementer's contents can be converted to a string by calling `toString()`.

### **Import**
```typescript
import {Stringable} from '@toreda/types'
```

### **Use**
```typescript
export class MyClass implements Stringable {
	public toString(): string {
		return 'stringified_contents_here';
	}
}
```

**Example**
```typescript
// Simple generic mapping. When used only once, exporting a type is overkill, but when used repeatedly
// using a common definition reduces chances for mistakes and reduces line lengths.
export type Data<T> = Record<string, T | T[] | null>;
```

&nbsp;

# **Expressive Types**
Express value intent &amp; purpose with type definitions.

&nbsp;
## **`BitMask`**

### **Import**
```typescript
import {BitMask} from '@toreda/types'
```

### **Use**
```typescript
// Declare and initialize number while also expressing the value's purpose.
let mask: BitMask = 0x1;

// Becomes more clear when expecting values:
function useValue(mask: BitMask): void {
	...
}
// versus:
function useValue(mask: number): void {
	...
}
```


**Example**
```typescript
// Expressive Type alias.
export type BigId = string;

// BigId is an expressive alias replacing the use of 'string' for id's type. It makes no
// functional difference, however id types often impose character and length limitations meaning
// the value cannot be an arbitrary string. BigId gives the caller context for what string values
// are actually valid & accepted.
function validateId(id: BigId): void {
	...
}
```

&nbsp;

# Install

## Yarn
```bash
$ yarn add @toreda/types --dev
```


## NPM
```bash
$ yarn add @toreda/types --D
```

&nbsp;
# Legal

## License
[MIT](LICENSE) &copy; Toreda, Inc.


## Copyright
Copyright &copy; 2019 - 2022 Toreda, Inc. All Rights Reserved.

https://www.toreda.com
