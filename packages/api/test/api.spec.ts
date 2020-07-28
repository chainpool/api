// Copyright 2017-2020 @chainx-v2/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise, ChainX } from '@chainx-v2/api';
import * as process from 'process';

async function createApi (): Promise<ApiPromise> {
  jest.setTimeout(30000);
  process.env.NODE_ENV = 'test';

  // const provider = new WsProvider('wss://westend-rpc.polkadot.io/');
  // const provider = new WsProvider('ws://127.0.0.1:9944/');
  const chainx = new ChainX('ws://47.114.131.193:9000');

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  await chainx.ready();

  return chainx.getApi();
}

describe('misc quick tests', (): void => {
  it('retrieves balances correctly', async (): Promise<void> => {
    const api = await createApi();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const firstHead = await api.rpc.xstaking.getValidators();

    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    console.log('head is' + firstHead);

    console.log(JSON.stringify(
      await api.query.system.account('FPzukZw2mphWsXDqdkNzLaxnanjZEWH9i2vqwobTdtde5me')
    ));
    console.log(JSON.stringify(
      await api.query.system.account('HUewJvzVuEeyaxH2vx9XiyAPKrpu1Zj5r5Pi9VrGiBVty7q')
    ));
  });
});
