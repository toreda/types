/**
 * @category Lifecycle
 */
export class LifecycleNetworkCnx {
	public cnxDidStartConnect: boolean;
	public cnxWillStartConnect: boolean;
	public cnxWillStopConnect: boolean;
	public cnxDidStopConnect: boolean;
	public cnxDidFailConnect: boolean;
	public cnxDidHandshake: boolean;
	public cnxDidFailHandshake: boolean;
	public cnxWillHandshake: boolean;
	public cnxWillOpen: boolean;
	public cnxDidOpen: boolean;
	public cnxDidConnect: boolean;

	constructor() {
		this.cnxDidStartConnect = false;
		this.cnxWillStartConnect = false;
		this.cnxWillStopConnect = false;
		this.cnxDidStopConnect = false;
		this.cnxDidFailConnect = false;
		this.cnxWillHandshake = false;
		this.cnxDidHandshake = false;
		this.cnxDidFailHandshake = false;
		this.cnxWillOpen = false;
		this.cnxDidOpen = false;
		this.cnxDidConnect = false;
	}

	public reset(): void {
		this.cnxDidStartConnect = false;
		this.cnxWillStartConnect = false;
		this.cnxWillStopConnect = false;
		this.cnxDidStopConnect = false;
		this.cnxDidFailConnect = false;
		this.cnxWillHandshake = false;
		this.cnxWillOpen = false;
		this.cnxDidOpen = false;
		this.cnxDidConnect = false;
		this.cnxDidHandshake = false;
		this.cnxDidFailHandshake = false;
	}
}
