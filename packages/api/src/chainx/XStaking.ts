
// eslint-disable-next-line header/header
import ChainX from './index';
import ApiPromise from '@chainx-v2/api/promise';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class XStaking {
  private _api: Promise<ApiPromise>;
  constructor (chainx: ChainX) {
    this._api = chainx.api;
  }

  /**
   * Get overall information about all potential validators
   * @params name: AccountId
   *
   * */
  getValidators (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return this._api.rpc.xstaking.getValidators(...args);
  }

  /**
   * Get overall information given the validator AccountId.
   * @params name: AccountId
   *
   * */
  getValidatorByAccount (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return this._api.rpc.xstaking.getValidatorByAccount(...args);
  }

  /**
   * Get the staking dividends info given the staker AccountId.
   * @params name: AccountId
   * */
  getDividendByAccount (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return this._api.rpc.xstaking.getDividendByAccount(...args);
  }

  /**
   * Get the nomination details given the staker AccountId.
   * @params name: AccountId  name: Hash
   * */
  getNominationByAccount (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return this._api.rpc.xstaking.getNominationByAccount(...args);
  }
}

export default XStaking;
