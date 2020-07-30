// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiPromise from './Api';
import WsProvider from "@chainx-v2/rpc-provider/ws";
import {encodeAddress} from '@chainx-v2/keyring';
import testKeyring, {PAIRS} from '@chainx-v2/keyring/testing';
// import {ISubmittableResult} from "@chainx-v2/types/types";

console.log(encodeAddress)
console.log(ApiPromise);

describe('ApiPromise', (): void => {
  let provider: WsProvider;
  let api: any;
  let keyring: any;
  let alice: any;

  beforeEach((): void => {
    jest.setTimeout(300000000000000);
    provider = new WsProvider('ws://47.114.131.193:9000');

    keyring = testKeyring()
    alice = keyring.pairs[0]
  });

  // @ts-ignore
  async function transferFromAliceToBob() {
    const bobAddr = encodeAddress(PAIRS[1].publicKey)
    let extrinsic = await api.tx.xAssets.transfer(bobAddr, 0, 1000, 'alice to bob')
    extrinsic = extrinsic.sign(alice)

    console.log(extrinsic)
  }

  // @ts-ignore
  async function aliceStake(validators) {
    let extrinsic = await api.tx.xStaking.bond(validators[0].account, 1000, 'stake')
    const result = await extrinsic.signAndSend(alice)
    console.log(result)
  }

  it('should ', async function () {
    api = await ApiPromise.create({provider});
    console.log(api);

    // @ts-ignore
    const assets = await api.rpc.xassets.getAssets();
    console.log(assets.toJSON());

    // @ts-ignore
    const validators = await api.rpc.xstaking.getValidators()
    console.log(validators.toJSON())

    const aliceAddr = encodeAddress(PAIRS[0].publicKey)
    console.log(aliceAddr)

    const balance = await api.query.xAssets.assetBalance(aliceAddr, 0)
    console.log(balance)

    // await transferFromAliceToBob()
    await aliceStake(validators.toJSON())

    expect(1).toEqual(1)
  });
});
