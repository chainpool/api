// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct } from '@chainx-v2/types/codec';
import { u64 } from '@chainx-v2/types/primitive';

/** @name RawAuraPreDigest */
export interface RawAuraPreDigest extends Struct {
  readonly slotNumber: u64;
}

export type PHANTOM_AURA = 'aura';
