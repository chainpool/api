[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["augment/query"](../modules/_augment_query_.md) › ["api/types/storage"](../modules/_augment_query_._api_types_storage_.md) › [AugmentedQueries](_augment_query_._api_types_storage_.augmentedqueries.md)

# Interface: AugmentedQueries ‹**ApiType**›

## Type parameters

▪ **ApiType**

## Hierarchy

* **AugmentedQueries**

## Index

### Properties

* [authorship](_augment_query_._api_types_storage_.augmentedqueries.md#authorship)
* [babe](_augment_query_._api_types_storage_.augmentedqueries.md#babe)
* [balances](_augment_query_._api_types_storage_.augmentedqueries.md#balances)
* [contracts](_augment_query_._api_types_storage_.augmentedqueries.md#contracts)
* [council](_augment_query_._api_types_storage_.augmentedqueries.md#council)
* [democracy](_augment_query_._api_types_storage_.augmentedqueries.md#democracy)
* [elections](_augment_query_._api_types_storage_.augmentedqueries.md#elections)
* [grandpa](_augment_query_._api_types_storage_.augmentedqueries.md#grandpa)
* [identity](_augment_query_._api_types_storage_.augmentedqueries.md#identity)
* [imOnline](_augment_query_._api_types_storage_.augmentedqueries.md#imonline)
* [indices](_augment_query_._api_types_storage_.augmentedqueries.md#indices)
* [multisig](_augment_query_._api_types_storage_.augmentedqueries.md#multisig)
* [offences](_augment_query_._api_types_storage_.augmentedqueries.md#offences)
* [proxy](_augment_query_._api_types_storage_.augmentedqueries.md#proxy)
* [randomnessCollectiveFlip](_augment_query_._api_types_storage_.augmentedqueries.md#randomnesscollectiveflip)
* [recovery](_augment_query_._api_types_storage_.augmentedqueries.md#recovery)
* [scheduler](_augment_query_._api_types_storage_.augmentedqueries.md#scheduler)
* [session](_augment_query_._api_types_storage_.augmentedqueries.md#session)
* [society](_augment_query_._api_types_storage_.augmentedqueries.md#society)
* [staking](_augment_query_._api_types_storage_.augmentedqueries.md#staking)
* [sudo](_augment_query_._api_types_storage_.augmentedqueries.md#sudo)
* [system](_augment_query_._api_types_storage_.augmentedqueries.md#system)
* [technicalCommittee](_augment_query_._api_types_storage_.augmentedqueries.md#technicalcommittee)
* [technicalMembership](_augment_query_._api_types_storage_.augmentedqueries.md#technicalmembership)
* [timestamp](_augment_query_._api_types_storage_.augmentedqueries.md#timestamp)
* [transactionPayment](_augment_query_._api_types_storage_.augmentedqueries.md#transactionpayment)
* [treasury](_augment_query_._api_types_storage_.augmentedqueries.md#treasury)
* [vesting](_augment_query_._api_types_storage_.augmentedqueries.md#vesting)

## Properties

###  authorship

• **authorship**: *object*

*Defined in [api/src/augment/query.ts:34](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L34)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **author**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **didSetUncles**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **uncles**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  babe

• **babe**: *object*

*Defined in [api/src/augment/query.ts:49](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L49)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **authorities**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentSlot**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **epochIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **genesisSlot**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **initialized**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lateness**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextEpochConfig**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextRandomness**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **randomness**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **segmentIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **underConstruction**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  balances

• **balances**: *object*

*Defined in [api/src/augment/query.ts:119](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L119)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **account**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **locks**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **storageVersion**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **totalIssuance**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  contracts

• **contracts**: *object*

*Defined in [api/src/augment/query.ts:143](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L143)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **accountCounter**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **codeStorage**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **contractInfoOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentSchedule**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **pristineCode**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  council

• **council**: *object*

*Defined in [api/src/augment/query.ts:168](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L168)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **members**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **prime**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **voting**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  democracy

• **democracy**: *object*

*Defined in [api/src/augment/query.ts:196](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L196)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **blacklist**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **cancellations**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **depositOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lastTabledWasExternal**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **locks**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lowestUnbaked**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextExternal**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **preimages**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **publicPropCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **publicProps**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **referendumCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **referendumInfoOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **storageVersion**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **votingOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  elections

• **elections**: *object*

*Defined in [api/src/augment/query.ts:274](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L274)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **candidates**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **electionRounds**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **members**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **runnersUp**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **voting**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  grandpa

• **grandpa**: *object*

*Defined in [api/src/augment/query.ts:300](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L300)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **currentSetId**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextForced**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **pendingChange**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **setIdSession**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **stalled**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **state**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  identity

• **identity**: *object*

*Defined in [api/src/augment/query.ts:331](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L331)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **identityOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **registrars**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **subsOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **superOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  imOnline

• **imOnline**: *object*

*Defined in [api/src/augment/query.ts:360](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L360)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **authoredBlocks**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **heartbeatAfter**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **keys**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **receivedHeartbeats**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  indices

• **indices**: *object*

*Defined in [api/src/augment/query.ts:386](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L386)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **accounts**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  multisig

• **multisig**: *object*

*Defined in [api/src/augment/query.ts:393](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L393)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **multisigs**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  offences

• **offences**: *object*

*Defined in [api/src/augment/query.ts:400](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L400)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **concurrentReportsIndex**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **deferredOffences**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **reports**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **reportsByKindIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  proxy

• **proxy**: *object*

*Defined in [api/src/augment/query.ts:425](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L425)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **proxies**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  randomnessCollectiveFlip

• **randomnessCollectiveFlip**: *object*

*Defined in [api/src/augment/query.ts:433](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L433)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **randomMaterial**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  recovery

• **recovery**: *object*

*Defined in [api/src/augment/query.ts:442](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L442)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **activeRecoveries**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proxy**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **recoverable**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  scheduler

• **scheduler**: *object*

*Defined in [api/src/augment/query.ts:462](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L462)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **agenda**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lookup**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  session

• **session**: *object*

*Defined in [api/src/augment/query.ts:473](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L473)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **currentIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **disabledValidators**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **keyOwner**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextKeys**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **queuedChanged**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **queuedKeys**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validators**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  society

• **society**: *object*

*Defined in [api/src/augment/query.ts:508](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L508)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **bids**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **candidates**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **defender**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **defenderVotes**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **founder**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **head**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **maxMembers**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **members**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **payouts**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **pot**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **rules**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **strikes**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **suspendedCandidates**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **suspendedMembers**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **votes**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **vouching**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  staking

• **staking**: *object*

*Defined in [api/src/augment/query.ts:576](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L576)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **activeEra**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **bonded**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **bondedEras**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **canceledSlashPayout**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentEra**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **earliestUnappliedSlash**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **eraElectionStatus**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasRewardPoints**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasStakers**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasStakersClipped**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasStartSessionIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasTotalStake**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasValidatorPrefs**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasValidatorReward**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **forceEra**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **historyDepth**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **invulnerables**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **isCurrentSessionFinal**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **ledger**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **minimumValidatorCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nominatorSlashInEra**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nominators**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **payee**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **queuedElected**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **queuedScore**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **slashRewardFraction**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **slashingSpans**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **snapshotNominators**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **snapshotValidators**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **spanSlash**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **storageVersion**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **unappliedSlashes**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validatorCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validatorSlashInEra**: *[AugmentedQueryDoubleMap](../modules/_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validators**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  sudo

• **sudo**: *object*

*Defined in [api/src/augment/query.ts:773](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L773)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **key**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  system

• **system**: *object*

*Defined in [api/src/augment/query.ts:780](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L780)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **account**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **allExtrinsicsLen**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **blockHash**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **blockWeight**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **digest**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **eventCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **eventTopics**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **events**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **executionPhase**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **extrinsicCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **extrinsicData**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **extrinsicsRoot**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lastRuntimeUpgrade**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **number**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **parentHash**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  technicalCommittee

• **technicalCommittee**: *object*

*Defined in [api/src/augment/query.ts:852](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L852)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **members**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **prime**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **voting**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  technicalMembership

• **technicalMembership**: *object*

*Defined in [api/src/augment/query.ts:880](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L880)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **members**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **prime**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  timestamp

• **timestamp**: *object*

*Defined in [api/src/augment/query.ts:891](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L891)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **didUpdate**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **now**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  transactionPayment

• **transactionPayment**: *object*

*Defined in [api/src/augment/query.ts:902](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L902)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **nextFeeMultiplier**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  treasury

• **treasury**: *object*

*Defined in [api/src/augment/query.ts:906](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L906)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **approvals**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **reasons**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **tips**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  vesting

• **vesting**: *object*

*Defined in [api/src/augment/query.ts:932](https://github.com/polkadot-js/api/blob/a1655508ba/packages/api/src/augment/query.ts#L932)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **vesting**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*
