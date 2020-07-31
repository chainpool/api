
// eslint-disable-next-line header/header
import ChainX from './index';
import ApiPromise from '@chainx-v2/api/promise';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Asset {
  private _api: Promise<ApiPromise>;
  constructor (chainx: ChainX) {
    this._api = chainx.api;
  }

  getAssetsByAccount (...args: any[]):Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const assetsbyaccount = await api.rpc.getAssetsByAccount(...args);

        resolve(assetsbyaccount);
      });
    });
  }

  async getAssets (...args: any[]) :Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const assets = await this._api.rpc.xassets.getAssets(...args);

        resolve(assets);
      });
    });
  }
}

export default Asset;
