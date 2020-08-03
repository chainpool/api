
// eslint-disable-next-line header/header
import ChainX from './index';
import ApiPromise from '@chainx-v2/api/promise';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GateWayCommon {
  private _api: Promise<ApiPromise>;

  constructor (chainx: ChainX) {
    this._api = chainx.api;
  }

  /**
   * query withdraw limit
   * */
  async withdrawalLimit (...args: any[]):Promise<any> {
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        const withdrawLimits = await api.rpc.xgatewaycommon.withdrawalLimit(...args);

        resolve(withdrawLimits);
      });
    });
  }

  verifyWithdrawal (...args: any[]) : Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        const veryfy = await api.rpc.xgatewaycommon.verifyWithdrawal(...args);

        resolve(veryfy);
      });
    });
  }

  trusteeMultisigs (...args: any[]):Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        const trusteeMultisigs = await api.rpc.xgatewaycommon.trusteeMultisigs(...args);

        resolve(trusteeMultisigs);
      });
    });
  }

  bitcoinTrusteeProperties (...args: any[]):Promise<any> {
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const trusteeProperties = await api.rpc.bitcoinTrusteeProperties(...args);

        resolve(trusteeProperties);
      });
    });
  }

  bitcoinTrusteeSessionInfo (...args: any[]): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const bitcoinTrusteeSessionInfo = await api.rpc.bitcoinTrusteeSessionInfo(...args);

        resolve(bitcoinTrusteeSessionInfo);
      });
    });
  }

  bitcoinGenerateTrusteeSessionInfo (...args: any[]):Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const bitcoinGenerateTrusteeSessionInfo = await api.rpc.bitcoinGenerateTrusteeSessionInfo(...args);

        resolve(bitcoinGenerateTrusteeSessionInfo);
      });
    });
  }
}

export default GateWayCommon;
