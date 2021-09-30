/**
 * Wrapper for Fate data to provide a consistent interface
 * for responses containing multiple records.
 */
export interface Records<T> {
	records: T[];
	recordCount: number;
}
