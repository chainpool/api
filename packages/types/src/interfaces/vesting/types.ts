// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct } from '@chainx-v2/types/codec';
import { Balance, BlockNumber } from '@chainx-v2/types/interfaces/runtime';

/** @name VestingInfo */
export interface VestingInfo extends Struct {
  readonly locked: Balance;
  readonly perBlock: Balance;
  readonly startingBlock: BlockNumber;
}

export type PHANTOM_VESTING = 'vesting';
