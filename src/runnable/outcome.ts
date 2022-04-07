/**
 * Result object returned when runnable task invocation completes, whether
 * it fails or succeeds.
 *
 * @category Runnable
 */
export interface RunnableOutcome<ReturnT> {
	returnValue: ReturnT | null;
	execution: {
		errors: Error[];
		complete: boolean;
		exception: boolean;
	};
}
