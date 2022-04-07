/**
 * Synchronous task function signature for functions invoked by Runnable
 * class instances. Use non-synchronous task functions when possible, as
 * long synchronous calls on the main/UI thread block the event Loop.
 *
 * @category Runnable
 */
export type RunnableTaskSync<ArgT, ReturnT> = (...args: ArgT[]) => ReturnT;
