[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["augment/rpc"](../modules/_augment_rpc_.md) › ["rpc-core/types"](../modules/_augment_rpc_._rpc_core_types_.md) › [RpcInterface](_augment_rpc_._rpc_core_types_.rpcinterface.md)

# Interface: RpcInterface

## Hierarchy

* **RpcInterface**

## Index

### Properties

* [author](_augment_rpc_._rpc_core_types_.rpcinterface.md#author)
* [babe](_augment_rpc_._rpc_core_types_.rpcinterface.md#babe)
* [chain](_augment_rpc_._rpc_core_types_.rpcinterface.md#chain)
* [childstate](_augment_rpc_._rpc_core_types_.rpcinterface.md#childstate)
* [contracts](_augment_rpc_._rpc_core_types_.rpcinterface.md#contracts)
* [engine](_augment_rpc_._rpc_core_types_.rpcinterface.md#engine)
* [grandpa](_augment_rpc_._rpc_core_types_.rpcinterface.md#grandpa)
* [offchain](_augment_rpc_._rpc_core_types_.rpcinterface.md#offchain)
* [payment](_augment_rpc_._rpc_core_types_.rpcinterface.md#payment)
* [rpc](_augment_rpc_._rpc_core_types_.rpcinterface.md#rpc)
* [state](_augment_rpc_._rpc_core_types_.rpcinterface.md#state)
* [system](_augment_rpc_._rpc_core_types_.rpcinterface.md#system)

## Properties

###  author

• **author**: *object*

*Defined in [api/src/augment/rpc.ts:26](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L26)*

#### Type declaration:

* **hasKey**: *AugmentedRpc‹function›*

* **hasSessionKeys**: *AugmentedRpc‹function›*

* **insertKey**: *AugmentedRpc‹function›*

* **pendingExtrinsics**: *AugmentedRpc‹function›*

* **removeExtrinsic**: *AugmentedRpc‹function›*

* **rotateKeys**: *AugmentedRpc‹function›*

* **submitAndWatchExtrinsic**: *AugmentedRpc‹function›*

* **submitExtrinsic**: *AugmentedRpc‹function›*

___

###  babe

• **babe**: *object*

*Defined in [api/src/augment/rpc.ts:60](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L60)*

#### Type declaration:

* **epochAuthorship**: *AugmentedRpc‹function›*

___

###  chain

• **chain**: *object*

*Defined in [api/src/augment/rpc.ts:66](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L66)*

#### Type declaration:

* **getBlock**: *AugmentedRpc‹function›*

* **getBlockHash**: *AugmentedRpc‹function›*

* **getFinalizedHead**: *AugmentedRpc‹function›*

* **getHeader**: *AugmentedRpc‹function›*

* **subscribeAllHeads**: *AugmentedRpc‹function›*

* **subscribeFinalizedHeads**: *AugmentedRpc‹function›*

* **subscribeNewHeads**: *AugmentedRpc‹function›*

___

###  childstate

• **childstate**: *object*

*Defined in [api/src/augment/rpc.ts:96](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L96)*

#### Type declaration:

* **getKeys**: *AugmentedRpc‹function›*

* **getStorage**: *AugmentedRpc‹function›*

* **getStorageHash**: *AugmentedRpc‹function›*

* **getStorageSize**: *AugmentedRpc‹function›*

___

###  contracts

• **contracts**: *object*

*Defined in [api/src/augment/rpc.ts:114](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L114)*

#### Type declaration:

* **call**: *AugmentedRpc‹function›*

* **getStorage**: *AugmentedRpc‹function›*

* **rentProjection**: *AugmentedRpc‹function›*

___

###  engine

• **engine**: *object*

*Defined in [api/src/augment/rpc.ts:128](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L128)*

#### Type declaration:

* **createBlock**: *AugmentedRpc‹function›*

* **finalizeBlock**: *AugmentedRpc‹function›*

___

###  grandpa

• **grandpa**: *object*

*Defined in [api/src/augment/rpc.ts:138](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L138)*

#### Type declaration:

* **roundState**: *AugmentedRpc‹function›*

___

###  offchain

• **offchain**: *object*

*Defined in [api/src/augment/rpc.ts:144](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L144)*

#### Type declaration:

* **localStorageGet**: *AugmentedRpc‹function›*

* **localStorageSet**: *AugmentedRpc‹function›*

___

###  payment

• **payment**: *object*

*Defined in [api/src/augment/rpc.ts:154](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L154)*

#### Type declaration:

* **queryInfo**: *AugmentedRpc‹function›*

___

###  rpc

• **rpc**: *object*

*Defined in [api/src/augment/rpc.ts:160](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L160)*

#### Type declaration:

* **methods**: *AugmentedRpc‹function›*

___

###  state

• **state**: *object*

*Defined in [api/src/augment/rpc.ts:166](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L166)*

#### Type declaration:

* **call**: *AugmentedRpc‹function›*

* **getChildKeys**: *AugmentedRpc‹function›*

* **getChildStorage**: *AugmentedRpc‹function›*

* **getChildStorageHash**: *AugmentedRpc‹function›*

* **getChildStorageSize**: *AugmentedRpc‹function›*

* **getKeys**: *AugmentedRpc‹function›*

* **getKeysPaged**: *AugmentedRpc‹function›*

* **getMetadata**: *AugmentedRpc‹function›*

* **getPairs**: *AugmentedRpc‹function›*

* **getReadProof**: *AugmentedRpc‹function›*

* **getRuntimeVersion**: *AugmentedRpc‹function›*

* **getStorage**: *AugmentedRpc‹function›*

* **getStorageHash**: *AugmentedRpc‹function›*

* **getStorageSize**: *AugmentedRpc‹function›*

* **queryStorage**: *AugmentedRpc‹function›*

* **queryStorageAt**: *AugmentedRpc‹function›*

* **subscribeRuntimeVersion**: *AugmentedRpc‹function›*

* **subscribeStorage**: *AugmentedRpc‹function›*

___

###  system

• **system**: *object*

*Defined in [api/src/augment/rpc.ts:240](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/augment/rpc.ts#L240)*

#### Type declaration:

* **accountNextIndex**: *AugmentedRpc‹function›*

* **addReservedPeer**: *AugmentedRpc‹function›*

* **chain**: *AugmentedRpc‹function›*

* **chainType**: *AugmentedRpc‹function›*

* **dryRun**: *AugmentedRpc‹function›*

* **health**: *AugmentedRpc‹function›*

* **localListenAddresses**: *AugmentedRpc‹function›*

* **localPeerId**: *AugmentedRpc‹function›*

* **name**: *AugmentedRpc‹function›*

* **networkState**: *AugmentedRpc‹function›*

* **nodeRoles**: *AugmentedRpc‹function›*

* **peers**: *AugmentedRpc‹function›*

* **properties**: *AugmentedRpc‹function›*

* **removeReservedPeer**: *AugmentedRpc‹function›*

* **version**: *AugmentedRpc‹function›*
