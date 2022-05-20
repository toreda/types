/**
 * @category Lifecycle - Network Connections
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
	public cnxWillReconnect: boolean;
	public cnxDidReconnect: boolean;
	public cnxWillInit: boolean;
	public cnxDidInit: boolean;
	public cnxWillLoad: boolean;
	public cnxDidLoad: boolean;

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
		this.cnxWillReconnect = false;
		this.cnxDidReconnect = false;
		this.cnxWillInit = false;
		this.cnxDidInit = false;
		this.cnxWillLoad = false;
		this.cnxDidLoad = false;
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
		this.cnxWillReconnect = false;
		this.cnxDidReconnect = false;
		this.cnxWillInit = false;
		this.cnxDidInit = false;
		this.cnxWillLoad = false;
		this.cnxDidLoad = false;
	}
}
