## Events

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[balances](#balances)**

- **[contracts](#contracts)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[multisig](#multisig)**

- **[offences](#offences)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**


___


## balances
 
### BalanceSet(`AccountId`, `Balance`, `Balance`)
- **summary**:   A balance was set by root (who, free, reserved). 
 
### Deposit(`AccountId`, `Balance`)
- **summary**:   Some amount was deposited (e.g. for transaction fees). 
 
### DustLost(`AccountId`, `Balance`)
- **summary**:   An account was removed whose balance was non-zero but below ExistentialDeposit, resulting in an outright loss. 
 
### Endowed(`AccountId`, `Balance`)
- **summary**:   An account was created with some free balance. 
 
### Reserved(`AccountId`, `Balance`)
- **summary**:   Some balance was reserved (moved from free to reserved). 
 
### ReserveRepatriated(`AccountId`, `AccountId`, `Balance`, `BalanceStatus`)
- **summary**:   Some balance was moved from the reserve of the first account to the second account. Final argument indicates the destination balance type. 
 
### Transfer(`AccountId`, `AccountId`, `Balance`)
- **summary**:   Transfer succeeded (from, to, value). 
 
### Unreserved(`AccountId`, `Balance`)
- **summary**:   Some balance was unreserved (moved from reserved to free). 

___


## contracts
 
### CodeStored(`Hash`)
- **summary**:   Code with the specified hash has been stored. 
 
### ContractExecution(`AccountId`, `Bytes`)
- **summary**:   An event deposited upon execution of a contract from the account. 
 
### Dispatched(`AccountId`, `bool`)
- **summary**:   A call was dispatched from the given account. The bool signals whether it was successful execution or not. 
 
### Evicted(`AccountId`, `bool`)
- **summary**:   Contract has been evicted and is now in tombstone state. 

  #### Params 

  - `contract`: `AccountId`: The account ID of the evicted contract. 

  - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
 
### Instantiated(`AccountId`, `AccountId`)
- **summary**:   Contract deployed by address at the specified address. 
 
### Restored(`AccountId`, `AccountId`, `Hash`, `Balance`, `bool`)
- **summary**:   Restoration for a contract has been initiated. 

  #### Params 

  - `donor`: `AccountId`: Account ID of the restoring contract 

  - `dest`: `AccountId`: Account ID of the restored contract

  - `code_hash`: `Hash`: Code hash of the restored contract

  - `rent_allowance: `Balance`: Rent allowance of the restored contract

  - `success`: `bool`: True if the restoration was successful
 
### ScheduleUpdated(`u32`)
- **summary**:   Triggered when the current schedule is updated. 
 
### Transfer(`AccountId`, `AccountId`, `Balance`)
- **summary**:   Transfer happened `from` to `to` with given `value` as part of a `call` or `instantiate`. 

___


## council
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed after its duration was up. 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; `bool` is true if returned without error. 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; `bool` is true if returned without error. 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). 

___


## democracy
 
### Cancelled(`ReferendumIndex`)
- **summary**:   A referendum has been cancelled. 
 
### Delegated(`AccountId`, `AccountId`)
- **summary**:   An account has delegated their vote to another account. 
 
### Executed(`ReferendumIndex`, `bool`)
- **summary**:   A proposal has been enacted. 
 
### ExternalTabled()
- **summary**:   An external proposal has been tabled. 
 
### NotPassed(`ReferendumIndex`)
- **summary**:   A proposal has been rejected by referendum. 
 
### Passed(`ReferendumIndex`)
- **summary**:   A proposal has been approved by referendum. 
 
### PreimageInvalid(`Hash`, `ReferendumIndex`)
- **summary**:   A proposal could not be executed because its preimage was invalid. 
 
### PreimageMissing(`Hash`, `ReferendumIndex`)
- **summary**:   A proposal could not be executed because its preimage was missing. 
 
### PreimageNoted(`Hash`, `AccountId`, `Balance`)
- **summary**:   A proposal's preimage was noted, and the deposit taken. 
 
### PreimageReaped(`Hash`, `AccountId`, `Balance`, `AccountId`)
- **summary**:   A registered preimage was removed and the deposit collected by the reaper (last item). 
 
### PreimageUsed(`Hash`, `AccountId`, `Balance`)
- **summary**:   A proposal preimage was removed and used (the deposit was returned). 
 
### Proposed(`PropIndex`, `Balance`)
- **summary**:   A motion has been proposed by a public account. 
 
### Started(`ReferendumIndex`, `VoteThreshold`)
- **summary**:   A referendum has begun. 
 
### Tabled(`PropIndex`, `Balance`, `Vec<AccountId>`)
- **summary**:   A public proposal has been tabled for referendum vote. 
 
### Undelegated(`AccountId`)
- **summary**:   An account has cancelled a previous delegation operation. 
 
### Unlocked(`AccountId`)
- **summary**:   An account has been unlocked successfully. 
 
### Vetoed(`AccountId`, `Hash`, `BlockNumber`)
- **summary**:   An external proposal has been vetoed. 

___


## elections
 
### EmptyTerm()
- **summary**:   No (or not enough) candidates existed for this round. This is different from `NewTerm([])`. See the description of `NewTerm`. 
 
### MemberKicked(`AccountId`)
- **summary**:   A member has been removed. This should always be followed by either `NewTerm` ot `EmptyTerm`. 
 
### MemberRenounced(`AccountId`)
- **summary**:   A member has renounced their candidacy. 
 
### NewTerm(`Vec<(AccountId,Balance)>`)
- **summary**:   A new term with new members. This indicates that enough candidates existed to run the election, not that enough have has been elected. The inner value must be examined for this purpose. A `NewTerm([])` indicates that some candidates got their bond slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to begin with. 
 
### VoterReported(`AccountId`, `AccountId`, `bool`)
- **summary**:   A voter (first element) was reported (byt the second element) with the the report being successful or not (third element). 

___


## grandpa
 
### NewAuthorities(`AuthorityList`)
- **summary**:   New authority set has been applied. 
 
### Paused()
- **summary**:   Current authority set has been paused. 
 
### Resumed()
- **summary**:   Current authority set has been resumed. 

___


## identity
 
### IdentityCleared(`AccountId`, `Balance`)
- **summary**:   A name was cleared, and the given balance returned. 
 
### IdentityKilled(`AccountId`, `Balance`)
- **summary**:   A name was removed and the given balance slashed. 
 
### IdentitySet(`AccountId`)
- **summary**:   A name was set or reset (which will remove all judgements). 
 
### JudgementGiven(`AccountId`, `RegistrarIndex`)
- **summary**:   A judgement was given by a registrar. 
 
### JudgementRequested(`AccountId`, `RegistrarIndex`)
- **summary**:   A judgement was asked from a registrar. 
 
### JudgementUnrequested(`AccountId`, `RegistrarIndex`)
- **summary**:   A judgement request was retracted. 
 
### RegistrarAdded(`RegistrarIndex`)
- **summary**:   A registrar was added. 

___


## imOnline
 
### AllGood()
- **summary**:   At the end of the session, no offence was committed. 
 
### HeartbeatReceived(`AuthorityId`)
- **summary**:   A new heartbeat was received from `AuthorityId` 
 
### SomeOffline(`Vec<IdentificationTuple>`)
- **summary**:   At the end of the session, at least one validator was found to be offline. 

___


## indices
 
### IndexAssigned(`AccountId`, `AccountIndex`)
- **summary**:   A account index was assigned. 
 
### IndexFreed(`AccountIndex`)
- **summary**:   A account index has been freed up (unassigned). 
 
### IndexFrozen(`AccountIndex`, `AccountId`)
- **summary**:   A account index has been frozen to its current account ID. 

___


## multisig
 
### MultisigApproval(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **summary**:   A multisig operation has been approved by someone. First param is the account that is approving, third is the multisig account, fourth is hash of the call. 
 
### MultisigCancelled(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **summary**:   A multisig operation has been cancelled. First param is the account that is cancelling, third is the multisig account, fourth is hash of the call. 
 
### MultisigExecuted(`AccountId`, `Timepoint`, `AccountId`, `CallHash`, `DispatchResult`)
- **summary**:   A multisig operation has been executed. First param is the account that is approving, third is the multisig account, fourth is hash of the call to be executed. 
 
### NewMultisig(`AccountId`, `AccountId`, `CallHash`)
- **summary**:   A new multisig operation has begun. First param is the account that is approving, second is the multisig account, third is hash of the call. 

___


## offences
 
### Offence(`Kind`, `OpaqueTimeSlot`, `bool`)
- **summary**:   There is an offence reported of the given `kind` happened at the `session_index` and (kind-specific) time slot. This event is not deposited for duplicate slashes. last element indicates of the offence was applied (true) or queued (false). 

___


## proxy
 
### AnonymousCreated(`AccountId`, `AccountId`, `ProxyType`, `u16`)
- **summary**:   Anonymous account (first parameter) has been created by new proxy (second) with given disambiguation index and proxy type. 
 
### ProxyExecuted(`DispatchResult`)
- **summary**:   A proxy was executed correctly, with the given result. 

___


## recovery
 
### AccountRecovered(`AccountId`, `AccountId`)
- **summary**:   Account_1 has been successfully recovered by account_2 
 
### RecoveryClosed(`AccountId`, `AccountId`)
- **summary**:   A recovery process for account_1 by account_2 has been closed 
 
### RecoveryCreated(`AccountId`)
- **summary**:   A recovery process has been set up for an account 
 
### RecoveryInitiated(`AccountId`, `AccountId`)
- **summary**:   A recovery process has been initiated for account_1 by account_2 
 
### RecoveryRemoved(`AccountId`)
- **summary**:   A recovery process has been removed for an account 
 
### RecoveryVouched(`AccountId`, `AccountId`, `AccountId`)
- **summary**:   A recovery process for account_1 by account_2 has been vouched for by account_3 

___


## scheduler
 
### Canceled(`BlockNumber`, `u32`)
 
### Dispatched(`TaskAddress`, `Option<Bytes>`, `DispatchResult`)
 
### Scheduled(`BlockNumber`, `u32`)

___


## session
 
### NewSession(`SessionIndex`)
- **summary**:   New session has happened. Note that the argument is the session index, not the block number as the type might suggest. 

___


## society
 
### AutoUnbid(`AccountId`)
- **summary**:   A candidate was dropped (due to an excess of bids in the system). 
 
### Bid(`AccountId`, `Balance`)
- **summary**:   A membership bid just happened. The given account is the candidate's ID and their offer is the second. 
 
### CandidateSuspended(`AccountId`)
- **summary**:   A candidate has been suspended 
 
### Challenged(`AccountId`)
- **summary**:   A member has been challenged 
 
### DefenderVote(`AccountId`, `bool`)
- **summary**:   A vote has been placed for a defending member (voter, vote) 
 
### Founded(`AccountId`)
- **summary**:   The society is founded by the given identity. 
 
### Inducted(`AccountId`, `Vec<AccountId>`)
- **summary**:   A group of candidates have been inducted. The batch's primary is the first value, the batch in full is the second. 
 
### MemberSuspended(`AccountId`)
- **summary**:   A member has been suspended 
 
### NewMaxMembers(`u32`)
- **summary**:   A new max member count has been set 
 
### SuspendedMemberJudgement(`AccountId`, `bool`)
- **summary**:   A suspended member has been judged 
 
### Unbid(`AccountId`)
- **summary**:   A candidate was dropped (by their request). 
 
### Unfounded(`AccountId`)
- **summary**:   Society is unfounded. 
 
### Unvouch(`AccountId`)
- **summary**:   A candidate was dropped (by request of who vouched for them). 
 
### Vote(`AccountId`, `AccountId`, `bool`)
- **summary**:   A vote has been placed (candidate, voter, vote) 
 
### Vouch(`AccountId`, `Balance`, `AccountId`)
- **summary**:   A membership bid just happened by vouching. The given account is the candidate's ID and their offer is the second. The vouching party is the third. 

___


## staking
 
### Bonded(`AccountId`, `Balance`)
- **summary**:   An account has bonded this amount. 

  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably, it will not be emitted for staking rewards when they are added to stake. 
 
### EraPayout(`EraIndex`, `Balance`, `Balance`)
- **summary**:   The era payout has been set; the first balance is the validator-payout; the second is the remainder from the maximum amount of reward. 
 
### OldSlashingReportDiscarded(`SessionIndex`)
- **summary**:   An old slashing report from a prior era was discarded because it could not be processed. 
 
### Reward(`AccountId`, `Balance`)
- **summary**:   The staker has been rewarded by this amount. `AccountId` is the stash account. 
 
### Slash(`AccountId`, `Balance`)
- **summary**:   One validator (and its nominators) has been slashed by the given amount. 
 
### SolutionStored(`ElectionCompute`)
- **summary**:   A new solution for the upcoming election has been stored. 
 
### StakingElection(`ElectionCompute`)
- **summary**:   A new set of stakers was elected with the given computation method. 
 
### Unbonded(`AccountId`, `Balance`)
- **summary**:   An account has unbonded this amount. 
 
### Withdrawn(`AccountId`, `Balance`)
- **summary**:   An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance` from the unlocking queue. 

___


## sudo
 
### KeyChanged(`AccountId`)
- **summary**:   The sudoer just switched identity; the old key is supplied. 
 
### Sudid(`DispatchResult`)
- **summary**:   A sudo just took place. 
 
### SudoAsDone(`bool`)
- **summary**:   A sudo just took place. 

___


## system
 
### CodeUpdated()
- **summary**:   `:code` was updated. 
 
### ExtrinsicFailed(`DispatchError`, `DispatchInfo`)
- **summary**:   An extrinsic failed. 
 
### ExtrinsicSuccess(`DispatchInfo`)
- **summary**:   An extrinsic completed successfully. 
 
### KilledAccount(`AccountId`)
- **summary**:   An account was reaped. 
 
### NewAccount(`AccountId`)
- **summary**:   A new account was created. 

___


## technicalCommittee
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed after its duration was up. 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; `bool` is true if returned without error. 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; `bool` is true if returned without error. 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). 

___


## technicalMembership
 
### Dummy(`PhantomData`)
- **summary**:   Phantom member, never used. 
 
### KeyChanged()
- **summary**:   One of the members' keys changed. 
 
### MemberAdded()
- **summary**:   The given member was added; see the transaction for who. 
 
### MemberRemoved()
- **summary**:   The given member was removed; see the transaction for who. 
 
### MembersReset()
- **summary**:   The membership was reset; see the transaction for who the new set is. 
 
### MembersSwapped()
- **summary**:   Two members were swapped; see the transaction for who. 

___


## treasury
 
### Awarded(`ProposalIndex`, `Balance`, `AccountId`)
- **summary**:   Some funds have been allocated. 
 
### Burnt(`Balance`)
- **summary**:   Some of our funds have been burnt. 
 
### Deposit(`Balance`)
- **summary**:   Some funds have been deposited. 
 
### NewTip(`Hash`)
- **summary**:   A new tip suggestion has been opened. 
 
### Proposed(`ProposalIndex`)
- **summary**:   New proposal. 
 
### Rejected(`ProposalIndex`, `Balance`)
- **summary**:   A proposal was rejected; funds were slashed. 
 
### Rollover(`Balance`)
- **summary**:   Spending has finished; this is the amount that rolls over until next spend. 
 
### Spending(`Balance`)
- **summary**:   We have ended a spend period and will now allocate funds. 
 
### TipClosed(`Hash`, `AccountId`, `Balance`)
- **summary**:   A tip suggestion has been closed. 
 
### TipClosing(`Hash`)
- **summary**:   A tip suggestion has reached threshold and is closing. 
 
### TipRetracted(`Hash`)
- **summary**:   A tip suggestion has been retracted. 

___


## utility
 
### BatchCompleted()
- **summary**:   Batch of dispatches completed fully with no error. 
 
### BatchInterrupted(`u32`, `DispatchError`)
- **summary**:   Batch of dispatches did not complete fully. Index of first failing dispatch given, as well as the error. 

___


## vesting
 
### VestingCompleted(`AccountId`)
- **summary**:   An account (given) has become fully vested. No further vesting can happen. 
 
### VestingUpdated(`AccountId`, `Balance`)
- **summary**:   The amount vested has been updated. This could indicate more funds are available. The balance given is the amount which is left unvested (and thus locked). 
