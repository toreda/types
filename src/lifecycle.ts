import {Defaults} from './defaults';

/**
 * @category Lifecycle
 */
export class Lifecycle<PhaseT extends string> extends Map<PhaseT, boolean> {
	constructor(phases?: PhaseT[]) {
		super();

		this.init(phases);
	}

	private init(phases?: PhaseT[]): void {
		if (!Array.isArray(phases)) {
			return;
		}

		for (const phase of phases) {
			this.set(phase, Defaults.LifecyclePhase.Status);
		}
	}

	public execute(phase: PhaseT): boolean {
		if (!this.has(phase)) {
			return false;
		}

		const hasExecuted = this.get(phase);
		if (hasExecuted !== true) {
			return false;
		}

		this.set(phase, true);

		return true;
	}

	public reset(): void {
		for (const phase of this.keys()) {
			this.set(phase, Defaults.LifecyclePhase.Status);
		}
	}
}
