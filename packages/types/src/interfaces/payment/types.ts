// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct } from '@chainx-v2/types/codec';
import { Balance, Weight } from '@chainx-v2/types/interfaces/runtime';
import { DispatchClass } from '@chainx-v2/types/interfaces/system';

/** @name RuntimeDispatchInfo */
export interface RuntimeDispatchInfo extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
  readonly partialFee: Balance;
}

export type PHANTOM_PAYMENT = 'payment';
