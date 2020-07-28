// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiPromise from './Api';
import WsProvider from "@chainx-v2/rpc-provider/ws";

console.log(ApiPromise);

describe('ApiPromise', (): void => {
  let provider: WsProvider;

  beforeEach((): void => {
    jest.setTimeout(300000000000000);
    provider = new WsProvider('ws://47.114.131.193:9000');
    console.log(provider);
  });


  it('should ', async function () {
    const api = await ApiPromise.create({provider});
    console.log(api);

    // @ts-ignore
    const assets = await api.rpc.xassets.getAssets();
    console.log(assets.toJSON());

    // @ts-ignore
    const validators = await api.rpc.xstaking.getValidators()
    console.log(validators.toJSON())

    expect(1).toEqual(1)
  });
});
