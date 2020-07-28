// eslint-disable-next-line header/header
import { WsProvider } from '@chainx-v2/rpc-provider';
// import Account from '@chainx-v2/account';
import ApiPromise from '../promise';
import Slake from './XStaking';
import Asset from './Asset';
import GateWayCommon from './GateWayCommon';

class ChainX {
  private _provider: WsProvider;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private _api: Promise<ApiPromise>;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private _stake:Slake;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private _asset:Asset;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private _gatewaycommon:GateWayCommon;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment

  // eslint-disable-next-line no-empty-pattern
  constructor (wsUrlOrProvider = 'ws://127.0.0.1:8087') {
    this._provider = new WsProvider(wsUrlOrProvider);
  }

  public getProvider (): WsProvider {
    return this._provider;
  }

  // eslint-disable-next-line no-empty-pattern
  public setProvider (wsUrlOrProvider = 'ws://127.0.0.1:8087') {
    this._provider = new WsProvider(wsUrlOrProvider);
  }

  public async ready () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    this._api = await ApiPromise.create({ provider: this._provider });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
    this._stake = new Slake(this);
    this._asset = new Asset(this);
    this._gatewaycommon = new GateWayCommon(this);
  }

  get account (): Account {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Account;
  }

  get asset (): Asset {
    return this._asset;
  }

  get gatewaycommon (): GateWayCommon {
    return this._gatewaycommon;
  }

  get slake (): Slake {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this._stake;
  }

  public getApi (): Promise<ApiPromise> {
    return this._api;
  }
}

export default ChainX;
