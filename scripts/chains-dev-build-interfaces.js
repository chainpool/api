#!/usr/bin/env node
// Copyright 2017-2020 @chainx-v2/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable @typescript-eslint/no-var-requires */

let main;

try {
  main = require('../interfacesTs').default;
} catch (error) {
  require('@babel/register')({
    extensions: ['.js', '.ts'],
    plugins: [
      ['module-resolver', {
        alias: {
          '^@chainx-v2/metadata(.*)': './packages/metadata/src\\1',
          '^@chainx-v2/types-known(.*)': './packages/types-known/src\\1',
          // eslint-disable-next-line sort-keys
          '^@chainx-v2/types(.*)': './packages/types/src\\1',
          '^@chainx-v2/util(.*)': './packages/util/src\\1',
          // eslint-disable-next-line sort-keys
          '^@chainx-v2/keyring(.*)': './packages/keyring/src\\1',
          '^@chainx-v2/util-crypto(.*)': './packages/util-crypto/src\\1'
        }
      }]
    ]
  });

  main = require('../packages/typegen/src/interfacesTs.ts').default;
}

main();
