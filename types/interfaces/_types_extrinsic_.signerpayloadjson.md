[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [SignerPayloadJSON](_types_extrinsic_.signerpayloadjson.md)

# Interface: SignerPayloadJSON

## Hierarchy

* **SignerPayloadJSON**

## Index

### Properties

* [address](_types_extrinsic_.signerpayloadjson.md#address)
* [blockHash](_types_extrinsic_.signerpayloadjson.md#blockhash)
* [blockNumber](_types_extrinsic_.signerpayloadjson.md#blocknumber)
* [era](_types_extrinsic_.signerpayloadjson.md#era)
* [genesisHash](_types_extrinsic_.signerpayloadjson.md#genesishash)
* [method](_types_extrinsic_.signerpayloadjson.md#method)
* [nonce](_types_extrinsic_.signerpayloadjson.md#nonce)
* [signedExtensions](_types_extrinsic_.signerpayloadjson.md#signedextensions)
* [specVersion](_types_extrinsic_.signerpayloadjson.md#specversion)
* [tip](_types_extrinsic_.signerpayloadjson.md#tip)
* [transactionVersion](_types_extrinsic_.signerpayloadjson.md#transactionversion)
* [version](_types_extrinsic_.signerpayloadjson.md#version)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:121](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L121)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:126](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L126)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:131](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L131)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:136](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L136)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:141](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L141)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:146](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L146)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:151](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L151)*

**`description`** The nonce for this transaction, in hex

___

###  signedExtensions

• **signedExtensions**: *string[]*

*Defined in [packages/types/src/types/extrinsic.ts:171](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L171)*

**`description`** The applicable signed extensions for this runtime

___

###  specVersion

• **specVersion**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:156](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L156)*

**`description`** The current spec version for the runtime

___

###  tip

• **tip**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:161](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L161)*

**`description`** The tip for this transaction, in hex

___

###  transactionVersion

• **transactionVersion**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:166](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L166)*

**`description`** The current transaction version for the runtime

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:176](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/types/src/types/extrinsic.ts#L176)*

**`description`** The version of the extrinsic we are dealing with
