import type {RunnableOutcome} from './runnable/outcome';
import type {RunnableTask} from './runnable/task';
import type {RunnableTaskSync} from './runnable/task/sync';

/**
 * Task logic to store and externally call tasks. External callers
 * can invoke stored tasks with custom arguments.
 *
 * @category Runnable
 */
export class Runnable<ArgDataT, ReturnT> {
	/** Unique ID for Runnable function. */
	public readonly id: string;
	/** Stored task to be executed. Although async functions are preferred for performance, both
	 *  sync and async functions are supported. Guaranteed to be set to a task. Constructor throws
	 *	when invoked without a valid task signature.
	 */
	private readonly task: RunnableTask<ArgDataT, ReturnT> | RunnableTaskSync<ArgDataT, ReturnT>;

	constructor(id: string, task: RunnableTask<ArgDataT, ReturnT> | RunnableTaskSync<ArgDataT, ReturnT>) {
		this.assertInit(id, task);
		this.id = id;
		this.task = task;
	}

	/**
	 * Assert all constructor arguments are present and match expected types.
	 * @param id
	 * @param task
	 */
	private assertInit(
		id: string,
		task: RunnableTask<ArgDataT, ReturnT> | RunnableTaskSync<ArgDataT, ReturnT>
	): void {
		if (id === undefined || id === null) {
			throw new Error('runnable:id:missing');
		}

		if (typeof id !== 'string') {
			throw new Error('runnable:id:bad_format');
		}

		if (task === undefined || task === null) {
			throw new Error('runnable:task:missing');
		}

		if (typeof task !== 'function') {
			throw new Error('runnable:task:bad_format');
		}
	}

	/**
	 * Run task provided by Runnable.
	 * @param args
	 * @returns
	 */
	public async run(data: ArgDataT): Promise<RunnableOutcome<ReturnT>> {
		const outcome: RunnableOutcome<ReturnT> = {
			execution: {
				exception: false,
				complete: false,
				errors: []
			},
			returnValue: null
		};

		try {
			outcome.returnValue = await Promise.resolve(this.task(data));

			outcome.execution.complete = true;
			outcome.execution.exception = false;
		} catch (e) {
			outcome.returnValue = null;
			outcome.execution.errors.push(e);
			outcome.execution.complete = false;
			outcome.execution.exception = true;
		}

		return outcome;
	}
}
