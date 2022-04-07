import type {CloseableOutcome} from './closeable/outcome';

/**
 * Indicates that the implementer provides a public close function.
 *
 * @category Closeable
 */
export interface Closeable<ArgT> {
	/** Close function. Specific purpose and functionality is determined by implementer. This interface serves as
	 * 	a contract to guarantee close can be called.
	 */
	close: (data?: ArgT) => Promise<CloseableOutcome>;
}
