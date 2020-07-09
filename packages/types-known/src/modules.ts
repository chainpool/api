// Copyright 2017-2020 @chainx-v2/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideModuleType } from '@chainx-v2/types/types';

// type overrides for modules (where duplication between modules exist)
const typesModules: Record<string, OverrideModuleType> = {
  babe: {
    EquivocationProof: 'BabeEquivocationProof'
  },
  balances: {
    Status: 'BalanceStatus'
  },
  contract: { // old metadata & naming
    // v2 & v3
    AccountInfo: 'ContractAccountInfo'
  },
  contracts: {
    StorageKey: 'ContractStorageKey'
  },
  grandpa: {
    Equivocation: 'GrandpaEquivocation',
    EquivocationProof: 'GrandpaEquivocationProof'
  },
  identity: {
    Judgement: 'IdentityJudgement'
  },
  parachains: {
    Id: 'ParaId'
  },
  society: {
    Judgement: 'SocietyJudgement',
    Vote: 'SocietyVote'
  },
  staking: {
    Compact: 'CompactAssignments'
  },
  treasury: {
    Proposal: 'TreasuryProposal'
  }
};

export default typesModules;
