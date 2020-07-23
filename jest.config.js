// Copyright 2017-2020 @chainx-v2/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@chainx-v2/api-contract(.*)$': '<rootDir>/packages/api-contract/src/$1',
    '@chainx-v2/api-derive(.*)$': '<rootDir>/packages/api-derive/src/$1',
    // eslint-disable-next-line sort-keys
    '@chainx-v2/api(.*)$': '<rootDir>/packages/api/src/$1',
    '@chainx-v2/metadata(.*)$': '<rootDir>/packages/metadata/src/$1',
    '@chainx-v2/rpc-(core|provider)(.*)$': '<rootDir>/packages/rpc-$1/src/$2',
    '@chainx-v2/types-known(.*)$': '<rootDir>/packages/types-known/src/$1',
    // eslint-disable-next-line sort-keys
    '@chainx-v2/types(.*)$': '<rootDir>/packages/types/src/$1',
    // eslint-disable-next-line sort-keys
    '@chainx-v2/account(.*)$': '<rootDir>/packages/account/src/$1',
    '@chainx-v2/keyring(.*)$': '<rootDir>/packages/keyring/src/$1',
    // eslint-disable-next-line sort-keys
    '@chainx-v2/util(.*)$': '<rootDir>/packages/util/src/$1',
    // eslint-disable-next-line sort-keys
    '@chainx-v2/crypto(.*)$': '<rootDir>/packages/crypto/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/api/build',
    '<rootDir>/packages/api-derive/build',
    '<rootDir>/packages/api-contract/build',
    '<rootDir>/packages/metadata/build',
    '<rootDir>/packages/rpc-core/build',
    '<rootDir>/packages/rpc-provider/build',
    '<rootDir>/packages/types/build',
    '<rootDir>/packages/types-known/build',
    '<rootDir>/packages/keyring/build',
    '<rootDir>/packages/util/build',
    '<rootDir>/packages/crypto/build'
  ],
  resolver: './jest.resolver.js'
});
