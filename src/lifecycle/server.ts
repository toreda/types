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

import type {LifecycleServerData} from './server/data';
import type {LifecycleServerPhase} from './server/phase';
import {lifecycleServerPhases} from './server/phases';

/**
 * Managed flags for lifecycle phases used by server-side lifecycle flows.
 *
 * @category Lifecycle
 */
export class LifecycleServer {
	public didBecomeReady: boolean;
	public didInit: boolean;
	public didLoad: boolean;
	public didStart: boolean;
	public didStop: boolean;
	public willBecomeReady: boolean;
	public willInit: boolean;
	public willLoad: boolean;
	public willShutdown: boolean;
	public willStart: boolean;
	public willStop: boolean;

	constructor() {
		this.willInit = false;
		this.didInit = false;
		this.willLoad = false;
		this.didLoad = false;
		this.willStart = false;
		this.didStart = false;
		this.willBecomeReady = false;
		this.didBecomeReady = false;
		this.willStop = false;
		this.didStop = false;
		this.willShutdown = false;
	}

	public execute(phase: LifecycleServerPhase): boolean {
		if (!lifecycleServerPhases.has(phase)) {
			return false;
		}

		const hasExecuted = this[phase];
		if (typeof hasExecuted !== 'boolean') {
			return false;
		}

		if (hasExecuted === true) {
			return false;
		}

		this[phase] = true;
		return true;
	}

	public reset(): void {
		this.didBecomeReady = false;
		this.didInit = false;
		this.didLoad = false;
		this.didStart = false;
		this.didStop = false;
		this.willBecomeReady = false;
		this.willInit = false;
		this.willLoad = false;
		this.willShutdown = false;
		this.willStart = false;
		this.willStop = false;
	}

	public toData(): LifecycleServerData {
		return {
			didBecomeReady: this.didBecomeReady,
			didInit: this.didInit,
			didLoad: this.didLoad,
			didStart: this.didStart,
			didStop: this.didStop,
			willBecomeReady: this.willBecomeReady,
			willInit: this.willInit,
			willLoad: this.willLoad,
			willShutdown: this.willShutdown,
			willStart: this.willStart,
			willStop: this.willStop
		};
	}
}
