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

import type {LifecyclePhaseId} from '../id';

/**
 * Get listener name for target Lifecycle Phase.
 * @param id		Target Phase ID to return listener name for.
 * @returns			Listener Name string when `id` is a valid phase id.
 *					`null` when id doesn't match a supported phase, or is not a string.
 *
 * @category Lifecycle
 */
export function lifecyclePhaseListenerName(id: LifecyclePhaseId): string | null {
	switch (id) {
		case 'didInit':
			return id;
		case 'willInit':
			return id;
		case 'willLoad':
			return id;
		case 'didLoad':
			return id;
		case 'willStart':
			return id;
		case 'didStart':
			return id;
		case 'willBecomeReady':
			return id;
		case 'didBecomeReady':
			return id;
		case 'willPause':
			return id;
		case 'didUnpause':
			return id;
		case 'willStop':
			return id;
		case 'didStop':
			return id;
		case 'willConnect':
			return id;
		case 'didConnect':
			return id;
		case 'didDisconnect':
			return id;
		case 'willDisconnect':
			return id;
		case 'didFailConnect':
			return id;
		case 'memoryWarning':
			return 'onMemoryWarning';
		case 'willLoseFocus':
			return id;
		case 'willGainFocus':
			return id;
		case 'didGainFocus':
			return id;
		case 'didLoseFocus':
			return id;
		case 'willShutdown':
			return id;
		case 'willReconnect':
			return id;
		case 'didReconnect':
			return id;
		default:
			return null;
	}
}
