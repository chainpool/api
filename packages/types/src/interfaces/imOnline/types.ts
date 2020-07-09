// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct, Vec } from '@chainx-v2/types/codec';
import { Bytes, u32 } from '@chainx-v2/types/primitive';
import { Signature } from '@chainx-v2/types/interfaces/extrinsics';
import { BlockNumber } from '@chainx-v2/types/interfaces/runtime';
import { SessionIndex } from '@chainx-v2/types/interfaces/session';

/** @name AuthIndex */
export interface AuthIndex extends u32 {}

/** @name AuthoritySignature */
export interface AuthoritySignature extends Signature {}

/** @name Heartbeat */
export interface Heartbeat extends Struct {
  readonly blockNumber: BlockNumber;
  readonly networkState: OpaqueNetworkState;
  readonly sessionIndex: SessionIndex;
  readonly authorityIndex: AuthIndex;
  readonly validatorsLen: u32;
}

/** @name HeartbeatTo244 */
export interface HeartbeatTo244 extends Struct {
  readonly blockNumber: BlockNumber;
  readonly networkState: OpaqueNetworkState;
  readonly sessionIndex: SessionIndex;
  readonly authorityIndex: AuthIndex;
}

/** @name OpaqueMultiaddr */
export interface OpaqueMultiaddr extends Bytes {}

/** @name OpaqueNetworkState */
export interface OpaqueNetworkState extends Struct {
  readonly peerId: OpaquePeerId;
  readonly externalAddresses: Vec<OpaqueMultiaddr>;
}

/** @name OpaquePeerId */
export interface OpaquePeerId extends Bytes {}

export type PHANTOM_IMONLINE = 'imOnline';
