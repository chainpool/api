
// eslint-disable-next-line header/header
import ChainX from './index';
import ApiPromise from '@chainx-v2/api/promise';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Asset {
  private _api: Promise<ApiPromise>;
  constructor (chainx: ChainX) {
    this._api = chainx.api;
  }

  systemPeers () : Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        const peers = await api.rpc.xassets.getAssets(...args);

        resolve(peers);
      });
    });
  }

  systemHealth (): Promise<any> {
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const health = await api.rpc.system.health();

        resolve(health);
      });
    });
  }
}

export default Asset;
