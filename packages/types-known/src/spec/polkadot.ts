// Copyright 2017-2020 @chainx-v2/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@chainx-v2/types/types';

// these are override types for Polkadot
const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 3],
    types: {
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId'
    }
  },
  {
    minmax: [4, undefined],
    types: {
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId',
      ProxyType: {
        _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'SudoBalances']
      }
    }
  }
];

export default versioned;
