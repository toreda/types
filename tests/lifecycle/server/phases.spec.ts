import {LifecycleServerPhase} from '../../../src/lifecycle/server/phase';
import {lifecycleServerPhases} from '../../../src/lifecycle/server/phases';

const phases: LifecycleServerPhase[] = [
	'didBecomeReady',
	'didInit',
	'didLoad',
	'didStop',
	'didStart',
	'willBecomeReady',
	'willInit',
	'willLoad',
	'willShutdown',
	'willStart',
	'willStop'
];

const EMPTY_STRING = '';

describe('LifecycleServerPhases', () => {
	for (const phase of phases) {
		it(`should return true for server phase '${phase}'`, () => {
			expect(lifecycleServerPhases.has(phase)).toBe(true);
		});
	}

	it(`should return false for undefined`, () => {
		expect(lifecycleServerPhases.has(undefined as any)).toBe(false);
	});

	it(`should return false for null`, () => {
		expect(lifecycleServerPhases.has(null as any)).toBe(false);
	});

	it(`should return false for an empty string`, () => {
		expect(lifecycleServerPhases.has(EMPTY_STRING as any)).toBe(false);
	});

	it(`should return false for single character`, () => {
		expect(lifecycleServerPhases.has('a' as any)).toBe(false);
	});

	it(`should return false for non-phase string`, () => {
		expect(lifecycleServerPhases.has('aaaaaaaaa' as any)).toBe(false);
	});
});
