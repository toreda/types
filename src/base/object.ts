/**
 * Contains base properties needec to perform basic type tests
 * on objects with unknown types.
 *
 * @category Base
 */
export interface BaseObject {
	[k: string]: unknown;
	prototype: BaseObject;
	length?: number;
}
