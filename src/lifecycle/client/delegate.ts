import type {LifecycleClient} from '../client';
import type {LifecycleListener} from '../listener';

/**
 * @category Lifecycle
 */
export interface LifecycleClientDelegate {
	lifecycle: LifecycleClient;
	/** Entered 'init' phase - creating all necessary instances. **/
	willInit?: LifecycleListener;
	onInit: LifecycleListener;
	didInit?: LifecycleListener;
	/** Client completed the 'load' phase' and will begin load phase next.*/
	didLoad?: LifecycleListener;
	/** Client is now loading resources, assets, and packages. */
	onLoad: LifecycleListener;
	willLoad?: LifecycleListener;
	/** Entered 'ready' phase - all systems are running & ready. */
	willBecomeReady?: LifecycleListener;
	onReady: LifecycleListener;
	didBecomeReady?: LifecycleListener;
	/** Client systems are starting and will enter 'start' phase. */
	willStart?: LifecycleListener;
	onStart: LifecycleListener;
	didStart?: LifecycleListener;
	/** Client received memory warning from OS and cleared cached resources. */
	onMemoryWarning?: LifecycleListener;
	/** Client will enter 'pause' phase soon. Prepare to pause. */
	willPause?: LifecycleListener;
	/** Client entered 'pause' phase. All systems should now be paused. */
	didUnpause?: LifecycleListener;
	/** Client will enter 'stop' phase sometime soon. Prepare to stop systems. */
	willStop?: LifecycleListener;
	/** Client entered 'stop' phase - client has stopped running. All systems & timers are now stopped. */

	willLoseFocus?: LifecycleListener;
	didLoseFocus?: LifecycleListener;
	didGainFocus?: LifecycleListener;
	willGainFocus?: LifecycleListener;
}
