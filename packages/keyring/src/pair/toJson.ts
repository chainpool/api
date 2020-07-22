// Copyright 2017-2020 @chainx-v2/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeypairType } from '@chainx-v2/crypto/types';
import { KeyringPair$Json, KeyringPair$Meta } from '../types';

import { u8aToHex } from '@chainx-v2/util';

interface PairStateJson {
  address: string;
  meta: KeyringPair$Meta;
}

export default function toJson (type: KeypairType, { address, meta }: PairStateJson, encoded: Uint8Array, isEncrypted: boolean): KeyringPair$Json {
  return {
    address,
    encoded: u8aToHex(encoded),
    encoding: {
      content: ['pkcs8', type],
      type: isEncrypted
        ? 'xsalsa20-poly1305'
        : 'none',
      version: '2'
    },
    meta
  };
}
