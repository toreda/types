/**
 * Asynchronous task function signature for functions invoked by Runnable
 * class instances.
 *
 * @category Runnable
 */
export type RunnableTask<ArgT, ReturnT> = (...args: ArgT[]) => Promise<ReturnT>;
