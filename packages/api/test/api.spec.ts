// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise, WsProvider } from '@polkadot/api';

function createApi (): Promise<ApiPromise> {
  jest.setTimeout(3000);
  process.env.NODE_ENV = 'test';

  const provider = new WsProvider('ws://47.114.131.193:9000');
  // const provider = new WsProvider('wss://westend-rpc.polkadot.io/');
  // const provider = new WsProvider('ws://127.0.0.1:9944/');
  console.log('开始测试.....');

  return new ApiPromise({ provider }).isReady;
}



describe('misc quick tests', (): void => {
  it('retrieves balances correctly', async (): Promise<void> => {
    const api = await createApi();

    console.log('创建api.....');

  });

});
