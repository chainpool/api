// Copyright 2017-2020 @chainx-v2/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Account } from '@chainx-v2/account';

describe('account tests', (): void => {
  it('retrieves', () => {
    const mnemonic = Account.newMnemonic();

    console.log('menonic' + mnemonic);
    const account = Account.fromMnemonic(mnemonic);

    console.log(account);
    Account.generate();
  });
});
