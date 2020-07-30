
// eslint-disable-next-line header/header
import ChainX from './index';
import ApiPromise from '@chainx-v2/api/promise';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GateWayCommon {
  private _api: Promise<ApiPromise>;

  constructor (chainx: ChainX) {
    this._api = chainx.getApi();
  }

  /**
   * query withdraw limit
   * */
  withdrawalLimit (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return this._api.rpc.xgatewaycommon.withdrawalLimit(...args);
  }

  verifyWithdrawal (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return this._api.rpc.xgatewaycommon.verifyWithdrawal(...args);
  }

  trusteeMultisigs (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return this._api.rpc.xgatewaycommon.trusteeMultisigs(...args);
  }

  bitcoinTrusteeProperties (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return this._api.rpc.xgatewaycommon.bitcoinTrusteeProperties(...args);
  }

  bitcoinTrusteeSessionInfo (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return this._api.rpc.xgatewaycommon.bitcoinTrusteeSessionInfo(...args);
  }

  bitcoinGenerateTrusteeSessionInfo (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return this._api.rpc.xgatewaycommon.bitcoinGenerateTrusteeSessionInfo(...args);
  }
}

export default GateWayCommon;
