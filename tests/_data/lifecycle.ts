import {LifecycleClient} from '../../src/lifecycle/client';
import type {LifecycleClientDelegate} from '../../src/lifecycle/client/delegate';
import {LifecycleClientPhase} from '../../src/lifecycle/client/phase';
import {LifecycleServer} from '../../src/lifecycle/server';
import type {LifecycleServerDelegate} from '../../src/lifecycle/server/delegate';
import {LifecycleServerPhase} from '../../src/lifecycle/server/phase';

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

export const ADDON_PHASES = [];

export const CLIENT_PHASES: {
	name: string;
	listener: LifecycleClientPhase;
}[] = [
	{name: 'didBecomeReady', listener: 'didBecomeReady'},
	{name: 'willLoseFocus', listener: 'willLoseFocus'},
	{name: 'didGainFocus', listener: 'didGainFocus'},
	{name: 'didLoseFocus', listener: 'didLoseFocus'},
	{name: 'willGainFocus', listener: 'willGainFocus'},
	{name: 'didLoad', listener: 'didLoad'},
	{name: 'didStart', listener: 'didStart'},
	{name: 'didUnpause', listener: 'didUnpause'},
	{name: 'memoryWarning', listener: 'memoryWarning'},
	{name: 'willBecomeReady', listener: 'willBecomeReady'},
	{name: 'willGainFocus', listener: 'willGainFocus'},
	{name: 'willLoseFocus', listener: 'willLoseFocus'},
	{name: 'willInit', listener: 'willInit'},
	{name: 'willLoad', listener: 'willLoad'},
	{name: 'willPause', listener: 'willPause'},
	{name: 'willStart', listener: 'willStart'},
	{name: 'willStop', listener: 'willStop'}
];

export const SERVER_PHASES: {
	name: string;
	listener: LifecycleServerPhase;
}[] = [
	{name: 'didBecomeReady', listener: 'didBecomeReady'},
	{name: 'didInit', listener: 'didInit'},
	{name: 'didLoad', listener: 'didLoad'},
	{name: 'didStart', listener: 'didStart'},
	{name: 'didStop', listener: 'didStop'},
	{name: 'didRestart', listener: 'didRestart'},
	{name: 'didShutdown', listener: 'didShutdown'},
	{name: 'didStart', listener: 'didStart'},
	{name: 'onInit', listener: 'onInit'},
	{name: 'onLoad', listener: 'onLoad'},
	{name: 'onReady', listener: 'onReady'},
	{name: 'onRestart', listener: 'onRestart'},
	{name: 'onShutdown', listener: 'onShutdown'},
	{name: 'onStart', listener: 'onStart'},
	{name: 'onStop', listener: 'onStop'},
	{name: 'willBecomeReady', listener: 'willBecomeReady'},
	{name: 'willInit', listener: 'willInit'},
	{name: 'willLoad', listener: 'willLoad'},
	{name: 'willRestart', listener: 'willRestart'},
	{name: 'willShutdown', listener: 'willShutdown'},
	{name: 'willStart', listener: 'willStart'},
	{name: 'willStop', listener: 'willStop'}
];

export const PHASES = [...SERVER_PHASES, ...CLIENT_PHASES];
