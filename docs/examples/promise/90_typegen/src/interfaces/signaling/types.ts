// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct } from '@chainx-v2/types/codec';
import { Bytes, Text, u32, u64 } from '@chainx-v2/types/primitive';
import { AccountId } from '@chainx-v2/types/interfaces/runtime';
import { VoteStage } from 'sample-polkadotjs-typegen/interfaces/voting';

/** @name ProposalContents */
export interface ProposalContents extends Bytes {}

/** @name ProposalRecord */
export interface ProposalRecord extends Struct {
  readonly index: u32;
  readonly author: AccountId;
  readonly stage: VoteStage;
  readonly transition_time: u32;
  readonly title: Text;
  readonly contents: Text;
  readonly vote_id: u64;
}

/** @name ProposalTitle */
export interface ProposalTitle extends Bytes {}
