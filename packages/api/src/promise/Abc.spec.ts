// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiPromise from './Api';
import WsProvider from "@chainx-v2/rpc-provider/ws";
import {encodeAddress} from '@chainx-v2/keyring';
import testKeyring, {PAIRS} from '@chainx-v2/keyring/testing';
import {ISubmittableResult} from "@chainx-v2/types/types";

const {GenericExtrinsicV4} = require('@chainx-v2/types');
import {u8aToHex} from '@chainx-v2/util'

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
    let extrinsic = await api.tx.balances.transfer('5Gsz44HKdTXnwiLH47GmZKr2hw5qmaBe2nMKK1sJSKmYRYxh',
      1000 * Math.pow(10, 8))
    let id = 0
    await new Promise(async resolve => {
      const unsub = await extrinsic.signAndSend(alice, (result: ISubmittableResult) => {
        console.log(`Current status is ${result.status}`);
        id++

        if (result.status.isInBlock) {
          console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
        } else if (result.status.isFinalized) {
          console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
          unsub();
        }

        if (id > 2) {
          resolve()
        }
      })
    })
  }

// @ts-ignore
  async function query() {
    // const assets = await api.rpc.xassets.getAssets();
    // console.log(assets.toJSON());
    //
    // // @ts-ignore
    // const validators = await api.rpc.xstaking.getValidators()
    // console.log(validators.toJSON())

    const aliceAddr = encodeAddress(PAIRS[0].publicKey)
    console.log(aliceAddr)

    // const balance = await api.query.xAssets.assetBalance(aliceAddr, 0)
    const balance = await api.query.system.account(aliceAddr)
    console.log(balance)
  }

  // @ts-ignore
  async function testEx() {
    let extrinsic = await api.tx.balances.transfer('5Gsz44HKdTXnwiLH47GmZKr2hw5qmaBe2nMKK1sJSKmYRYxh',
      1000 * Math.pow(10, 8))

    const hex = extrinsic.toHex()

    try {
      // const newEx = new GenericExtrinsicV4(api.registry, hexToU8a(hex))
      const newEx = new GenericExtrinsicV4(api.registry, extrinsic)
      console.log(newEx)
    } catch (e) {
      console.log(e)
    }

    console.log(hex)
  }

  // @ts-ignore
  async function aliceStake(validators) {
    let extrinsic = await api.tx.xStaking.bond(validators[0].account, 1000, 'stake')
    const result = await extrinsic.signAndSend(alice)
    console.log(result)
  }

  // @ts-ignore
  async function transferTxHash() {
    let extrinsic = await api.tx.balances.transfer('5Gsz44HKdTXnwiLH47GmZKr2hw5qmaBe2nMKK1sJSKmYRYxh',
      1000 * Math.pow(10, 8))

    const signedBlock = await api.rpc.chain.getBlock();
    const blockHash = signedBlock.block.header.hash;
    const {nonce} = await api.query.system.account(alice.address);

    const expectHash = extrinsic.sign(alice, {blockHash, nonce})
    console.log('expectHash', expectHash)

    const hash = await extrinsic.signAndSend(alice, {blockHash, nonce})
    console.log('hash:', u8aToHex(hash))
  }

  it('should ', async function () {
    // @ts-ignore
    api = await ApiPromise.create({provider});

    await transferTxHash()
    // await testEx()
    // await query();
    // await transferFromAliceToBob();

    // await aliceStake(validators.toJSON())

    expect(1).toEqual(1)
  });
});
