// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@chainx-v2/types/types';
import { Enum, Option } from '@chainx-v2/types/codec';
import { AccountId, BlockNumber, Hash } from '@chainx-v2/types/interfaces/runtime';

/** @name UncleEntryItem */
export interface UncleEntryItem extends Enum {
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: BlockNumber;
  readonly isUncle: boolean;
  readonly asUncle: ITuple<[Hash, Option<AccountId>]>;
}

export type PHANTOM_AUTHORSHIP = 'authorship';
