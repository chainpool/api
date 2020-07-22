// Copyright 2017-2020 @chainx-v2/crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aToHex } from '@chainx-v2/util';

import toEntropy from './toEntropy';
import tests from '../schnorrkel/keypair/testing';
import { cryptoWaitReady } from '@chainx-v2/crypto';

describe('mnemonicToEntropy', (): void => {
  beforeEach(async (): Promise<void> => {
    await cryptoWaitReady();
  });

  tests.forEach(([mnemonic, entropy], index): void => {
    it(`Created correct entropy for ${index}`, (): void => {
      expect(u8aToHex(toEntropy(mnemonic))).toEqual(entropy);
    });
  });
});
