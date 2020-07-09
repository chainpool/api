// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct, Vec } from '@chainx-v2/types/codec';
import { u32 } from '@chainx-v2/types/primitive';
import { AccountId, Balance, BlockNumber, H256 } from '@chainx-v2/types/interfaces/runtime';

/** @name CallHash */
export interface CallHash extends H256 {}

/** @name Multisig */
export interface Multisig extends Struct {
  readonly when: Timepoint;
  readonly deposit: Balance;
  readonly depositor: AccountId;
  readonly approvals: Vec<AccountId>;
}

/** @name Timepoint */
export interface Timepoint extends Struct {
  readonly height: BlockNumber;
  readonly index: u32;
}

export type PHANTOM_UTILITY = 'utility';
