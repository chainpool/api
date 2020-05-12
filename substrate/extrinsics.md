## Extrinsics

The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[authorship](#authorship)**

- **[balances](#balances)**

- **[contracts](#contracts)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[finalityTracker](#finalitytracker)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[recovery](#recovery)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**


___


## authorship
 
### setUncles(new_uncles: `Vec<T::Header>`)
- **interface**: `api.tx.authorship.setUncles`
- **summary**:   Provide a set of uncles. 

___


## balances
 
### forceTransfer(source: `<T::Lookup as StaticLookup>::Source`, dest: `<T::Lookup as StaticLookup>::Source`, value: `Compact<T::Balance>`)
- **interface**: `api.tx.balances.forceTransfer`
- **summary**:   Exactly as `transfer`, except the origin must be root and the source account may be specified. \# \<weight>

   

  - Same as transfer, but additional read and write because the source account is  not assumed to be in the overlay. 

  \# \</weight> 
 
### setBalance(who: `<T::Lookup as StaticLookup>::Source`, new_free: `Compact<T::Balance>`, new_reserved: `Compact<T::Balance>`)
- **interface**: `api.tx.balances.setBalance`
- **summary**:   Set the balances of a given account. 

  This will alter `FreeBalance` and `ReservedBalance` in storage. it will also decrease the total issuance of the system (`TotalIssuance`). If the new free or reserved balance is below the existential deposit, it will reset the account nonce (`frame_system::AccountNonce`). 

  The dispatch origin for this call is `root`. 

  \# \<weight>

   

  - Independent of the arguments.

  - Contains a limited number of reads and writes.

  ---------------------

  - Base Weight:

      - Creating: 27.56 µs

      - Killing: 35.11 µs

  - DB Weight: 1 Read, 1 Write to `who`

  \# \</weight> 
 
### transfer(dest: `<T::Lookup as StaticLookup>::Source`, value: `Compact<T::Balance>`)
- **interface**: `api.tx.balances.transfer`
- **summary**:   Transfer some liquid free balance to another account. 

  `transfer` will set the `FreeBalance` of the sender and receiver. It will decrease the total issuance of the system by the `TransferFee`. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. 

  The dispatch origin for this call must be `Signed` by the transactor. 

  \# \<weight>

   

  - Dependent on arguments but not critical, given proper implementations for  input config types. See related functions below. 

  - It contains a limited number of reads and writes internally and no complex computation.

  Related functions: 

    - `ensure_can_withdraw` is always called internally but has a bounded complexity. 

    - Transferring balances to accounts that did not exist before will cause     `T::OnNewAccount::on_new_account` to be called. 

    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.

    - `transfer_keep_alive` works the same way as `transfer`, but has an additional    check that the transfer will not kill the origin account. 

  ---------------------------------

  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)

  - DB Weight: 1 Read and 1 Write to destination account

  - Origin account is already in memory, so no DB operations for them.

  \# \</weight> 
 
### transferKeepAlive(dest: `<T::Lookup as StaticLookup>::Source`, value: `Compact<T::Balance>`)
- **interface**: `api.tx.balances.transferKeepAlive`
- **summary**:   Same as the [`transfer`] call, but with a check that the transfer will not kill the origin account. 

  99% of the time you want [`transfer`] instead. 

  [`transfer`]: struct.Module.html#method.transfer \# \<weight>

   

  - Cheaper than transfer because account cannot be killed.

  - Base Weight: 51.4 µs

  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)#</weight> 

___


## contracts
 
### call(dest: `<T::Lookup as StaticLookup>::Source`, value: `Compact<BalanceOf<T>>`, gas_limit: `Compact<Gas>`, data: `Vec<u8>`)
- **interface**: `api.tx.contracts.call`
- **summary**:   Makes a call to an account, optionally transferring some balance. 

  * If the account is a smart-contract account, the associated code will be executed and any value will be transferred. 

  * If the account is a regular account, any value will be transferred.

  * If no account exists and the call value is not less than `existential_deposit`,a regular account will be created and any value will be transferred. 
 
### claimSurcharge(dest: `T::AccountId`, aux_sender: `Option<T::AccountId>`)
- **interface**: `api.tx.contracts.claimSurcharge`
- **summary**:   Allows block producers to claim a small reward for evicting a contract. If a block producer fails to do so, a regular users will be allowed to claim the reward. 

  If contract is not evicted as a result of this call, no actions are taken and the sender is not eligible for the reward. 
 
### instantiate(endowment: `Compact<BalanceOf<T>>`, gas_limit: `Compact<Gas>`, code_hash: `CodeHash<T>`, data: `Vec<u8>`)
- **interface**: `api.tx.contracts.instantiate`
- **summary**:   Instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance. 

  Instantiation is executed as follows: 

  - The destination address is computed based on the sender and hash of the code. 

  - The smart-contract account is created at the computed address.

  - The `ctor_code` is executed in the context of the newly-created account. Buffer returned  after the execution is saved as the `code` of the account. That code will be invoked   upon any call received by this account. 

  - The contract is initialized.
 
### putCode(code: `Vec<u8>`)
- **interface**: `api.tx.contracts.putCode`
- **summary**:   Stores the given binary Wasm code into the chain's storage and returns its `codehash`. You can instantiate contracts only with stored code. 
 
### updateSchedule(schedule: `Schedule`)
- **interface**: `api.tx.contracts.updateSchedule`
- **summary**:   Updates the schedule for metering contracts. 

  The schedule must have a greater version than the stored schedule. 

___


## council
 
### close(proposal: `T::Hash`, index: `Compact<ProposalIndex>`)
- **interface**: `api.tx.council.close`
- **summary**:   May be called by any signed account after the voting duration has ended in order to finish voting and close the proposal. 

  Abstentions are counted as rejections unless there is a prime member set and the prime member cast an approval. 

  - the weight of `proposal` preimage. 

  - up to three events deposited.

  - one read, two removals, one mutation. (plus three static reads.)

  - computation and i/o `O(P + L + M)` where:

    - `M` is number of members,

    - `P` is number of active proposals,

    - `L` is the encoded length of `proposal` preimage.
 
### execute(proposal: `Box<<T as Trait<I>>::Proposal>`)
- **interface**: `api.tx.council.execute`
- **summary**:   Dispatch a proposal from a member using the `Member` origin. 

  Origin must be a member of the collective. 
 
### propose(threshold: `Compact<MemberCount>`, proposal: `Box<<T as Trait<I>>::Proposal>`)
- **interface**: `api.tx.council.propose`
- **summary**:   \# \<weight>

   

  - Bounded storage reads and writes.

  - Argument `threshold` has bearing on weight.

  \# \</weight> 
 
### setMembers(new_members: `Vec<T::AccountId>`, prime: `Option<T::AccountId>`)
- **interface**: `api.tx.council.setMembers`
- **summary**:   Set the collective's membership. 

  - `new_members`: The new member list. Be nice to the chain and 

  - `prime`: The prime member whose vote sets the default.

  Requires root origin. 
 
### vote(proposal: `T::Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: `api.tx.council.vote`
- **summary**:   \# \<weight>

   

  - Bounded storage read and writes.

  - Will be slightly heavier if the proposal is approved / disapproved after the vote.

  \# \</weight> 

___


## democracy
 
### activateProxy(proxy: `T::AccountId`)
- **interface**: `api.tx.democracy.activateProxy`
- **summary**:   Specify a proxy that is already open to us. Called by the stash. 

  NOTE: Used to be called `set_proxy`. 

  The dispatch origin of this call must be _Signed_. 

  - `proxy`: The account that will be activated as proxy. 

  \# \<weight>

   

  - One extra DB entry.

  \# \</weight> 
 
### cancelQueued(which: `ReferendumIndex`)
- **interface**: `api.tx.democracy.cancelQueued`
- **summary**:   Cancel a proposal queued for enactment. 

  The dispatch origin of this call must be _Root_. 

  - `which`: The index of the referendum to cancel. 

  \# \<weight>

   

  - One DB change.

  - O(d) where d is the items in the dispatch queue.

  \# \</weight> 
 
### cancelReferendum(ref_index: `Compact<ReferendumIndex>`)
- **interface**: `api.tx.democracy.cancelReferendum`
- **summary**:   Remove a referendum. 

  The dispatch origin of this call must be _Root_. 

  - `ref_index`: The index of the referendum to cancel. 

  \# \<weight>

   

  - `O(1)`.

  \# \</weight> 
 
### clearPublicProposals()
- **interface**: `api.tx.democracy.clearPublicProposals`
- **summary**:   Clears all public proposals. 

  The dispatch origin of this call must be _Root_. 

  \# \<weight>

   

  - `O(1)`.

  - One DB clear.

  \# \</weight> 
 
### closeProxy()
- **interface**: `api.tx.democracy.closeProxy`
- **summary**:   Clear the proxy. Called by the proxy. 

  NOTE: Used to be called `resign_proxy`. 

  The dispatch origin of this call must be _Signed_. 

  \# \<weight>

   

  - One DB clear.

  \# \</weight> 
 
### deactivateProxy(proxy: `T::AccountId`)
- **interface**: `api.tx.democracy.deactivateProxy`
- **summary**:   Deactivate the proxy, but leave open to this account. Called by the stash. 

  The proxy must already be active. 

  NOTE: Used to be called `remove_proxy`. 

  The dispatch origin of this call must be _Signed_. 

  - `proxy`: The account that will be deactivated as proxy. 

  \# \<weight>

   

  - One DB clear.

  \# \</weight> 
 
### delegate(to: `T::AccountId`, conviction: `Conviction`, balance: `BalanceOf<T>`)
- **interface**: `api.tx.democracy.delegate`
- **summary**:   Delegate the voting power (with some given conviction) of the sending account. 

  The balance delegated is locked for as long as it's delegated, and thereafter for the time appropriate for the conviction's lock period. 

  The dispatch origin of this call must be _Signed_, and the signing account must either: 

    - be delegating already; or

    - have no voting activity (if there is, then it will need to be removed/consolidated    through `reap_vote` or `unvote`). 

  - `to`: The account whose voting the `target` account's voting power will follow. 

  - `conviction`: The conviction that will be attached to the delegated votes. When the  account is undelegated, the funds will be locked for the corresponding period. 

  - `balance`: The amount of the account's balance to be used in delegating. This must  not be more than the account's current balance. 

  Emits `Delegated`. 

  \# \<weight>

   

  \# \</weight> 
 
### emergencyCancel(ref_index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.emergencyCancel`
- **summary**:   Schedule an emergency cancellation of a referendum. Cannot happen twice to the same referendum. 

  The dispatch origin of this call must be `CancellationOrigin`. 

  -`ref_index`: The index of the referendum to cancel. 

  \# \<weight>

   

  - `O(1)`.

  \# \</weight> 
 
### enactProposal(proposal_hash: `T::Hash`, index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.enactProposal`
- **summary**:   Enact a proposal from a referendum. For now we just make the weight be the maximum. 
 
### externalPropose(proposal_hash: `T::Hash`)
- **interface**: `api.tx.democracy.externalPropose`
- **summary**:   Schedule a referendum to be tabled once it is legal to schedule an external referendum. 

  The dispatch origin of this call must be `ExternalOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal. 

  \# \<weight>

   

  - `O(1)`.

  - One DB change.

  \# \</weight> 
 
### externalProposeDefault(proposal_hash: `T::Hash`)
- **interface**: `api.tx.democracy.externalProposeDefault`
- **summary**:   Schedule a negative-turnout-bias referendum to be tabled next once it is legal to schedule an external referendum. 

  The dispatch of this call must be `ExternalDefaultOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal. 

  Unlike `external_propose`, blacklisting has no effect on this and it may replace a pre-scheduled `external_propose` call. 

  \# \<weight>

   

  - `O(1)`.

  - One DB change.

  \# \</weight> 
 
### externalProposeMajority(proposal_hash: `T::Hash`)
- **interface**: `api.tx.democracy.externalProposeMajority`
- **summary**:   Schedule a majority-carries referendum to be tabled next once it is legal to schedule an external referendum. 

  The dispatch of this call must be `ExternalMajorityOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal. 

  Unlike `external_propose`, blacklisting has no effect on this and it may replace a pre-scheduled `external_propose` call. 

  \# \<weight>

   

  - `O(1)`.

  - One DB change.

  \# \</weight> 
 
### fastTrack(proposal_hash: `T::Hash`, voting_period: `T::BlockNumber`, delay: `T::BlockNumber`)
- **interface**: `api.tx.democracy.fastTrack`
- **summary**:   Schedule the currently externally-proposed majority-carries referendum to be tabled immediately. If there is no externally-proposed referendum currently, or if there is one but it is not a majority-carries referendum then it fails. 

  The dispatch of this call must be `FastTrackOrigin`. 

  - `proposal_hash`: The hash of the current external proposal. 

  - `voting_period`: The period that is allowed for voting on this proposal. Increased to  `FastTrackVotingPeriod` if too low. 

  - `delay`: The number of block after voting has ended in approval and this should be  enacted. This doesn't have a minimum amount. 

  Emits `Started`. 

  \# \<weight>

   

  - One DB clear.

  - One DB change.

  - One extra DB entry.

  \# \</weight> 
 
### noteImminentPreimage(encoded_proposal: `Vec<u8>`)
- **interface**: `api.tx.democracy.noteImminentPreimage`
- **summary**:   Register the preimage for an upcoming proposal. This requires the proposal to be in the dispatch queue. No deposit is needed. 

  The dispatch origin of this call must be _Signed_. 

  - `encoded_proposal`: The preimage of a proposal. 

  Emits `PreimageNoted`. 

  \# \<weight>

   

  - Dependent on the size of `encoded_proposal` and length of dispatch queue.

  \# \</weight> 
 
### notePreimage(encoded_proposal: `Vec<u8>`)
- **interface**: `api.tx.democracy.notePreimage`
- **summary**:   Register the preimage for an upcoming proposal. This doesn't require the proposal to be in the dispatch queue but does require a deposit, returned once enacted. 

  The dispatch origin of this call must be _Signed_. 

  - `encoded_proposal`: The preimage of a proposal. 

  Emits `PreimageNoted`. 

  \# \<weight>

   

  - Dependent on the size of `encoded_proposal` but protected by a  required deposit. 

  \# \</weight> 
 
### openProxy(target: `T::AccountId`)
- **interface**: `api.tx.democracy.openProxy`
- **summary**:   Become a proxy. 

  This must be called prior to a later `activate_proxy`. 

  Origin must be a Signed. 

  - `target`: The account whose votes will later be proxied. 

  `close_proxy` must be called before the account can be destroyed. 

  \# \<weight>

   

  - One extra DB entry.

  \# \</weight> 
 
### propose(proposal_hash: `T::Hash`, value: `Compact<BalanceOf<T>>`)
- **interface**: `api.tx.democracy.propose`
- **summary**:   Propose a sensitive action to be taken. 

  The dispatch origin of this call must be _Signed_ and the sender must have funds to cover the deposit. 

  - `proposal_hash`: The hash of the proposal preimage. 

  - `value`: The amount of deposit (must be at least `MinimumDeposit`).

  Emits `Proposed`. 

  \# \<weight>

   

  - `O(P)`

  - P is the number proposals in the `PublicProps` vec.

  - Two DB changes, one DB entry.

  \# \</weight> 
 
### proxyDelegate(to: `T::AccountId`, conviction: `Conviction`, balance: `BalanceOf<T>`)
- **interface**: `api.tx.democracy.proxyDelegate`
- **summary**:   Delegate the voting power (with some given conviction) of a proxied account. 

  The balance delegated is locked for as long as it's delegated, and thereafter for the time appropriate for the conviction's lock period. 

  The dispatch origin of this call must be _Signed_, and the signing account must have been set as the proxy account for `target`. 

  - `target`: The account whole voting power shall be delegated and whose balance locked.   This account must either: 

    - be delegating already; or

    - have no voting activity (if there is, then it will need to be removed/consolidated    through `reap_vote` or `unvote`). 

  - `to`: The account whose voting the `target` account's voting power will follow.

  - `conviction`: The conviction that will be attached to the delegated votes. When the  account is undelegated, the funds will be locked for the corresponding period. 

  - `balance`: The amount of the account's balance to be used in delegating. This must  not be more than the account's current balance. 

  Emits `Delegated`. 

  \# \<weight>

   

  \# \</weight> 
 
### proxyRemoveVote(index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.proxyRemoveVote`
- **summary**:   Remove a proxied vote for a referendum. 

  Exactly equivalent to `remove_vote` except that it operates on the account that the sender is a proxy for. 

  The dispatch origin of this call must be _Signed_ and the signing account must be a proxy for some other account which has a registered vote for the referendum of `index`. 

  - `index`: The index of referendum of the vote to be removed. 

  \# \<weight>

   

  - `O(R + log R)` where R is the number of referenda that `target` has voted on.

  \# \</weight> 
 
### proxyUndelegate()
- **interface**: `api.tx.democracy.proxyUndelegate`
- **summary**:   Undelegate the voting power of a proxied account. 

  Tokens may be unlocked following once an amount of time consistent with the lock period of the conviction with which the delegation was issued. 

  The dispatch origin of this call must be _Signed_ and the signing account must be a proxy for some other account which is currently delegating. 

  Emits `Undelegated`. 

  \# \<weight>

   

  - O(1).

  \# \</weight> 
 
### proxyVote(ref_index: `Compact<ReferendumIndex>`, vote: `AccountVote<BalanceOf<T>>`)
- **interface**: `api.tx.democracy.proxyVote`
- **summary**:   Vote in a referendum on behalf of a stash. If `vote.is_aye()`, the vote is to enact the proposal; otherwise it is a vote to keep the status quo. 

  The dispatch origin of this call must be _Signed_. 

  - `ref_index`: The index of the referendum to proxy vote for. 

  - `vote`: The vote configuration.

  \# \<weight>

   

  - `O(1)`.

  - One DB change, one DB entry.

  \# \</weight> 
 
### reapPreimage(proposal_hash: `T::Hash`)
- **interface**: `api.tx.democracy.reapPreimage`
- **summary**:   Remove an expired proposal preimage and collect the deposit. 

  The dispatch origin of this call must be _Signed_. 

  - `proposal_hash`: The preimage hash of a proposal. 

  This will only work after `VotingPeriod` blocks from the time that the preimage was noted, if it's the same account doing it. If it's a different account, then it'll only work an additional `EnactmentPeriod` later. 

  Emits `PreimageReaped`. 

  \# \<weight>

   

  - One DB clear.

  \# \</weight> 
 
### removeOtherVote(target: `T::AccountId`, index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.removeOtherVote`
- **summary**:   Remove a vote for a referendum. 

  If the `target` is equal to the signer, then this function is exactly equivalent to `remove_vote`. If not equal to the signer, then the vote must have expired, either because the referendum was cancelled, because the voter lost the referendum or because the conviction period is over. 

  The dispatch origin of this call must be _Signed_. 

  - `target`: The account of the vote to be removed; this account must have voted for   referendum `index`. 

  - `index`: The index of referendum of the vote to be removed.

  \# \<weight>

   

  - `O(R + log R)` where R is the number of referenda that `target` has voted on.

  \# \</weight> 
 
### removeVote(index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.removeVote`
- **summary**:   Remove a vote for a referendum. 

  If: 

  - the referendum was cancelled, or

  - the referendum is ongoing, or

  - the referendum has ended such that

    - the vote of the account was in opposition to the result; or

    - there was no conviction to the account's vote; or

    - the account made a split vote...then the vote is removed cleanly and a following call to `unlock` may result in more funds being available. 

  If, however, the referendum has ended and: 

  - it finished corresponding to the vote of the account, and

  - the account made a standard vote with conviction, and

  - the lock period of the conviction is not over...then the lock will be aggregated into the overall account's lock, which may involve 

  *overlocking* (where the two locks are combined into a single lock that is the maximumof both the amount locked and the time is it locked for). 

  The dispatch origin of this call must be _Signed_, and the signer must have a vote registered for referendum `index`. 

  - `index`: The index of referendum of the vote to be removed. 

  \# \<weight>

   

  - `O(R + log R)` where R is the number of referenda that `target` has voted on.

  \# \</weight> 
 
### second(proposal: `Compact<PropIndex>`)
- **interface**: `api.tx.democracy.second`
- **summary**:   Signals agreement with a particular proposal. 

  The dispatch origin of this call must be _Signed_ and the sender must have funds to cover the deposit, equal to the original deposit. 

  - `proposal`: The index of the proposal to second. 

  \# \<weight>

   

  - `O(S)`.

  - S is the number of seconds a proposal already has.

  - One DB entry.

  \# \</weight> 
 
### undelegate()
- **interface**: `api.tx.democracy.undelegate`
- **summary**:   Undelegate the voting power of the sending account. 

  Tokens may be unlocked following once an amount of time consistent with the lock period of the conviction with which the delegation was issued. 

  The dispatch origin of this call must be _Signed_ and the signing account must be currently delegating. 

  Emits `Undelegated`. 

  \# \<weight>

   

  - O(1).

  \# \</weight> 
 
### unlock(target: `T::AccountId`)
- **interface**: `api.tx.democracy.unlock`
- **summary**:   Unlock tokens that have an expired lock. 

  The dispatch origin of this call must be _Signed_. 

  - `target`: The account to remove the lock on. 

  \# \<weight>

   

  - `O(1)`.

  \# \</weight> 
 
### vetoExternal(proposal_hash: `T::Hash`)
- **interface**: `api.tx.democracy.vetoExternal`
- **summary**:   Veto and blacklist the external proposal hash. 

  The dispatch origin of this call must be `VetoOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist. 

  Emits `Vetoed`. 

  \# \<weight>

   

  - Two DB entries.

  - One DB clear.

  - Performs a binary search on `existing_vetoers` which should not  be very large. 

  - O(log v), v is number of `existing_vetoers`

  \# \</weight> 
 
### vote(ref_index: `Compact<ReferendumIndex>`, vote: `AccountVote<BalanceOf<T>>`)
- **interface**: `api.tx.democracy.vote`
- **summary**:   Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal; otherwise it is a vote to keep the status quo. 

  The dispatch origin of this call must be _Signed_. 

  - `ref_index`: The index of the referendum to vote for. 

  - `vote`: The vote configuration.

  \# \<weight>

   

  - `O(R)`.

  - R is the number of referendums the voter has voted on.

  - One DB change, one DB entry.

  \# \</weight> 

___


## elections
 
### removeMember(who: `<T::Lookup as StaticLookup>::Source`)
- **interface**: `api.tx.elections.removeMember`
- **summary**:   Remove a particular member from the set. This is effective immediately and the bond of the outgoing member is slashed. 

  If a runner-up is available, then the best runner-up will be removed and replaces the outgoing member. Otherwise, a new phragmen round is started. 

  Note that this does not affect the designated block number of the next election. 

  \# \<weight>

   #### State Reads: O(do_phragmen) Writes: O(do_phragmen) 

  \# \</weight> 
 
### removeVoter()
- **interface**: `api.tx.elections.removeVoter`
- **summary**:   Remove `origin` as a voter. This removes the lock and returns the bond. 

  \# \<weight>

   #### State Reads: O(1) Writes: O(1) 

  \# \</weight> 
 
### renounceCandidacy()
- **interface**: `api.tx.elections.renounceCandidacy`
- **summary**:   Renounce one's intention to be a candidate for the next election round. 3 potential outcomes exist: 

  - `origin` is a candidate and not elected in any set. In this case, the bond is  unreserved, returned and origin is removed as a candidate. 

  - `origin` is a current runner up. In this case, the bond is unreserved, returned and  origin is removed as a runner. 

  - `origin` is a current member. In this case, the bond is unreserved and origin is  removed as a member, consequently not being a candidate for the next round anymore.   Similar to [`remove_voter`], if replacement runners exists, they are immediately used. 
 
### reportDefunctVoter(target: `<T::Lookup as StaticLookup>::Source`)
- **interface**: `api.tx.elections.reportDefunctVoter`
- **summary**:   Report `target` for being an defunct voter. In case of a valid report, the reporter is rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and their bond is slashed. 

  A defunct voter is defined to be: 

    - a voter whose current submitted votes are all invalid. i.e. all of them are no    longer a candidate nor an active member. 

  \# \<weight>

   #### State Reads: O(NLogM) given M current candidates and N votes for `target`. Writes: O(1) 

  \# \</weight> 
 
### submitCandidacy()
- **interface**: `api.tx.elections.submitCandidacy`
- **summary**:   Submit oneself for candidacy. 

  A candidate will either: 

    - Lose at the end of the term and forfeit their deposit.

    - Win and become a member. Members will eventually get their stash back.

    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully    removed. 

  \# \<weight>

   #### State Reads: O(LogN) Given N candidates. Writes: O(1) 

  \# \</weight> 
 
### vote(votes: `Vec<T::AccountId>`, value: `Compact<BalanceOf<T>>`)
- **interface**: `api.tx.elections.vote`
- **summary**:   Vote for a set of candidates for the upcoming round of election. 

  The `votes` should: 

    - not be empty.

    - be less than the number of candidates.

  Upon voting, `value` units of `who`'s balance is locked and a bond amount is reserved. It is the responsibility of the caller to not place all of their balance into the lock and keep some for further transactions. 

  \# \<weight>

   #### State Reads: O(1) Writes: O(V) given `V` votes. V is bounded by 16. 

  \# \</weight> 

___


## finalityTracker
 
### finalHint(hint: `Compact<T::BlockNumber>`)
- **interface**: `api.tx.finalityTracker.finalHint`
- **summary**:   Hint that the author of this block thinks the best finalized block is the given number. 

___


## grandpa
 
### reportMisbehavior(_report: `Vec<u8>`)
- **interface**: `api.tx.grandpa.reportMisbehavior`
- **summary**:   Report some misbehavior. 

___


## identity
 
### addRegistrar(account: `T::AccountId`)
- **interface**: `api.tx.identity.addRegistrar`
- **summary**:   Add a registrar to the system. 

  The dispatch origin for this call must be `RegistrarOrigin` or `Root`. 

  - `account`: the account of the registrar. 

  Emits `RegistrarAdded` if successful. 

  \# \<weight>

   

  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).

  - One storage mutation (codec `O(R)`).

  - One event.

  - Benchmark: 24.63 + R * 0.53 µs (min squares analysis)

  \# \</weight> 
 
### cancelRequest(reg_index: `RegistrarIndex`)
- **interface**: `api.tx.identity.cancelRequest`
- **summary**:   Cancel a previous request. 

  Payment: A previously reserved deposit is returned on success. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  - `reg_index`: The index of the registrar whose judgement is no longer requested. 

  Emits `JudgementUnrequested` if successful. 

  \# \<weight>

   

  - `O(R + X)`.

  - One balance-reserve operation.

  - One storage mutation `O(R + X)`.

  - One event.

  - Benchmark: 50.05 + R * 0.321 + X * 1.688 µs (min squares analysis)

  \# \</weight> 
 
### clearIdentity()
- **interface**: `api.tx.identity.clearIdentity`
- **summary**:   Clear an account's identity info and all sub-accounts and return all deposits. 

  Payment: All reserved balances on the account are returned. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  Emits `IdentityCleared` if successful. 

  \# \<weight>

   

  - `O(R + S + X)`

    - where `R` registrar-count (governance-bounded).

    - where `S` subs-count (hard- and deposit-bounded).

    - where `X` additional-field-count (deposit-bounded and code-bounded).

  - One balance-unreserve operation.

  - `2` storage reads and `S + 2` storage deletions.

  - One event.

  - Benchmarks:

    - 57.36 + R * 0.019 + S * 2.577 + X * 0.874 µs (median slopes analysis)

    - 57.06 + R * 0.006 + S * 2.579 + X * 0.878 µs (min squares analysis)

  \# \</weight> 
 
### killIdentity(target: `<T::Lookup as StaticLookup>::Source`)
- **interface**: `api.tx.identity.killIdentity`
- **summary**:   Remove an account's identity and sub-account information and slash the deposits. 

  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by `Slash`. Verification request deposits are not returned; they should be cancelled manually using `cancel_request`. 

  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`. 

  - `target`: the account whose identity the judgement is upon. This must be an account   with a registered identity. 

  Emits `IdentityKilled` if successful. 

  \# \<weight>

   

  - `O(R + S + X)`.

  - One balance-reserve operation.

  - `S + 2` storage mutations.

  - One event.

  - Benchmark: 101.9 + R * 0.091 + S * 2.589 + X * 0.871 µs (min squares analysis)

  \# \</weight> 
 
### provideJudgement(reg_index: `Compact<RegistrarIndex>`, target: `<T::Lookup as StaticLookup>::Source`, judgement: `Judgement<BalanceOf<T>>`)
- **interface**: `api.tx.identity.provideJudgement`
- **summary**:   Provide a judgement for an account's identity. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `reg_index`. 

  - `reg_index`: the index of the registrar whose judgement is being made. 

  - `target`: the account whose identity the judgement is upon. This must be an account  with a registered identity. 

  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.

  Emits `JudgementGiven` if successful. 

  \# \<weight>

   

  - `O(R + X)`.

  - One balance-transfer operation.

  - Up to one account-lookup operation.

  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.

  - One event.

  - Benchmark: 47.77 + R * 0.336 + X * 1.664 µs (min squares analysis)

  \# \</weight> 
 
### requestJudgement(reg_index: `Compact<RegistrarIndex>`, max_fee: `Compact<BalanceOf<T>>`)
- **interface**: `api.tx.identity.requestJudgement`
- **summary**:   Request a judgement from a registrar. 

  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement given. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  - `reg_index`: The index of the registrar whose judgement is requested. 

  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:

  ```nocompile Self::registrars().get(reg_index).unwrap().fee ``` 

  Emits `JudgementRequested` if successful. 

  \# \<weight>

   

  - `O(R + X)`.

  - One balance-reserve operation.

  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.

  - One event.

  - Benchmark: 59.02 + R * 0.488 + X * 1.7 µs (min squares analysis)

  \# \</weight> 
 
### setAccountId(index: `Compact<RegistrarIndex>`, new: `T::AccountId`)
- **interface**: `api.tx.identity.setAccountId`
- **summary**:   Change the account associated with a registrar. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `index`. 

  - `index`: the index of the registrar whose fee is to be set. 

  - `new`: the new account ID.

  \# \<weight>

   

  - `O(R)`.

  - One storage mutation `O(R)`.

  - Benchmark: 10.05 + R * 0.438 µs (min squares analysis)

  \# \</weight> 
 
### setFee(index: `Compact<RegistrarIndex>`, fee: `Compact<BalanceOf<T>>`)
- **interface**: `api.tx.identity.setFee`
- **summary**:   Set the fee required for a judgement to be requested from a registrar. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `index`. 

  - `index`: the index of the registrar whose fee is to be set. 

  - `fee`: the new fee.

  \# \<weight>

   

  - `O(R)`.

  - One storage mutation `O(R)`.

  - Benchmark: 8.848 + R * 0.425 µs (min squares analysis)

  \# \</weight> 
 
### setFields(index: `Compact<RegistrarIndex>`, fields: `IdentityFields`)
- **interface**: `api.tx.identity.setFields`
- **summary**:   Set the field information for a registrar. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `index`. 

  - `index`: the index of the registrar whose fee is to be set. 

  - `fields`: the fields that the registrar concerns themselves with.

  \# \<weight>

   

  - `O(R)`.

  - One storage mutation `O(R)`.

  - Benchmark: 8.985 + R * 0.413 µs (min squares analysis)

  \# \</weight> 
 
### setIdentity(info: `IdentityInfo`)
- **interface**: `api.tx.identity.setIdentity`
- **summary**:   Set an account's identity information and reserve the appropriate deposit. 

  If the account already has identity information, the deposit is taken as part payment for the new deposit. 

  The dispatch origin for this call must be _Signed_. 

  - `info`: The identity information. 

  Emits `IdentitySet` if successful. 

  \# \<weight>

   

  - `O(X + X' + R)`

    - where `X` additional-field-count (deposit-bounded and code-bounded)

    - where `R` judgements-count (registrar-count-bounded)

  - One balance reserve operation.

  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).

  - One event.

  - Benchmark: 59.44 + R * 0.389 + X * 1.434 µs (min squares analysis)

  \# \</weight> 
 
### setSubs(subs: `Vec<(T::AccountId, Data)>`)
- **interface**: `api.tx.identity.setSubs`
- **summary**:   Set the sub-accounts of the sender. 

  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned and an amount `SubAccountDeposit` will be reserved for each item in `subs`. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  - `subs`: The identity's (new) sub-accounts. 

  \# \<weight>

   

  - `O(P + S)`

    - where `P` old-subs-count (hard- and deposit-bounded).

    - where `S` subs-count (hard- and deposit-bounded).

  - At most one balance operations.

  - DB:

    - `P + S` storage mutations (codec complexity `O(1)`)

    - One storage read (codec complexity `O(P)`).

    - One storage write (codec complexity `O(S)`).

    - One storage-exists (`IdentityOf::contains_key`).

  - Benchmark: 39.43 + P * 2.522 + S * 3.698 µs (min squares analysis)

  \# \</weight> 

___


## imOnline
 
### heartbeat(heartbeat: `Heartbeat<T::BlockNumber>`, _signature: `<T::AuthorityId as RuntimeAppPublic>::Signature`)
- **interface**: `api.tx.imOnline.heartbeat`
- **summary**:   \# \<weight>

   

  - Complexity: `O(K + E)` where K is length of `Keys` and E is length of  `Heartbeat.network_state.external_address` 

    - `O(K)`: decoding of length `K` 

    - `O(E)`: decoding/encoding of length `E`

  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,  `ReceivedHeartbeats` 

  - DbWrites: `ReceivedHeartbeats`

  \# \</weight> 

___


## indices
 
### claim(index: `T::AccountIndex`)
- **interface**: `api.tx.indices.claim`
- **summary**:   Assign an previously unassigned index. 

  Payment: `Deposit` is reserved from the sender account. 

  The dispatch origin for this call must be _Signed_. 

  - `index`: the index to be claimed. This must not be in use. 

  Emits `IndexAssigned` if successful. 

  \# \<weight>

   

  - `O(1)`.

  - One storage mutation (codec `O(1)`).

  - One reserve operation.

  - One event.

  \# \</weight> 
 
### forceTransfer(new: `T::AccountId`, index: `T::AccountIndex`)
- **interface**: `api.tx.indices.forceTransfer`
- **summary**:   Force an index to an account. This doesn't require a deposit. If the index is already held, then any deposit is reimbursed to its current owner. 

  The dispatch origin for this call must be _Root_. 

  - `index`: the index to be (re-)assigned. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

  Emits `IndexAssigned` if successful. 

  \# \<weight>

   

  - `O(1)`.

  - One storage mutation (codec `O(1)`).

  - Up to one reserve operation.

  - One event.

  \# \</weight> 
 
### free(index: `T::AccountIndex`)
- **interface**: `api.tx.indices.free`
- **summary**:   Free up an index owned by the sender. 

  Payment: Any previous deposit placed for the index is unreserved in the sender account. 

  The dispatch origin for this call must be _Signed_ and the sender must own the index. 

  - `index`: the index to be freed. This must be owned by the sender. 

  Emits `IndexFreed` if successful. 

  \# \<weight>

   

  - `O(1)`.

  - One storage mutation (codec `O(1)`).

  - One reserve operation.

  - One event.

  \# \</weight> 
 
### transfer(new: `T::AccountId`, index: `T::AccountIndex`)
- **interface**: `api.tx.indices.transfer`
- **summary**:   Assign an index already owned by the sender to another account. The balance reservation is effectively transferred to the new account. 

  The dispatch origin for this call must be _Signed_. 

  - `index`: the index to be re-assigned. This must be owned by the sender. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

  Emits `IndexAssigned` if successful. 

  \# \<weight>

   

  - `O(1)`.

  - One storage mutation (codec `O(1)`).

  - One transfer operation.

  - One event.

  \# \</weight> 

___


## recovery
 
### asRecovered(account: `T::AccountId`, call: `Box<<T as Trait>::Call>`)
- **interface**: `api.tx.recovery.asRecovered`
- **summary**:   Send a call through a recovered account. 

  The dispatch origin for this call must be _Signed_ and registered to be able to make calls on behalf of the recovered account. 

  Parameters: 

  - `account`: The recovered account you want to make a call on-behalf-of.

  - `call`: The call you want to make with the recovered account.

  \# \<weight>

   

  - The weight of the `call` + 10,000.

  - One storage lookup to check account is recovered by `who`. O(1)

  \# \</weight> 
 
### cancelRecovered(account: `T::AccountId`)
- **interface**: `api.tx.recovery.cancelRecovered`
- **summary**:   Cancel the ability to use `as_recovered` for `account`. 

  The dispatch origin for this call must be _Signed_ and registered to be able to make calls on behalf of the recovered account. 

  Parameters: 

  - `account`: The recovered account you are able to call on-behalf-of.

  \# \<weight>

   

  - One storage mutation to check account is recovered by `who`. O(1)

  \# \</weight> 
 
### claimRecovery(account: `T::AccountId`)
- **interface**: `api.tx.recovery.claimRecovery`
- **summary**:   Allow a successful rescuer to claim their recovered account. 

  The dispatch origin for this call must be _Signed_ and must be a "rescuer" who has successfully completed the account recovery process: collected `threshold` or more vouches, waited `delay_period` blocks since initiation. 

  Parameters: 

  - `account`: The lost account that you want to claim has been successfully  recovered by you. 

  \# \<weight>

   Key: F (len of friends in config), V (len of vouching friends) 

  - One storage read to get the recovery configuration. O(1), Codec O(F)

  - One storage read to get the active recovery process. O(1), Codec O(V)

  - One storage read to get the current block number. O(1)

  - One storage write. O(1), Codec O(V).

  - One event.

  Total Complexity: O(F + V) 

  \# \</weight> 
 
### closeRecovery(rescuer: `T::AccountId`)
- **interface**: `api.tx.recovery.closeRecovery`
- **summary**:   As the controller of a recoverable account, close an active recovery process for your account. 

  Payment: By calling this function, the recoverable account will receive the recovery deposit `RecoveryDeposit` placed by the rescuer. 

  The dispatch origin for this call must be _Signed_ and must be a recoverable account with an active recovery process for it. 

  Parameters: 

  - `rescuer`: The account trying to rescue this recoverable account.

  \# \<weight>

   Key: V (len of vouching friends) 

  - One storage read/remove to get the active recovery process. O(1), Codec O(V)

  - One balance call to repatriate reserved. O(X)

  - One event.

  Total Complexity: O(V + X) 

  \# \</weight> 
 
### createRecovery(friends: `Vec<T::AccountId>`, threshold: `u16`, delay_period: `T::BlockNumber`)
- **interface**: `api.tx.recovery.createRecovery`
- **summary**:   Create a recovery configuration for your account. This makes your account recoverable. 

  Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance will be reserved for storing the recovery configuration. This deposit is returned in full when the user calls `remove_recovery`. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `friends`: A list of friends you trust to vouch for recovery attempts.  Should be ordered and contain no duplicate values. 

  - `threshold`: The number of friends that must vouch for a recovery attempt  before the account can be recovered. Should be less than or equal to   the length of the list of friends. 

  - `delay_period`: The number of blocks after a recovery attempt is initialized  that needs to pass before the account can be recovered. 

  \# \<weight>

   

  - Key: F (len of friends)

  - One storage read to check that account is not already recoverable. O(1).

  - A check that the friends list is sorted and unique. O(F)

  - One currency reserve operation. O(X)

  - One storage write. O(1). Codec O(F).

  - One event.

  Total Complexity: O(F + X) 

  \# \</weight> 
 
### initiateRecovery(account: `T::AccountId`)
- **interface**: `api.tx.recovery.initiateRecovery`
- **summary**:   Initiate the process for recovering a recoverable account. 

  Payment: `RecoveryDeposit` balance will be reserved for initiating the recovery process. This deposit will always be repatriated to the account trying to be recovered. See `close_recovery`. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `account`: The lost account that you want to recover. This account  needs to be recoverable (i.e. have a recovery configuration). 

  \# \<weight>

   

  - One storage read to check that account is recoverable. O(F)

  - One storage read to check that this recovery process hasn't already started. O(1)

  - One currency reserve operation. O(X)

  - One storage read to get the current block number. O(1)

  - One storage write. O(1).

  - One event.

  Total Complexity: O(F + X) 

  \# \</weight> 
 
### removeRecovery()
- **interface**: `api.tx.recovery.removeRecovery`
- **summary**:   Remove the recovery process for your account. Recovered accounts are still accessible. 

  NOTE: The user must make sure to call `close_recovery` on all active recovery attempts before calling this function else it will fail. 

  Payment: By calling this function the recoverable account will unreserve their recovery configuration deposit. (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends) 

  The dispatch origin for this call must be _Signed_ and must be a recoverable account (i.e. has a recovery configuration). 

  \# \<weight>

   Key: F (len of friends) 

  - One storage read to get the prefix iterator for active recoveries. O(1)

  - One storage read/remove to get the recovery configuration. O(1), Codec O(F)

  - One balance call to unreserved. O(X)

  - One event.

  Total Complexity: O(F + X) 

  \# \</weight> 
 
### setRecovered(lost: `T::AccountId`, rescuer: `T::AccountId`)
- **interface**: `api.tx.recovery.setRecovered`
- **summary**:   Allow ROOT to bypass the recovery process and set an a rescuer account for a lost account directly. 

  The dispatch origin for this call must be _ROOT_. 

  Parameters: 

  - `lost`: The "lost account" to be recovered.

  - `rescuer`: The "rescuer account" which can call as the lost account.

  \# \<weight>

   

  - One storage write O(1)

  - One event

  \# \</weight> 
 
### vouchRecovery(lost: `T::AccountId`, rescuer: `T::AccountId`)
- **interface**: `api.tx.recovery.vouchRecovery`
- **summary**:   Allow a "friend" of a recoverable account to vouch for an active recovery process for that account. 

  The dispatch origin for this call must be _Signed_ and must be a "friend" for the recoverable account. 

  Parameters: 

  - `lost`: The lost account that you want to recover.

  - `rescuer`: The account trying to rescue the lost account that you  want to vouch for. 

  The combination of these two parameters must point to an active recovery process. 

  \# \<weight>

   Key: F (len of friends in config), V (len of vouching friends) 

  - One storage read to get the recovery configuration. O(1), Codec O(F)

  - One storage read to get the active recovery process. O(1), Codec O(V)

  - One binary search to confirm caller is a friend. O(logF)

  - One binary search to confirm caller has not already vouched. O(logV)

  - One storage write. O(1), Codec O(V).

  - One event.

  Total Complexity: O(F + logF + V + logV) 

  \# \</weight> 

___


## session
 
### purgeKeys()
- **interface**: `api.tx.session.purgeKeys`
- **summary**:   Removes any session key(s) of the function caller. This doesn't take effect until the next session. 

  The dispatch origin of this function must be signed. 

  \# \<weight>

   

  - Complexity: `O(1)` in number of key types.  Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed. 

  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`

  - DbWrites: `NextKeys`, `origin account`

  - DbWrites per key id: `KeyOwnder`

  \# \</weight> 
 
### setKeys(keys: `T::Keys`, proof: `Vec<u8>`)
- **interface**: `api.tx.session.setKeys`
- **summary**:   Sets the session key(s) of the function caller to `keys`. Allows an account to set its session key prior to becoming a validator. This doesn't take effect until the next session. 

  The dispatch origin of this function must be signed. 

  \# \<weight>

   

  - Complexity: `O(1)`  Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed. 

  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`

  - DbWrites: `origin account`, `NextKeys`

  - DbReads per key id: `KeyOwner`

  - DbWrites per key id: `KeyOwner`

  \# \</weight> 

___


## society
 
### bid(value: `BalanceOf<T, I>`)
- **interface**: `api.tx.society.bid`
- **summary**:   A user outside of the society can make a bid for entry. 

  Payment: `CandidateDeposit` will be reserved for making a bid. It is returned when the bid becomes a member, or if the bid calls `unbid`. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `value`: A one time payment the bid would like to receive when joining the society.

  \# \<weight>

   Key: B (len of bids), C (len of candidates), M (len of members), X (balance reserve) 

  - Storage Reads:

  	- One storage read to check for suspended candidate. O(1)

  	- One storage read to check for suspended member. O(1)

  	- One storage read to retrieve all current bids. O(B)

  	- One storage read to retrieve all current candidates. O(C)

  	- One storage read to retrieve all members. O(M)

  - Storage Writes:

  	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization w/ read)

  	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)

  - Notable Computation:

  	- O(B + C + log M) search to check user is not already a part of society.

  	- O(log B) search to insert the new bid sorted.

  - External Module Operations:

  	- One balance reserve operation. O(X)

  	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.

  - Events:

  	- One event for new bid.

  	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.

  Total Complexity: O(M + B + C + logM + logB + X) 

  \# \</weight> 
 
### defenderVote(approve: `bool`)
- **interface**: `api.tx.society.defenderVote`
- **summary**:   As a member, vote on the defender. 

  The dispatch origin for this call must be _Signed_ and a member. 

  Parameters: 

  - `approve`: A boolean which says if the candidate should beapproved (`true`) or rejected (`false`). 

  \# \<weight>

   

  - Key: M (len of members)

  - One storage read O(M) and O(log M) search to check user is a member.

  - One storage write to add vote to votes. O(1)

  - One event.

  Total Complexity: O(M + logM) 

  \# \</weight> 
 
### found(founder: `T::AccountId`, max_members: `u32`, rules: `Vec<u8>`)
- **interface**: `api.tx.society.found`
- **summary**:   Found the society. 

  This is done as a discrete action in order to allow for the module to be included into a running chain and can only be done once. 

  The dispatch origin for this call must be from the _FounderSetOrigin_. 

  Parameters: 

  - `founder` - The first member and head of the newly founded society.

  - `max_members` - The initial max number of members for the society.

  - `rules` - The rules of this society concerning membership.

  \# \<weight>

   

  - Two storage mutates to set `Head` and `Founder`. O(1)

  - One storage write to add the first member to society. O(1)

  - One event.

  Total Complexity: O(1) 

  \# \</weight> 
 
### judgeSuspendedCandidate(who: `T::AccountId`, judgement: `Judgement`)
- **interface**: `api.tx.society.judgeSuspendedCandidate`
- **summary**:   Allow suspended judgement origin to make judgement on a suspended candidate. 

  If the judgement is `Approve`, we add them to society as a member with the appropriate payment for joining society. 

  If the judgement is `Reject`, we either slash the deposit of the bid, giving it back to the society treasury, or we ban the voucher from vouching again. 

  If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go through the induction process again. 

  The dispatch origin for this call must be from the _SuspensionJudgementOrigin_. 

  Parameters: 

  - `who` - The suspended candidate to be judged.

  - `judgement` - `Approve`, `Reject`, or `Rebid`.

  \# \<weight>

   Key: B (len of bids), M (len of members), X (balance action) 

  - One storage read to check `who` is a suspended candidate.

  - One storage removal of the suspended candidate.

  - Approve Logic

  	- One storage read to get the available pot to pay users with. O(1)

  	- One storage write to update the available pot. O(1)

  	- One storage read to get the current block number. O(1)

  	- One storage read to get all members. O(M)

  	- Up to one unreserve currency action.

  	- Up to two new storage writes to payouts.

  	- Up to one storage write with O(log M) binary search to add a member to society.

  - Reject Logic

  	- Up to one repatriate reserved currency action. O(X)

  	- Up to one storage write to ban the vouching member from vouching again.

  - Rebid Logic

  	- Storage mutate with O(log B) binary search to place the user back into bids.

  - Up to one additional event if unvouch takes place.

  - One storage removal.

  - One event for the judgement.

  Total Complexity: O(M + logM + B + X) 

  \# \</weight> 
 
### judgeSuspendedMember(who: `T::AccountId`, forgive: `bool`)
- **interface**: `api.tx.society.judgeSuspendedMember`
- **summary**:   Allow suspension judgement origin to make judgement on a suspended member. 

  If a suspended member is forgiven, we simply add them back as a member, not affecting any of the existing storage items for that member. 

  If a suspended member is rejected, remove all associated storage items, including their payouts, and remove any vouched bids they currently have. 

  The dispatch origin for this call must be from the _SuspensionJudgementOrigin_. 

  Parameters: 

  - `who` - The suspended member to be judged.

  - `forgive` - A boolean representing whether the suspension judgement origin              forgives (`true`) or rejects (`false`) a suspended member. 

  \# \<weight>

   Key: B (len of bids), M (len of members) 

  - One storage read to check `who` is a suspended member. O(1)

  - Up to one storage write O(M) with O(log M) binary search to add a member back to society.

  - Up to 3 storage removals O(1) to clean up a removed member.

  - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.

  - Up to one additional event if unvouch takes place.

  - One storage removal. O(1)

  - One event for the judgement.

  Total Complexity: O(M + logM + B) 

  \# \</weight> 
 
### payout()
- **interface**: `api.tx.society.payout`
- **summary**:   Transfer the first matured payout for the sender and remove it from the records. 

  NOTE: This extrinsic needs to be called multiple times to claim multiple matured payouts. 

  Payment: The member will receive a payment equal to their first matured payout to their free balance. 

  The dispatch origin for this call must be _Signed_ and a member with payouts remaining. 

  \# \<weight>

   Key: M (len of members), P (number of payouts for a particular member) 

  - One storage read O(M) and O(log M) search to check signer is a member.

  - One storage read O(P) to get all payouts for a member.

  - One storage read O(1) to get the current block number.

  - One currency transfer call. O(X)

  - One storage write or removal to update the member's payouts. O(P)

  Total Complexity: O(M + logM + P + X) 

  \# \</weight> 
 
### setMaxMembers(max: `u32`)
- **interface**: `api.tx.society.setMaxMembers`
- **summary**:   Allows root origin to change the maximum number of members in society. Max membership count must be greater than 1. 

  The dispatch origin for this call must be from _ROOT_. 

  Parameters: 

  - `max` - The maximum number of members for the society.

  \# \<weight>

   

  - One storage write to update the max. O(1)

  - One event.

  Total Complexity: O(1) 

  \# \</weight> 
 
### unbid(pos: `u32`)
- **interface**: `api.tx.society.unbid`
- **summary**:   A bidder can remove their bid for entry into society. By doing so, they will have their candidate deposit returned or they will unvouch their voucher. 

  Payment: The bid deposit is unreserved if the user made a bid. 

  The dispatch origin for this call must be _Signed_ and a bidder. 

  Parameters: 

  - `pos`: Position in the `Bids` vector of the bid who wants to unbid.

  \# \<weight>

   Key: B (len of bids), X (balance unreserve) 

  - One storage read and write to retrieve and update the bids. O(B)

  - Either one unreserve balance action O(X) or one vouching storage removal. O(1)

  - One event.

  Total Complexity: O(B + X) 

  \# \</weight> 
 
### unfound()
- **interface**: `api.tx.society.unfound`
- **summary**:   Annul the founding of the society. 

  The dispatch origin for this call must be Signed, and the signing account must be both the `Founder` and the `Head`. This implies that it may only be done when there is one member. 

  \# \<weight>

   

  - Two storage reads O(1).

  - Four storage removals O(1).

  - One event.

  Total Complexity: O(1) 

  \# \</weight> 
 
### unvouch(pos: `u32`)
- **interface**: `api.tx.society.unvouch`
- **summary**:   As a vouching member, unvouch a bid. This only works while vouched user is only a bidder (and not a candidate). 

  The dispatch origin for this call must be _Signed_ and a vouching member. 

  Parameters: 

  - `pos`: Position in the `Bids` vector of the bid who should be unvouched.

  \# \<weight>

   Key: B (len of bids) 

  - One storage read O(1) to check the signer is a vouching member.

  - One storage mutate to retrieve and update the bids. O(B)

  - One vouching storage removal. O(1)

  - One event.

  Total Complexity: O(B) 

  \# \</weight> 
 
### vote(candidate: `<T::Lookup as StaticLookup>::Source`, approve: `bool`)
- **interface**: `api.tx.society.vote`
- **summary**:   As a member, vote on a candidate. 

  The dispatch origin for this call must be _Signed_ and a member. 

  Parameters: 

  - `candidate`: The candidate that the member would like to bid on.

  - `approve`: A boolean which says if the candidate should be             approved (`true`) or rejected (`false`). 

  \# \<weight>

   Key: C (len of candidates), M (len of members) 

  - One storage read O(M) and O(log M) search to check user is a member.

  - One account lookup.

  - One storage read O(C) and O(C) search to check that user is a candidate.

  - One storage write to add vote to votes. O(1)

  - One event.

  Total Complexity: O(M + logM + C) 

  \# \</weight> 
 
### vouch(who: `T::AccountId`, value: `BalanceOf<T, I>`, tip: `BalanceOf<T, I>`)
- **interface**: `api.tx.society.vouch`
- **summary**:   As a member, vouch for someone to join society by placing a bid on their behalf. 

  There is no deposit required to vouch for a new bid, but a member can only vouch for one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by the suspension judgement origin, the member will be banned from vouching again. 

  As a vouching member, you can claim a tip if the candidate is accepted. This tip will be paid as a portion of the reward the member will receive for joining the society. 

  The dispatch origin for this call must be _Signed_ and a member. 

  Parameters: 

  - `who`: The user who you would like to vouch for.

  - `value`: The total reward to be paid between you and the candidate if they becomea member in the society. 

  - `tip`: Your cut of the total `value` payout when the candidate is inducted intothe society. Tips larger than `value` will be saturated upon payout. 

  \# \<weight>

   Key: B (len of bids), C (len of candidates), M (len of members) 

  - Storage Reads:

  	- One storage read to retrieve all members. O(M)

  	- One storage read to check member is not already vouching. O(1)

  	- One storage read to check for suspended candidate. O(1)

  	- One storage read to check for suspended member. O(1)

  	- One storage read to retrieve all current bids. O(B)

  	- One storage read to retrieve all current candidates. O(C)

  - Storage Writes:

  	- One storage write to insert vouching status to the member. O(1)

  	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization w/ read)

  	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)

  - Notable Computation:

  	- O(log M) search to check sender is a member.

  	- O(B + C + log M) search to check user is not already a part of society.

  	- O(log B) search to insert the new bid sorted.

  - External Module Operations:

  	- One balance reserve operation. O(X)

  	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.

  - Events:

  	- One event for vouch.

  	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.

  Total Complexity: O(M + B + C + logM + logB + X) 

  \# \</weight> 

___


## staking
 
### bond(controller: `<T::Lookup as StaticLookup>::Source`, value: `Compact<BalanceOf<T>>`, payee: `RewardDestination`)
- **interface**: `api.tx.staking.bond`
- **summary**:   Take the origin account as a stash and lock up `value` of its balance. `controller` will be the account that controls it. 

  `value` must be more than the `minimum_balance` specified by `T::Currency`. 

  The dispatch origin for this call must be _Signed_ by the stash account. 

  Emits `Bonded`. 

  \# \<weight>

   

  - Independent of the arguments. Moderate complexity.

  - O(1).

  - Three extra DB entries.

  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless the `origin` falls below _existential deposit_ and gets removed as dust. 

  \# \</weight> 
 
### bondExtra(max_additional: `Compact<BalanceOf<T>>`)
- **interface**: `api.tx.staking.bondExtra`
- **summary**:   Add some extra amount that have appeared in the stash `free_balance` into the balance up for staking. 

  Use this if there are additional funds in your stash account that you wish to bond. Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount that can be added. 

  The dispatch origin for this call must be _Signed_ by the stash, not the controller and it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Bonded`. 

  \# \<weight>

   

  - Independent of the arguments. Insignificant complexity.

  - O(1).

  - One DB entry.

  \# \</weight> 
 
### cancelDeferredSlash(era: `EraIndex`, slash_indices: `Vec<u32>`)
- **interface**: `api.tx.staking.cancelDeferredSlash`
- **summary**:   Cancel enactment of a deferred slash. Can be called by either the root origin or the `T::SlashCancelOrigin`. passing the era and indices of the slashes for that era to kill. 

  \# \<weight>

   

  - One storage write.

  \# \</weight> 
 
### chill()
- **interface**: `api.tx.staking.chill`
- **summary**:   Declare no desire to either validate or nominate. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  \# \<weight>

   

  - Independent of the arguments. Insignificant complexity.

  - Contains one read.

  - Writes are limited to the `origin` account key.

  \# \</weight> 
 
### forceNewEra()
- **interface**: `api.tx.staking.forceNewEra`
- **summary**:   Force there to be a new era at the end of the next session. After this, it will be reset to normal (non-forced) behaviour. 

  \# \<weight>

   

  - No arguments.

  \# \</weight> 
 
### forceNewEraAlways()
- **interface**: `api.tx.staking.forceNewEraAlways`
- **summary**:   Force there to be a new era at the end of sessions indefinitely. 

  \# \<weight>

   

  - One storage write

  \# \</weight> 
 
### forceNoEras()
- **interface**: `api.tx.staking.forceNoEras`
- **summary**:   Force there to be no new eras indefinitely. 

  \# \<weight>

   

  - No arguments.

  \# \</weight> 
 
### forceUnstake(stash: `T::AccountId`)
- **interface**: `api.tx.staking.forceUnstake`
- **summary**:   Force a current staker to become completely unstaked, immediately. 
 
### nominate(targets: `Vec<<T::Lookup as StaticLookup>::Source>`)
- **interface**: `api.tx.staking.nominate`
- **summary**:   Declare the desire to nominate `targets` for the origin controller. 

  Effects will be felt at the beginning of the next era. This can only be called when [`EraElectionStatus`] is `Closed`. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  \# \<weight>

   

  - The transaction's complexity is proportional to the size of `targets`,which is capped at CompactAssignments::LIMIT. 

  - Both the reads and writes follow a similar pattern.

  \# \</weight> 
 
### payoutNominator(era: `EraIndex`, validators: `Vec<(T::AccountId, u32)>`)
- **interface**: `api.tx.staking.payoutNominator`
- **summary**:   

  **This extrinsic will be removed after `MigrationEra + HistoryDepth` has passed, givingopportunity for users to claim all rewards before moving to Simple Payouts. After this time, you should use `payout_stakers` instead.** 

  Make one nominator's payout for one era. 

  - `who` is the controller account of the nominator to pay out. 

  - `era` may not be lower than one following the most recently paid era. If it is higher,  then it indicates an instruction to skip the payout of all previous eras. 

  - `validators` is the list of all validators that `who` had exposure to during `era`,  alongside the index of `who` in the clipped exposure of the validator.   I.e. each element is a tuple of   `(validator, index of `who` in clipped exposure of validator)`.   If it is incomplete, then less than the full reward will be paid out.   It must not exceed `MAX_NOMINATIONS`. 

  WARNING: once an era is payed for a validator such validator can't claim the payout of previous era. 

  WARNING: Incorrect arguments here can result in loss of payout. Be very careful. 

  \# \<weight>

   

  - Number of storage read of `O(validators)`; `validators` is the argument of the call,  and is bounded by `MAX_NOMINATIONS`. 

  - Each storage read is `O(N)` size and decode complexity; `N` is the  maximum  nominations that can be given to a single validator. 

  - Computation complexity: `O(MAX_NOMINATIONS * logN)`; `MAX_NOMINATIONS` is the  maximum number of validators that may be nominated by a single nominator, it is   bounded only economically (all nominators are required to place a minimum stake). 

  \# \</weight> 
 
### payoutStakers(validator_stash: `T::AccountId`, era: `EraIndex`)
- **interface**: `api.tx.staking.payoutStakers`
- **summary**:   Pay out all the stakers behind a single validator for a single era. 

  - `validator_stash` is the stash account of the validator. Their nominators, up to   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards. 

  - `era` may be any era between `[current_era - history_depth; current_era]`.

  The origin of this call must be _Signed_. Any account can call this function, even if it is not one of the stakers. 

  This can only be called when [`EraElectionStatus`] is `Closed`. 

  \# \<weight>

   

  - Time complexity: at most O(MaxNominatorRewardedPerValidator).

  - Contains a limited number of reads and writes.

  \# \</weight> 
 
### payoutValidator(era: `EraIndex`)
- **interface**: `api.tx.staking.payoutValidator`
- **summary**:   

  **This extrinsic will be removed after `MigrationEra + HistoryDepth` has passed, givingopportunity for users to claim all rewards before moving to Simple Payouts. After this time, you should use `payout_stakers` instead.** 

  Make one validator's payout for one era. 

  - `who` is the controller account of the validator to pay out. 

  - `era` may not be lower than one following the most recently paid era. If it is higher,  then it indicates an instruction to skip the payout of all previous eras. 

  WARNING: once an era is payed for a validator such validator can't claim the payout of previous era. 

  WARNING: Incorrect arguments here can result in loss of payout. Be very careful. 

  \# \<weight>

   

  - Time complexity: O(1).

  - Contains a limited number of reads and writes.

  \# \</weight> 
 
### reapStash(stash: `T::AccountId`)
- **interface**: `api.tx.staking.reapStash`
- **summary**:   Remove all data structure concerning a staker/stash once its balance is zero. This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone and the target `stash` must have no funds left. 

  This can be called from any origin. 

  - `stash`: The stash account to reap. Its balance must be zero. 
 
### rebond(value: `Compact<BalanceOf<T>>`)
- **interface**: `api.tx.staking.rebond`
- **summary**:   Rebond a portion of the stash scheduled to be unlocked. 

  The dispatch origin must be signed by the controller, and it can be only called when [`EraElectionStatus`] is `Closed`. 

  \# \<weight>

   

  - Time complexity: O(1). Bounded by `MAX_UNLOCKING_CHUNKS`.

  - Storage changes: Can't increase storage, only decrease it.

  \# \</weight> 
 
### setController(controller: `<T::Lookup as StaticLookup>::Source`)
- **interface**: `api.tx.staking.setController`
- **summary**:   (Re-)set the controller of a stash. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the stash, not the controller. 

  \# \<weight>

   

  - Independent of the arguments. Insignificant complexity.

  - Contains a limited number of reads.

  - Writes are limited to the `origin` account key.

  \# \</weight> 
 
### setHistoryDepth(new_history_depth: `Compact<EraIndex>`)
- **interface**: `api.tx.staking.setHistoryDepth`
- **summary**:   Set history_depth value. 

  Origin must be root. 
 
### setInvulnerables(validators: `Vec<T::AccountId>`)
- **interface**: `api.tx.staking.setInvulnerables`
- **summary**:   Set the validators who cannot be slashed (if any). 
 
### setPayee(payee: `RewardDestination`)
- **interface**: `api.tx.staking.setPayee`
- **summary**:   (Re-)set the payment target for a controller. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

  \# \<weight>

   

  - Independent of the arguments. Insignificant complexity.

  - Contains a limited number of reads.

  - Writes are limited to the `origin` account key.

  \# \</weight> 
 
### setValidatorCount(new: `Compact<u32>`)
- **interface**: `api.tx.staking.setValidatorCount`
- **summary**:   The ideal number of validators. 
 
### submitElectionSolution(winners: `Vec<ValidatorIndex>`, compact_assignments: `CompactAssignments`, score: `PhragmenScore`, era: `EraIndex`)
- **interface**: `api.tx.staking.submitElectionSolution`
- **summary**:   Submit a phragmen result to the chain. If the solution: 

  1. is valid. 2. has a better score than a potentially existing solution on chain. 

  then, it will be _put_ on chain. 

  A solution consists of two pieces of data: 

  1. `winners`: a flat vector of all the winners of the round. 2. `assignments`: the compact version of an assignment vector that encodes the edge    weights. 

  Both of which may be computed using [`phragmen`], or any other algorithm. 

  Additionally, the submitter must provide: 

  - The `score` that they claim their solution has. 

  Both validators and nominators will be represented by indices in the solution. The indices should respect the corresponding types ([`ValidatorIndex`] and [`NominatorIndex`]). Moreover, they should be valid when used to index into [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the solution to be rejected. These two storage items are set during the election window and may be used to determine the indices. 

  A solution is valid if: 

  0. It is submitted when [`EraElectionStatus`] is `Open`. 1. Its claimed score is equal to the score computed on-chain. 2. Presents the correct number of winners. 3. All indexes must be value according to the snapshot vectors. All edge values must    also be correct and should not overflow the granularity of the ratio type (i.e. 256    or billion). 4. For each edge, all targets are actually nominated by the voter. 5. Has correct self-votes. 

  A solutions score is consisted of 3 parameters: 

  1. `min { support.total }` for each support of a winner. This value should be maximized. 2. `sum { support.total }` for each support of a winner. This value should be minimized. 3. `sum { support.total^2 }` for each support of a winner. This value should be    minimized (to ensure less variance) 

  \# \<weight>

   E: number of edges. m: size of winner committee. n: number of nominators. d: edge degree (16 for now) v: number of on-chain validator candidates. 

  NOTE: given a solution which is reduced, we can enable a new check the ensure `|E| < n + m`. We don't do this _yet_, but our offchain worker code executes it nonetheless. 

  major steps (all done in `check_and_replace_solution`): 

  - Storage: O(1) read `ElectionStatus`. 

  - Storage: O(1) read `PhragmenScore`.

  - Storage: O(1) read `ValidatorCount`.

  - Storage: O(1) length read from `SnapshotValidators`.

  - Storage: O(v) reads of `AccountId` to fetch `snapshot_validators`. 

  - Memory: O(m) iterations to map winner index to validator id.

  - Storage: O(n) reads `AccountId` to fetch `snapshot_nominators`.

  - Memory: O(n + m) reads to map index to `AccountId` for un-compact.

  - Storage: O(e) accountid reads from `Nomination` to read correct nominations. 

  - Storage: O(e) calls into `slashable_balance_of_vote_weight` to convert ratio to staked.

  - Memory: build_support_map. O(e). 

  - Memory: evaluate_support: O(E).

  - Storage: O(e) writes to `QueuedElected`. 

  - Storage: O(1) write to `QueuedScore`

  The weight of this call is 1/10th of the blocks total weight. 

  \# \</weight> 
 
### submitElectionSolutionUnsigned(winners: `Vec<ValidatorIndex>`, compact_assignments: `CompactAssignments`, score: `PhragmenScore`, era: `EraIndex`)
- **interface**: `api.tx.staking.submitElectionSolutionUnsigned`
- **summary**:   Unsigned version of `submit_election_solution`. 

  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions from the local node to be included. In other words, only the block author can include a transaction in the block. 
 
### unbond(value: `Compact<BalanceOf<T>>`)
- **interface**: `api.tx.staking.unbond`
- **summary**:   Schedule a portion of the stash to be unlocked ready for transfer out after the bond period ends. If this leaves an amount actively bonded less than T::Currency::minimum_balance(), then it is increased to the full amount. 

  Once the unlock period is done, you can call `withdraw_unbonded` to actually move the funds out of management ready for transfer. 

  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`) can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need to be called first to remove some of the chunks (if possible). 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Unbonded`. 

  See also [`Call::withdraw_unbonded`]. 

  \# \<weight>

   

  - Independent of the arguments. Limited but potentially exploitable complexity.

  - Contains a limited number of reads.

  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)  will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.   The only way to clean the aforementioned storage item is also user-controlled via   `withdraw_unbonded`. 

  - One DB entry.</weight> 
 
### validate(prefs: `ValidatorPrefs`)
- **interface**: `api.tx.staking.validate`
- **summary**:   Declare the desire to validate for the origin controller. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  \# \<weight>

   

  - Independent of the arguments. Insignificant complexity.

  - Contains a limited number of reads.

  - Writes are limited to the `origin` account key.

  \# \</weight> 
 
### withdrawUnbonded()
- **interface**: `api.tx.staking.withdrawUnbonded`
- **summary**:   Remove any unlocked chunks from the `unlocking` queue from our management. 

  This essentially frees up that balance to be used by the stash account to do whatever it wants. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Withdrawn`. 

  See also [`Call::unbond`]. 

  \# \<weight>

   

  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist. It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is  indirectly user-controlled. See [`unbond`] for more detail. 

  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.

  - Writes are limited to the `origin` account key.

  \# \</weight> 

___


## sudo
 
### setKey(new: `<T::Lookup as StaticLookup>::Source`)
- **interface**: `api.tx.sudo.setKey`
- **summary**:   Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key. 

  The dispatch origin for this call must be _Signed_. 

  \# \<weight>

   

  - O(1).

  - Limited storage reads.

  - One DB change.

  \# \</weight> 
 
### sudo(call: `Box<<T as Trait>::Call>`)
- **interface**: `api.tx.sudo.sudo`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Root` origin. 

  The dispatch origin for this call must be _Signed_. 

  \# \<weight>

   

  - O(1).

  - Limited storage reads.

  - One DB write (event).

  - Weight of derivative `call` execution + 10,000.

  \# \</weight> 
 
### sudoAs(who: `<T::Lookup as StaticLookup>::Source`, call: `Box<<T as Trait>::Call>`)
- **interface**: `api.tx.sudo.sudoAs`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Signed` origin from a given account. 

  The dispatch origin for this call must be _Signed_. 

  \# \<weight>

   

  - O(1).

  - Limited storage reads.

  - One DB write (event).

  - Weight of derivative `call` execution + 10,000.

  \# \</weight> 

___


## system
 
### fillBlock(_ratio: `Perbill`)
- **interface**: `api.tx.system.fillBlock`
- **summary**:   A dispatch that will fill the block weight up to the given ratio. 
 
### killPrefix(prefix: `Key`)
- **interface**: `api.tx.system.killPrefix`
- **summary**:   Kill all storage items with a key that starts with the given prefix. 

  \# \<weight>

   

  - `O(P)` where `P` amount of keys with prefix `prefix`

  - `P` storage deletions.

  \# \</weight> 
 
### killStorage(keys: `Vec<Key>`)
- **interface**: `api.tx.system.killStorage`
- **summary**:   Kill some items from storage. 

  \# \<weight>

   

  - `O(VK)` where `V` length of `keys` and `K` length of one key

  - `V` storage deletions.

  \# \</weight> 
 
### remark(_remark: `Vec<u8>`)
- **interface**: `api.tx.system.remark`
- **summary**:   Make some on-chain remark. 

  \# \<weight>

   

  - `O(1)`

  \# \</weight> 
 
### setChangesTrieConfig(changes_trie_config: `Option<ChangesTrieConfiguration>`)
- **interface**: `api.tx.system.setChangesTrieConfig`
- **summary**:   Set the new changes trie configuration. 

  \# \<weight>

   

  - `O(D)` where `D` length of `Digest`

  - 1 storage write or delete (codec `O(1)`).

  - 1 call to `deposit_log`: `O(D)` (which depends on the length of `Digest`)

  \# \</weight> 
 
### setCode(code: `Vec<u8>`)
- **interface**: `api.tx.system.setCode`
- **summary**:   Set the new runtime code. 

  \# \<weight>

   

  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`

  - 1 storage write (codec `O(C)`).

  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).

  - 1 event.

  \# \</weight> 
 
### setCodeWithoutChecks(code: `Vec<u8>`)
- **interface**: `api.tx.system.setCodeWithoutChecks`
- **summary**:   Set the new runtime code without doing any checks of the given `code`. 

  \# \<weight>

   

  - `O(C)` where `C` length of `code`

  - 1 storage write (codec `O(C)`).

  - 1 event.

  \# \</weight> 
 
### setHeapPages(pages: `u64`)
- **interface**: `api.tx.system.setHeapPages`
- **summary**:   Set the number of pages in the WebAssembly environment's heap. 

  \# \<weight>

   

  - `O(1)`

  - 1 storage write.

  \# \</weight> 
 
### setStorage(items: `Vec<KeyValue>`)
- **interface**: `api.tx.system.setStorage`
- **summary**:   Set some items of storage. 

  \# \<weight>

   

  - `O(I)` where `I` length of `items`

  - `I` storage writes (`O(1)`).

  \# \</weight> 
 
### suicide()
- **interface**: `api.tx.system.suicide`
- **summary**:   Kill the sending account, assuming there are no references outstanding and the composite data is equal to its default value. 

  \# \<weight>

   

  - `O(1)`

  - 1 storage read and deletion.

  \# \</weight> 

___


## technicalCommittee
 
### close(proposal: `T::Hash`, index: `Compact<ProposalIndex>`)
- **interface**: `api.tx.technicalCommittee.close`
- **summary**:   May be called by any signed account after the voting duration has ended in order to finish voting and close the proposal. 

  Abstentions are counted as rejections unless there is a prime member set and the prime member cast an approval. 

  - the weight of `proposal` preimage. 

  - up to three events deposited.

  - one read, two removals, one mutation. (plus three static reads.)

  - computation and i/o `O(P + L + M)` where:

    - `M` is number of members,

    - `P` is number of active proposals,

    - `L` is the encoded length of `proposal` preimage.
 
### execute(proposal: `Box<<T as Trait<I>>::Proposal>`)
- **interface**: `api.tx.technicalCommittee.execute`
- **summary**:   Dispatch a proposal from a member using the `Member` origin. 

  Origin must be a member of the collective. 
 
### propose(threshold: `Compact<MemberCount>`, proposal: `Box<<T as Trait<I>>::Proposal>`)
- **interface**: `api.tx.technicalCommittee.propose`
- **summary**:   \# \<weight>

   

  - Bounded storage reads and writes.

  - Argument `threshold` has bearing on weight.

  \# \</weight> 
 
### setMembers(new_members: `Vec<T::AccountId>`, prime: `Option<T::AccountId>`)
- **interface**: `api.tx.technicalCommittee.setMembers`
- **summary**:   Set the collective's membership. 

  - `new_members`: The new member list. Be nice to the chain and 

  - `prime`: The prime member whose vote sets the default.

  Requires root origin. 
 
### vote(proposal: `T::Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: `api.tx.technicalCommittee.vote`
- **summary**:   \# \<weight>

   

  - Bounded storage read and writes.

  - Will be slightly heavier if the proposal is approved / disapproved after the vote.

  \# \</weight> 

___


## technicalMembership
 
### addMember(who: `T::AccountId`)
- **interface**: `api.tx.technicalMembership.addMember`
- **summary**:   Add a member `who` to the set. 

  May only be called from `AddOrigin` or root. 
 
### changeKey(new: `T::AccountId`)
- **interface**: `api.tx.technicalMembership.changeKey`
- **summary**:   Swap out the sending member for some other key `new`. 

  May only be called from `Signed` origin of a current member. 

  Prime membership is passed from the origin account to `new`, if extant. 
 
### clearPrime()
- **interface**: `api.tx.technicalMembership.clearPrime`
- **summary**:   Remove the prime member if it exists. 
 
### removeMember(who: `T::AccountId`)
- **interface**: `api.tx.technicalMembership.removeMember`
- **summary**:   Remove a member `who` from the set. 

  May only be called from `RemoveOrigin` or root. 
 
### resetMembers(members: `Vec<T::AccountId>`)
- **interface**: `api.tx.technicalMembership.resetMembers`
- **summary**:   Change the membership to a new set, disregarding the existing membership. Be nice and pass `members` pre-sorted. 

  May only be called from `ResetOrigin` or root. 
 
### setPrime(who: `T::AccountId`)
- **interface**: `api.tx.technicalMembership.setPrime`
- **summary**:   Set the prime member. Must be a current member. 
 
### swapMember(remove: `T::AccountId`, add: `T::AccountId`)
- **interface**: `api.tx.technicalMembership.swapMember`
- **summary**:   Swap out one member `remove` for another `add`. 

  May only be called from `SwapOrigin` or root. 

  Prime membership is *not* passed from `remove` to `add`, if extant. 

___


## timestamp
 
### set(now: `Compact<T::Moment>`)
- **interface**: `api.tx.timestamp.set`
- **summary**:   Set the current time. 

  This call should be invoked exactly once per block. It will panic at the finalization phase, if this call hasn't been invoked by that time. 

  The timestamp should be greater than the previous one by the amount specified by `MinimumPeriod`. 

  The dispatch origin for this call must be `Inherent`. 

  \# \<weight>

   

  - `O(T)` where `T` complexity of `on_timestamp_set`

  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)

  - 1 event handler `on_timestamp_set` `O(T)`.

  - Benchmark: 8.523 (min squares analysis)

    - NOTE: This benchmark was done for a runtime with insignificant `on_timestamp_set` handlers.    New benchmarking is needed when adding new handlers. 

  \# \</weight> 

___


## treasury
 
### approveProposal(proposal_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.treasury.approveProposal`
- **summary**:   Approve a proposal. At a later time, the proposal will be allocated to the beneficiary and the original deposit will be returned. 

  \# \<weight>

   

  - Complexity: O(1).

  - DbReads: `Proposals`, `Approvals`

  - DbWrite: `Approvals`

  \# \</weight> 
 
### closeTip(hash: `T::Hash`)
- **interface**: `api.tx.treasury.closeTip`
- **summary**:   Close and payout a tip. 

  The dispatch origin for this call must be _Signed_. 

  The tip identified by `hash` must have finished its countdown period. 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the original tip `reason` and the beneficiary account ID. 

  \# \<weight>

   

  - Complexity: `O(T)` where `T` is the number of tippers.  decoding `Tipper` vec of length `T`.   `T` is charged as upper bound given by `ContainsLengthBound`.   The actual cost depends on the implementation of `T::Tippers`. 

  - DbReads: `Tips`, `Tippers`, `tip finder`

  - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`

  \# \</weight> 
 
### proposeSpend(value: `Compact<BalanceOf<T>>`, beneficiary: `<T::Lookup as StaticLookup>::Source`)
- **interface**: `api.tx.treasury.proposeSpend`
- **summary**:   Put forward a suggestion for spending. A deposit proportional to the value is reserved and slashed if the proposal is rejected. It is returned once the proposal is awarded. 

  \# \<weight>

   

  - Complexity: O(1)

  - DbReads: `ProposalCount`, `origin account`

  - DbWrites: `ProposalCount`, `Proposals`, `origin account`

  \# \</weight> 
 
### rejectProposal(proposal_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.treasury.rejectProposal`
- **summary**:   Reject a proposed spend. The original deposit will be slashed. 

  \# \<weight>

   

  - Complexity: O(1)

  - DbReads: `Proposals`, `rejected proposer account`

  - DbWrites: `Proposals`, `rejected proposer account`

  \# \</weight> 
 
### reportAwesome(reason: `Vec<u8>`, who: `T::AccountId`)
- **interface**: `api.tx.treasury.reportAwesome`
- **summary**:   Report something `reason` that deserves a tip and claim any eventual the finder's fee. 

  The dispatch origin for this call must be _Signed_. 

  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as `TipReportDepositPerByte` for each byte in `reason`. 

  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be   a UTF-8-encoded URL. 

  - `who`: The account which should be credited for the tip.

  Emits `NewTip` if successful. 

  \# \<weight>

   

  - Complexity: `O(R)` where `R` length of `reason`.

    - encoding and hashing of 'reason'

  - DbReads: `Reasons`, `Tips`, `who account data`

  - DbWrites: `Tips`, `who account data`

  \# \</weight> 
 
### retractTip(hash: `T::Hash`)
- **interface**: `api.tx.treasury.retractTip`
- **summary**:   Retract a prior tip-report from `report_awesome`, and cancel the process of tipping. 

  If successful, the original deposit will be unreserved. 

  The dispatch origin for this call must be _Signed_ and the tip identified by `hash` must have been reported by the signing account through `report_awesome` (and not through `tip_new`). 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the original tip `reason` and the beneficiary account ID. 

  Emits `TipRetracted` if successful. 

  \# \<weight>

   

  - Complexity: `O(1)`

    - Depends on the length of `T::Hash` which is fixed.

  - DbReads: `Tips`, `origin account`

  - DbWrites: `Reasons`, `Tips`, `origin account`

  \# \</weight> 
 
### tip(hash: `T::Hash`, tip_value: `BalanceOf<T>`)
- **interface**: `api.tx.treasury.tip`
- **summary**:   Declare a tip value for an already-open tip. 

  The dispatch origin for this call must be _Signed_ and the signing account must be a member of the `Tippers` set. 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary   account ID. 

  - `tip_value`: The amount of tip that the sender would like to give. The median tip  value of active tippers will be given to the `who`. 

  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period has started. 

  \# \<weight>

   

  - Complexity: `O(T)` where `T` is the number of tippers.  decoding `Tipper` vec of length `T`, insert tip and check closing,   `T` is charged as upper bound given by `ContainsLengthBound`.   The actual cost depends on the implementation of `T::Tippers`. 

    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it   is weighted as if almost full i.e of length `T-1`. 

  - DbReads: `Tippers`, `Tips`

  - DbWrites: `Tips`

  \# \</weight> 
 
### tipNew(reason: `Vec<u8>`, who: `T::AccountId`, tip_value: `BalanceOf<T>`)
- **interface**: `api.tx.treasury.tipNew`
- **summary**:   Give a tip for something new; no finder's fee will be taken. 

  The dispatch origin for this call must be _Signed_ and the signing account must be a member of the `Tippers` set. 

  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be   a UTF-8-encoded URL. 

  - `who`: The account which should be credited for the tip.

  - `tip_value`: The amount of tip that the sender would like to give. The median tip  value of active tippers will be given to the `who`. 

  Emits `NewTip` if successful. 

  \# \<weight>

   

  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.

    - `O(T)`: decoding `Tipper` vec of length `T`    `T` is charged as upper bound given by `ContainsLengthBound`.     The actual cost depends on the implementation of `T::Tippers`. 

    - `O(R)`: hashing and encoding of reason of length `R`

  - DbReads: `Tippers`, `Reasons`

  - DbWrites: `Reasons`, `Tips`

  \# \</weight> 

___


## utility
 
### approveAsMulti(threshold: `u16`, other_signatories: `Vec<T::AccountId>`, maybe_timepoint: `Option<Timepoint<T::BlockNumber>>`, call_hash: `[u8; 32]`)
- **interface**: `api.tx.utility.approveAsMulti`
- **summary**:   Register approval for a dispatch to be made from a deterministic composite account if approved by a total of `threshold - 1` of `other_signatories`. 

  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or is cancelled. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it isnot the first approval, then it must be `Some`, with the timepoint (block number and transaction index) of the first approval transaction. 

  - `call_hash`: The hash of the call to be executed.

  NOTE: If this is the final approval, you will want to use `as_multi` instead. 

  \# \<weight>

   

  - `O(S)`.

  - Up to one balance-reserve or unreserve operation.

  - One passthrough operation, one insert, both `O(S)` where `S` is the number of  signatories. `S` is capped by `MaxSignatories`, with weight being proportional. 

  - One encode & hash, both of complexity `O(S)`.

  - Up to one binary search and insert (`O(logS + S)`).

  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.

  - One event.

  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a  deposit taken for its lifetime of   `MultisigDepositBase + threshold * MultisigDepositFactor`. 

  ----------------------------------

  - Base Weight:

      - Create: 44.71 + 0.088 * S

      - Approve: 31.48 + 0.116 * S

  - DB Weight:

      - Read: Multisig Storage, [Caller Account]

      - Write: Multisig Storage, [Caller Account]

  \# \</weight> 
 
### asMulti(threshold: `u16`, other_signatories: `Vec<T::AccountId>`, maybe_timepoint: `Option<Timepoint<T::BlockNumber>>`, call: `Box<<T as Trait>::Call>`)
- **interface**: `api.tx.utility.asMulti`
- **summary**:   Register approval for a dispatch to be made from a deterministic composite account if approved by a total of `threshold - 1` of `other_signatories`. 

  If there are enough, then dispatch the call. 

  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or is cancelled. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it isnot the first approval, then it must be `Some`, with the timepoint (block number and transaction index) of the first approval transaction. 

  - `call`: The call to be executed.

  NOTE: Unless this is the final approval, you will generally want to use `approve_as_multi` instead, since it only requires a hash of the call. 

  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise on success, result is `Ok` and the result from the interior call, if it was executed, may be found in the deposited `MultisigExecuted` event. 

  \# \<weight>

   

  - `O(S + Z + Call)`.

  - Up to one balance-reserve or unreserve operation.

  - One passthrough operation, one insert, both `O(S)` where `S` is the number of  signatories. `S` is capped by `MaxSignatories`, with weight being proportional. 

  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.

  - One encode & hash, both of complexity `O(S)`.

  - Up to one binary search and insert (`O(logS + S)`).

  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.

  - One event.

  - The weight of the `call`.

  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a  deposit taken for its lifetime of   `MultisigDepositBase + threshold * MultisigDepositFactor`. 

  -------------------------------

  - Base Weight:

      - Create: 46.55 + 0.089 * S µs

      - Approve: 34.03 + .112 * S µs

      - Complete: 40.36 + .225 * S µs

  - DB Weight:

      - Reads: Multisig Storage, [Caller Account]

      - Writes: Multisig Storage, [Caller Account]

  - Plus Call Weight

  \# \</weight> 
 
### asSub(index: `u16`, call: `Box<<T as Trait>::Call>`)
- **interface**: `api.tx.utility.asSub`
- **summary**:   Send a call through an indexed pseudonym of the sender. 

  The dispatch origin for this call must be _Signed_. 

  \# \<weight>

   

  - Base weight: 2.861 µs

  - Plus the weight of the `call`

  \# \</weight> 
 
### batch(calls: `Vec<<T as Trait>::Call>`)
- **interface**: `api.tx.utility.batch`
- **summary**:   Send a batch of dispatch calls. 

  This will execute until the first one fails and then stop. 

  May be called from any origin. 

  - `calls`: The calls to be dispatched from the same origin. 

  \# \<weight>

   

  - Base weight: 14.39 + .987 * c µs

  - Plus the sum of the weights of the `calls`.

  - Plus one additional event. (repeat read/write)

  \# \</weight> 

  This will return `Ok` in all circumstances. To determine the success of the batch, an event is deposited. If a call failed and the batch was interrupted, then the `BatchInterrupted` event is deposited, along with the number of successful calls made and the error of the failed call. If all were successful, then the `BatchCompleted` event is deposited. 
 
### cancelAsMulti(threshold: `u16`, other_signatories: `Vec<T::AccountId>`, timepoint: `Timepoint<T::BlockNumber>`, call_hash: `[u8; 32]`)
- **interface**: `api.tx.utility.cancelAsMulti`
- **summary**:   Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously for this operation will be unreserved on success. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `timepoint`: The timepoint (block number and transaction index) of the first approvaltransaction for this dispatch. 

  - `call_hash`: The hash of the call to be executed.

  \# \<weight>

   

  - `O(S)`.

  - Up to one balance-reserve or unreserve operation.

  - One passthrough operation, one insert, both `O(S)` where `S` is the number of  signatories. `S` is capped by `MaxSignatories`, with weight being proportional. 

  - One encode & hash, both of complexity `O(S)`.

  - One event.

  - I/O: 1 read `O(S)`, one remove.

  - Storage: removes one item.

  ----------------------------------

  - Base Weight: 37.6 + 0.084 * S

  - DB Weight:

      - Read: Multisig Storage, [Caller Account]

      - Write: Multisig Storage, [Caller Account]

  \# \</weight> 

___


## vesting
 
### vest()
- **interface**: `api.tx.vesting.vest`
- **summary**:   Unlock any vested funds of the sender account. 

  The dispatch origin for this call must be _Signed_ and the sender must have funds still locked under this module. 

  Emits either `VestingCompleted` or `VestingUpdated`. 

  \# \<weight>

   

  - `O(1)`.

  - DbWeight: 2 Reads, 2 Writes

      - Reads: Vesting Storage, Balances Locks, [Sender Account]

      - Writes: Vesting Storage, Balances Locks, [Sender Account]

  - Benchmark:

      - Unlocked: 48.76 + .048 * l µs (min square analysis)

      - Locked: 44.43 + .284 * l µs (min square analysis)

  - Using 50 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.

  \# \</weight> 
 
### vestOther(target: `<T::Lookup as StaticLookup>::Source`)
- **interface**: `api.tx.vesting.vestOther`
- **summary**:   Unlock any vested funds of a `target` account. 

  The dispatch origin for this call must be _Signed_. 

  - `target`: The account whose vested funds should be unlocked. Must have funds still locked under this module. 

  Emits either `VestingCompleted` or `VestingUpdated`. 

  \# \<weight>

   

  - `O(1)`.

  - DbWeight: 3 Reads, 3 Writes

      - Reads: Vesting Storage, Balances Locks, Target Account

      - Writes: Vesting Storage, Balances Locks, Target Account

  - Benchmark:

      - Unlocked: 44.3 + .294 * l µs (min square analysis)

      - Locked: 48.16 + .103 * l µs (min square analysis)

  - Using 50 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.

  \# \</weight> 
 
### vestedTransfer(target: `<T::Lookup as StaticLookup>::Source`, schedule: `VestingInfo<BalanceOf<T>, T::BlockNumber>`)
- **interface**: `api.tx.vesting.vestedTransfer`
- **summary**:   Create a vested transfer. 

  The dispatch origin for this call must be _Signed_. 

  - `target`: The account that should be transferred the vested funds. 

  - `amount`: The amount of funds to transfer and will be vested.

  - `schedule`: The vesting schedule attached to the transfer.

  Emits `VestingCreated`. 

  \# \<weight>

   

  - `O(1)`.

  - DbWeight: 3 Reads, 3 Writes

      - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]

      - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]

  - Benchmark: 100.3 + .365 * l µs (min square analysis)

  - Using 100 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.

  \# \</weight> 