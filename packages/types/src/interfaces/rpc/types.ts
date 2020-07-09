// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct, Vec } from '@chainx-v2/types/codec';
import { Text, u32 } from '@chainx-v2/types/primitive';

/** @name RpcMethods */
export interface RpcMethods extends Struct {
  readonly version: u32;
  readonly methods: Vec<Text>;
}

export type PHANTOM_RPC = 'rpc';
