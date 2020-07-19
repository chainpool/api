// Copyright 2017-2020 @chainx-v2/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Account } from '@chainx-v2/account';

describe('account tests', (): void => {
  it('retrieves', () => {
    const account1 = Account.generate();

    const publicKey1 = account1.publicKey(); // 公钥

    console.log('publicKey1: ', publicKey1);

    const privateKey1 = account1.privateKey(); // 私钥

    console.log('privateKey1: ', privateKey1);

    const address1 = account1.address(); // 地址

    console.log('address1: ', address1);

    const mnemonic = Account.newMnemonic(); // 随机助记词

    console.log('mnemonic: ', mnemonic);

    const account2 = Account.from(mnemonic); // 从助记词生成账户

    const address2 = Account.encodeAddress(account2.publicKey()); // 从公钥生成地址

    console.log('address2: ', address2);

    const publicKey2 = Account.decodeAddress(address2); // 从地址获取生成公钥

    console.log('publicKey2: ', publicKey2);

    Account.setNet(42); // 设置为测试网
    const address3 = Account.encodeAddress(publicKey2); // 测试网地址

    console.log('address3:', address3);

    Account.setNet(44); // 设置为主网
    const address4 = Account.encodeAddress(publicKey2); // 主网地址

    console.log('address4:', address4);

    const account3 = Account.from(privateKey1); // 从私钥生成账户

    console.log('address:', account3.address()); // 地址
  });
});
