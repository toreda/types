/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2022 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import type {LifecycleClientDelegate} from './client/delegate';
import type {LifecycleServerDelegate} from './server/delegate';
import {lifecyclePhaseListenerName} from './phase/listener/name';

/**
 * Execute lifecycle phase on objects that implement the client or server
 * lifecycle delegate interface.
 * @param phase		Target lifecycle to execute. Must be a valid
 * @param o			Object to execute lifecycle phase on. Must implement the Lifecycle
 *					Client or Server delegate.
 *
 * @category Lifecycle
 */
export async function lifecyclePhase(
	o: LifecycleClientDelegate | LifecycleServerDelegate,
	phaseName: string
): Promise<boolean> {
	if (!o) {
		return false;
	}

	if (!o.lifecycle) {
		return false;
	}

	const listenerName = lifecyclePhaseListenerName(phaseName);

	if (!listenerName) {
		return false;
	}

	const listener = o[listenerName];
	const phaseFlag = o.lifecycle[phaseName];

	// Object needs a listener function and flag function for phase to continue.
	if (typeof listener !== 'function' || typeof phaseFlag !== 'function') {
		return false;
	}

	// Phase flag must be false to continue, indicating this listener has never been
	// called or is okay to call because it has been reset.
	if (phaseFlag()) {
		return false;
	}

	let result: boolean = false;
	// Call listener
	try {
		result = await listener();
	} catch (e) {
		result = false;
	}

	// Activate phase flag to prevent duplicate lifecycle events from activating
	// any listener which has already been activated.
	phaseFlag(true);

	return result;
}
