import type {RunnableTask} from './runnable/task';
import type {RunnableTaskSync} from './runnable/task/sync';

/**
 * @category Runnable
 */
export interface Runnable<ArgT, ReturnT> {
	/** Unique ID for Runnable function. */
	id: string;
	/**
	 */
	fn: RunnableTask<ArgT, ReturnT> | RunnableTaskSync<ArgT, ReturnT>;
}
