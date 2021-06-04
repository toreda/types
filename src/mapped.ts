import {Primitive} from './aliases';

export type DeepPartial<T> = Expand<
	{
		[key in keyof T]?: T[key] extends Primitive ? T[key] : DeepPartial<T[key]>;
	}
>;
export type DeepRequired<T> = Expand<
	{
		[key in keyof T]-?: T[key] extends Primitive ? NonNullable<T[key]> : DeepRequired<T[key]>;
	}
>;

export type Expand<T> = T extends infer obj ? {[key in keyof obj]: obj[key]} : never;

export type DeepExpand<T> = T extends Primitive
	? T
	: T extends infer obj
	? {[key in keyof obj]: DeepExpand<obj[key]>}
	: never;

export type LiteralToPrimitive<SubOption> = SubOption extends boolean
	? boolean
	: SubOption extends number
	? number
	: SubOption extends string
	? string
	: SubOption;
