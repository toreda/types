import {Runnable} from '../src/runnable';

const ID = 'aaa-9174197-197141';
const runTask = (a: string): boolean => {
	if (a === 'a') {
		return false;
	}

	return true;
};

describe('Runnable', () => {
	describe('Constructor', () => {
		it(`should throw when id arg is undefined`, () => {
			expect(() => {
				const custom = new Runnable<string, boolean>(undefined as any, runTask);
			}).toThrow('runnable:id:missing');
		});

		it(`should throw when id arg is null`, () => {
			expect(() => {
				const custom = new Runnable<string, boolean>(null as any, runTask);
			}).toThrow('runnable:id:missing');
		});

		it(`should throw when id arg is a truthy non-string`, () => {
			expect(() => {
				const custom = new Runnable<string, boolean>(1111 as any, runTask);
			}).toThrow('runnable:id:bad_format');

			expect(() => {
				const custom = new Runnable<string, boolean>(['a'] as any, runTask);
			}).toThrow('runnable:id:bad_format');

			expect(() => {
				const custom = new Runnable<string, boolean>({} as any, runTask);
			}).toThrow('runnable:id:bad_format');
		});

		it(`should succeed and set internal id when id arg is a string`, () => {
			const value = 'aaa-9714144-1486464';
			const custom = new Runnable<string, boolean>(value, runTask);

			expect(custom.id).toBe(value);
		});

		it(`should throw when task arg is undefined`, () => {
			expect(() => {
				const custom = new Runnable<string, boolean>(ID, undefined as any);
			}).toThrow('runnable:task:missing');
		});

		it(`should throw when task arg is null`, () => {
			expect(() => {
				const custom = new Runnable<string, boolean>(ID, null as any);
			}).toThrow('runnable:task:missing');
		});

		it(`should throw when task arg is a truthy non-function`, () => {
			expect(() => {
				const custom = new Runnable<string, boolean>(ID, {} as any);
			}).toThrow('runnable:task:bad_format');

			expect(() => {
				const custom = new Runnable<string, boolean>(ID, 'aaaa' as any);
			}).toThrow('runnable:task:bad_format');

			expect(() => {
				const custom = new Runnable<string, boolean>(ID, 11111 as any);
			}).toThrow('runnable:task:bad_format');
		});

		it(`should succeed and set outcome flags accordingly when task completes`, async () => {
			const value = '1117-197614-1947149714';
			const fn = jest.fn();
			fn.mockImplementation(async () => {
				return value;
			});

			const custom = new Runnable<string, boolean>(ID, fn as any);
			expect(fn).not.toHaveBeenCalled();

			const outcome = await custom.run('aaaa');
			expect(outcome.execution.complete).toBe(true);
			expect(outcome.execution.errors.length).toBe(0);
			expect(outcome.execution.exception).toBe(false);
			expect(outcome.returnValue).toBe(value);
			expect(fn).toHaveBeenCalledTimes(1);
		});

		it(`should fail and set outcome flags accordingly when task throws,`, async () => {
			const fn = jest.fn();
			fn.mockImplementation(async () => {
				throw new Error('aaaaaa');
			});

			const custom = new Runnable<string, boolean>(ID, fn);
			const outcome = await custom.run('aaaaa');

			expect(outcome.execution.complete).toBe(false);
			expect(outcome.execution.exception).toBe(true);
			expect(outcome.execution.errors.length).toBeGreaterThan(0);
			expect(outcome.returnValue).toBeNull();
		});
	});
});
