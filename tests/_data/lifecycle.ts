import {LifecycleClient} from '../../src/lifecycle/client';
import type {LifecycleClientDelegate} from '../../src/lifecycle/client/delegate';
import {LifecycleServer} from '../../src/lifecycle/server';
import type {LifecycleServerDelegate} from '../../src/lifecycle/server/delegate';

export class SampleServer implements LifecycleServerDelegate {
	public readonly lifecycle: LifecycleServer;

	constructor() {
		this.lifecycle = new LifecycleServer();
	}

	public async willInit(): Promise<boolean> {
		return true;
	}
	public async didInit(): Promise<boolean> {
		return true;
	}

	public async willLoad(): Promise<boolean> {
		return true;
	}

	public async didLoad(): Promise<boolean> {
		return true;
	}

	public async didStop(): Promise<boolean> {
		return true;
	}

	public async willBecomeReady(): Promise<boolean> {
		return true;
	}

	public async didBecomeReady(): Promise<boolean> {
		return true;
	}

	public async willStart(): Promise<boolean> {
		return true;
	}

	public async didStart(): Promise<boolean> {
		return true;
	}

	public async willStop(): Promise<boolean> {
		return true;
	}

	public async willShutdown(): Promise<boolean> {
		return true;
	}
}

export class SampleClient implements LifecycleClientDelegate {
	public readonly lifecycle: LifecycleClient;

	constructor() {
		this.lifecycle = new LifecycleClient();
	}
	public async didBecomeReady(): Promise<boolean> {
		return true;
	}

	public async didGainFocus(): Promise<boolean> {
		return true;
	}

	public async didInit(): Promise<boolean> {
		return true;
	}

	public async didLoad(): Promise<boolean> {
		return true;
	}

	public async didLoseFocus(): Promise<boolean> {
		return true;
	}

	public async didStart(): Promise<boolean> {
		return true;
	}

	public async didUnpause(): Promise<boolean> {
		return true;
	}

	public async onInit(): Promise<boolean> {
		return true;
	}

	public async onLoad(): Promise<boolean> {
		return true;
	}

	public async onMemoryWarning(): Promise<boolean> {
		return true;
	}

	public async onReady(): Promise<boolean> {
		return true;
	}

	public async onStart(): Promise<boolean> {
		return true;
	}

	public async willBecomeReady(): Promise<boolean> {
		return true;
	}

	public async willGainFocus(): Promise<boolean> {
		return true;
	}

	public async willInit(): Promise<boolean> {
		return true;
	}

	public async willLoad(): Promise<boolean> {
		return true;
	}

	public async willLoseFocus(): Promise<boolean> {
		return true;
	}

	public async willPause(): Promise<boolean> {
		return true;
	}

	public async willStart(): Promise<boolean> {
		return true;
	}

	public async willStop(): Promise<boolean> {
		return true;
	}
}

export const PHASES = [
	{name: 'didBecomeReady', listener: 'didBecomeReady'},
	{name: 'didConnect', listener: 'didConnect'},
	{name: 'didDisconnect', listener: 'didDisconnect'},
	{name: 'didFailConnect', listener: 'didFailConnect'},
	{name: 'didGainFocus', listener: 'didGainFocus'},
	{name: 'didInit', listener: 'didInit'},
	{name: 'didLoad', listener: 'didLoad'},
	{name: 'didLoseFocus', listener: 'didLoseFocus'},
	{name: 'didReconnect', listener: 'didReconnect'},
	{name: 'didStart', listener: 'didStart'},
	{name: 'didStop', listener: 'didStop'},
	{name: 'didUnpause', listener: 'didUnpause'},
	{name: 'memoryWarning', listener: 'onMemoryWarning'},
	{name: 'willBecomeReady', listener: 'willBecomeReady'},
	{name: 'willConnect', listener: 'willConnect'},
	{name: 'willDisconnect', listener: 'willDisconnect'},
	{name: 'willInit', listener: 'willInit'},
	{name: 'willLoad', listener: 'willLoad'},
	{name: 'willGainFocus', listener: 'willGainFocus'},
	{name: 'willLoseFocus', listener: 'willLoseFocus'},
	{name: 'willPause', listener: 'willPause'},
	{name: 'willReconnect', listener: 'willReconnect'},
	{name: 'willStart', listener: 'willStart'},
	{name: 'willStop', listener: 'willStop'}
];

export const ADDON_PHASES = [];

export const CLIENT_PHASES = [
	{name: 'didBecomeReady', listener: 'didBecomeReady'},
	{name: 'willLoseFocus', listener: 'willLoseFocus'},
	{name: 'didGainFocus', listener: 'didGainFocus'},
	{name: 'didLoseFocus', listener: 'didLoseFocus'},
	{name: 'willGainFocus', listener: 'willGainFocus'},
	{name: 'didLoad', listener: 'didLoad'},
	{name: 'didStart', listener: 'didStart'},
	{name: 'didUnpause', listener: 'didUnpause'},
	{name: 'memoryWarning', listener: 'onMemoryWarning'},
	{name: 'willBecomeReady', listener: 'willBecomeReady'},
	{name: 'willGainFocus', listener: 'willGainFocus'},
	{name: 'willLoseFocus', listener: 'willLoseFocus'},
	{name: 'willInit', listener: 'willInit'},
	{name: 'willLoad', listener: 'willLoad'},
	{name: 'willPause', listener: 'willPause'},
	{name: 'willStart', listener: 'willStart'},
	{name: 'willStop', listener: 'willStop'}
];

export const SERVER_PHASES = [
	{name: 'willInit', listener: 'willInit'},
	{name: 'didInit', listener: 'didInit'},
	{name: 'willLoad', listener: 'willLoad'},
	{name: 'didLoad', listener: 'didLoad'},
	{name: 'willStart', listener: 'willStart'},
	{name: 'didStart', listener: 'didStart'},
	{name: 'willBecomeReady', listener: 'willBecomeReady'},
	{name: 'didBecomeReady', listener: 'didBecomeReady'},
	{name: 'willStop', listener: 'willStop'},
	{name: 'didStop', listener: 'didStop'}
];
