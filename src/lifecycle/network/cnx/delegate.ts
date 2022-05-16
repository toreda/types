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

import type {LifecycleListener} from '../../../lifecycle/listener';
import type {LifecycleNetworkCnx} from '../cnx';

/**
 * Delegate interface for classes implementing Network Client listeners.
 *
 * @category Lifecycle
 */
export interface LifecycleNetworkCnxDelegate {
	lifecycle: LifecycleNetworkCnx;
	/** New connection attempt has started. */
	cnxDidStartConnect?: LifecycleListener;
	/** New connection attempt will be started. */
	cnxWillStartConnect?: LifecycleListener;
	/** Current connection attempt will be stopped. */
	cnxWillStopConnect?: LifecycleListener;
	/** Current connection attempt has stopped.*/
	cnxDidStopConnect?: LifecycleListener;
	/** Current connection attempt failed and was stopped.*/
	cnxDidFailConnect?: LifecycleListener;
	/** Current connection attempt will start handshaking. */
	cnxWillHandshake?: LifecycleListener;
	/** Current connection attempt completed the handshake. */
	cnxDidHandshake?: LifecycleListener;
	/**
	 * Current connection attempt failed. Failed attempts do not invoke `cnxDidHandshake` events.
	 * Instead, only `cnxDidFailHandshake is triggered.
	 */
	cnxDidFailHandshake?: LifecycleListener;
	/** Socket connection with server will be opened. */
	cnxWillOpen?: LifecycleListener;
	/** Socket connection to server opened.*/
	cnxDidOpen?: LifecycleListener;
	/** Socket connection to server closed w/ reason code provided.*/
	cnxDidClose?: LifecycleListener;
	/** Current connection attempt successfully opened connection to server. */
	cnxDidConnect?: LifecycleListener;
	/** Connection received a message. */
	cnxDidRcvMsg?: LifecycleListener;
	/** Connection send a message. */
	cnxDidSndMsg?: LifecycleListener;
}
