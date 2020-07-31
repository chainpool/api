
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
  getValidators (...args: any[]):Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const getValidators = await api.rpc.xstaking.getValidators(...args);

        resolve(getValidators);
      });
    });
  }

  /**
   * Get overall information given the validator AccountId.
   * @params name: AccountId
   *
   * */
  getValidatorByAccount (...args: any[]):Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const getValidatorByAccount = await api.rpc.xstaking.getValidatorByAccount(...args);

        resolve(getValidatorByAccount);
      });
    });
  }

  /**
   * Get the staking dividends info given the staker AccountId.
   * @params name: AccountId
   * */
  getDividendByAccount (...args: any[]):Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const getDividendByAccount = await api.rpc.xstaking.getDividendByAccount(...args);

        resolve(getDividendByAccount);
      });
    });
  }

  /**
   * Get the nomination details given the staker AccountId.
   * @params name: AccountId  name: Hash
   * */
  getNominationByAccount (...args: any[]):Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return new Promise<any>((resolve) => {
      // eslint-disable-next-line no-void
      void this._api.then(async (api) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const getNominationByAccount = await api.rpc.xstaking.getNominationByAccount(...args);

        resolve(getNominationByAccount);
      });
    });
  }
}

export default XStaking;
