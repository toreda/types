import {LifecycleServer} from '../../../src/lifecycle/server';
import type {LifecycleServerDelegate} from '../../../src/lifecycle/server/delegate';
import {lifecyclePhase} from '../../../src/lifecycle/phase';

export class SampleServer implements LifecycleServerDelegate {
	public readonly children: LifecycleServerDelegate[];
	public readonly lifecycle: LifecycleServer;
	[k: string]: unknown;

	constructor() {
		this.lifecycle = new LifecycleServer();
		this.children = [];
	}

	public async willInit(): Promise<boolean> {
		return lifecyclePhase(this, 'willInit');
	}

	public async didInit(): Promise<boolean> {
		return lifecyclePhase(this, 'didInit');
	}

	public async willLoad(): Promise<boolean> {
		return lifecyclePhase(this, 'willLoad');
	}

	public async didLoad(): Promise<boolean> {
		return lifecyclePhase(this, 'didLoad');
	}

	public async willStart(): Promise<boolean> {
		return lifecyclePhase(this, 'willStart');
	}

	public async didStart(): Promise<boolean> {
		return lifecyclePhase(this, 'didStart');
	}

	public async willBecomeReady(): Promise<boolean> {
		return lifecyclePhase(this, 'willBecomeReady');
	}

	public async didBecomeReady(): Promise<boolean> {
		return lifecyclePhase(this, 'didBecomeReady');
	}

	public async willStop(): Promise<boolean> {
		return lifecyclePhase(this, 'willStop');
	}

	public async didStop(): Promise<boolean> {
		return lifecyclePhase(this, 'didStop');
	}

	public async willShutdown(): Promise<boolean> {
		return lifecyclePhase(this, 'willShutdown');
	}

	public async cnxDidReconnect(): Promise<boolean> {
		return lifecyclePhase(this, 'cnxDidReconnect');
	}

	public async cnxWillDisconnect(): Promise<boolean> {
		return lifecyclePhase(this, 'cnxWillDisconnect');
	}

	public reset(): void {
		this.lifecycle.willInit = false;
		this.lifecycle.didInit = false;
		this.lifecycle.willLoad = false;
		this.lifecycle.didLoad = false;
		this.lifecycle.didStart = false;
		this.lifecycle.willStart = false;
		this.lifecycle.willStop = false;
		this.lifecycle.didStop = false;
		this.lifecycle.willShutdown = false;
	}
}
