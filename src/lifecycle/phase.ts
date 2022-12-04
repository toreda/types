import {Lifecycle} from '../lifecycle';
import type {LifecycleDelegateCommon} from './delegate/common';

/**
 *
 * @param o
 * @param phase
 * @returns
 *
 * @category Lifecycle
 */
export async function lifecyclePhase<
	LifecycleT extends Lifecycle<unknown>,
	DelegateT extends LifecycleDelegateCommon<LifecycleT>,
	DelegateKeyT extends keyof DelegateT,
	LifecycleKeyT extends keyof LifecycleT
>(o: DelegateT, phase: DelegateKeyT): Promise<boolean> {
	if (!phase || !o || !o.lifecycle) {
		return false;
	}

	if (!o.lifecycle.has(phase)) {
		return false;
	}

	const flag = o.lifecycle.get(phase);
	if (flag === true) {
		return false;
	}

	const ln = o[phase];
	if (typeof ln !== 'function') {
		return false;
	}

	let result: boolean = false;

	try {
		result = await ln();
	} catch (e) {
		result = false;
	}
	// Set flag active.
	o.lifecycle.set(phase, true);

	return result;
}
