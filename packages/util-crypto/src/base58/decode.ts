// Copyright 2017-2020 @chainx-v2/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { bufferToU8a } from '@chainx-v2/util';

import { bs58 } from './bs58';
import validate from './validate';

/**
 * @name base58Decode
 * @summary Decodes a base58 value.
 * @description
 * From the provided input, decode the base58 and return the result as an `Uint8Array`.
 */
export default function base58Decode (value: string): Uint8Array {
  validate(value);

  return bufferToU8a(bs58.decode(value));
}
