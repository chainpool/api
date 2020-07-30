// Copyright 2017-2020 @chainx-v2/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise, ChainX } from '@chainx-v2/api';
import * as process from 'process';
import WsProvider from '@chainx-v2/rpc-provider/ws';
import testKeyring, { PAIRS } from '@chainx-v2/keyring/testing';
import { encodeAddress } from '@chainx-v2/crypto';

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

describe('Transfer Test', (): void => {
  let provider: WsProvider;
  let api: any;
  let keyring: any;
  let alice: any;

  beforeEach((): void => {
    jest.setTimeout(300000000000000);
    provider = new WsProvider('ws://47.114.131.193:9000');

    keyring = testKeyring();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    alice = keyring.pairs[0];
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async function transferFromAliceToBob () {
    const bobAddr = encodeAddress(PAIRS[1].publicKey);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    let extrinsic = await api.tx.xAssets.transfer(bobAddr, 0, 1000, 'alice to bob');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    extrinsic = extrinsic.sign(alice);

    console.log(extrinsic);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async function aliceStake (validators) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const extrinsic = await api.tx.xStaking.bond(validators[0].account, 1000, 'stake');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const result = await extrinsic.signAndSend(alice);

    console.log(result);
  }

  it('should ', async function () {
    api = await ApiPromise.create({ provider });
    console.log(api);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const assets = await api.rpc.xassets.getAssets();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    console.log(assets.toJSON());

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const validators = await api.rpc.xstaking.getValidators();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    console.log(validators.toJSON());

    const aliceAddr = encodeAddress(PAIRS[0].publicKey);

    console.log(aliceAddr);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const balance = await api.query.xAssets.assetBalance(aliceAddr, 0);

    console.log(balance);

    // await transferFromAliceToBob()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await aliceStake(validators.toJSON());

    expect(1).toEqual(1);
  });
});
