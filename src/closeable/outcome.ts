/**
 * The outcome of a close operation on a Closeable class.
 *
 * @category Closeable
 */
export interface CloseableOutcome {
	/** Was the close operation aborted either internally or externally? */
	aborted?: boolean;
	/** Did the close operation succeed? */
	closed: boolean;
	/** Errors encountered during the operation, if any. */
	errors?: Error[];
}
