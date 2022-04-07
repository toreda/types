/**
 * Asynchronous task function signature for functions invoked by Runnable
 * class instances.
 *
 * @category Runnable
 */
export type RunnableTask<ArgDataT, ReturnT> = (data: ArgDataT) => Promise<ReturnT>;