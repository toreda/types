/**
 * Signature for listener functions executed in response to lifecycle events.
 *
 * @category Lifecycle
 */
export type LifecycleListener = () => Promise<boolean> | boolean;
