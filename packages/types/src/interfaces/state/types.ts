// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@chainx-v2/types/types';
import { Option, Struct, U8aFixed, Vec } from '@chainx-v2/types/codec';
import { Bytes, StorageKey, Text, u32 } from '@chainx-v2/types/primitive';
import { Hash, StorageData } from '@chainx-v2/types/interfaces/runtime';

/** @name ApiId */
export interface ApiId extends U8aFixed {}

/** @name KeyValueOption */
export interface KeyValueOption extends ITuple<[StorageKey, Option<StorageData>]> {}

/** @name ReadProof */
export interface ReadProof extends Struct {
  readonly at: Hash;
  readonly proof: Vec<Bytes>;
}

/** @name RuntimeVersion */
export interface RuntimeVersion extends Struct {
  readonly specName: Text;
  readonly implName: Text;
  readonly authoringVersion: u32;
  readonly specVersion: u32;
  readonly implVersion: u32;
  readonly apis: Vec<RuntimeVersionApi>;
  readonly transactionVersion: u32;
}

/** @name RuntimeVersionApi */
export interface RuntimeVersionApi extends ITuple<[ApiId, u32]> {}

/** @name StorageChangeSet */
export interface StorageChangeSet extends Struct {
  readonly block: Hash;
  readonly changes: Vec<KeyValueOption>;
}

export type PHANTOM_STATE = 'state';
