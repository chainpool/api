// eslint-disable-next-line header/header
import { WsProvider } from '@chainx-v2/rpc-provider';
// import Account from '@chainx-v2/account';
import ApiPromise from './promise';

class ChainX {
  private _provider : WsProvider;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private _api : Promise<ApiPromise>;

  // eslint-disable-next-line no-empty-pattern
  constructor (wsUrlOrProvider = 'ws://127.0.0.1:8087') {
    this._provider = new WsProvider(wsUrlOrProvider);
  }

  public getProvider () : WsProvider {
    return this._provider;
  }

  // eslint-disable-next-line no-empty-pattern
  public setProvider (wsUrlOrProvider = 'ws://127.0.0.1:8087') {
    this._provider = new WsProvider(wsUrlOrProvider);
  }

  public async ready () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this._api = await ApiPromise.create({ provider: this._provider });
  }

  public getApi () :Promise<ApiPromise> {
    return this._api;
  }
}

export default ChainX;
