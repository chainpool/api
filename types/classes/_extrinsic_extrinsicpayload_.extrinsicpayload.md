[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["extrinsic/ExtrinsicPayload"](../modules/_extrinsic_extrinsicpayload_.md) › [ExtrinsicPayload](_extrinsic_extrinsicpayload_.extrinsicpayload.md)

# Class: ExtrinsicPayload

**`name`** GenericExtrinsicPayload

**`description`** 
A signing payload for an [Extrinsic](_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Hierarchy

* [Base](_codec_base_.base.md)‹ExtrinsicPayloadVx›

  ↳ **ExtrinsicPayload**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_extrinsic_extrinsicpayload_.extrinsicpayload.md#constructor)

### Properties

* [registry](_extrinsic_extrinsicpayload_.extrinsicpayload.md#readonly-registry)

### Accessors

* [blockHash](_extrinsic_extrinsicpayload_.extrinsicpayload.md#blockhash)
* [encodedLength](_extrinsic_extrinsicpayload_.extrinsicpayload.md#encodedlength)
* [era](_extrinsic_extrinsicpayload_.extrinsicpayload.md#era)
* [genesisHash](_extrinsic_extrinsicpayload_.extrinsicpayload.md#genesishash)
* [hash](_extrinsic_extrinsicpayload_.extrinsicpayload.md#hash)
* [isEmpty](_extrinsic_extrinsicpayload_.extrinsicpayload.md#isempty)
* [method](_extrinsic_extrinsicpayload_.extrinsicpayload.md#method)
* [nonce](_extrinsic_extrinsicpayload_.extrinsicpayload.md#nonce)
* [specVersion](_extrinsic_extrinsicpayload_.extrinsicpayload.md#specversion)
* [tip](_extrinsic_extrinsicpayload_.extrinsicpayload.md#tip)
* [transactionVersion](_extrinsic_extrinsicpayload_.extrinsicpayload.md#transactionversion)

### Methods

* [eq](_extrinsic_extrinsicpayload_.extrinsicpayload.md#eq)
* [sign](_extrinsic_extrinsicpayload_.extrinsicpayload.md#sign)
* [toHex](_extrinsic_extrinsicpayload_.extrinsicpayload.md#tohex)
* [toHuman](_extrinsic_extrinsicpayload_.extrinsicpayload.md#tohuman)
* [toJSON](_extrinsic_extrinsicpayload_.extrinsicpayload.md#tojson)
* [toRawType](_extrinsic_extrinsicpayload_.extrinsicpayload.md#torawtype)
* [toString](_extrinsic_extrinsicpayload_.extrinsicpayload.md#tostring)
* [toU8a](_extrinsic_extrinsicpayload_.extrinsicpayload.md#tou8a)

## Constructors

###  constructor

\+ **new ExtrinsicPayload**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: Partial‹[ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md)› | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string | undefined, `__namedParameters`: object): *[ExtrinsicPayload](_extrinsic_extrinsicpayload_.extrinsicpayload.md)*

*Overrides void*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:39](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L39)*

**Parameters:**

▪ **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

▪ **value**: *Partial‹[ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md)› | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string | undefined*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`version` | undefined &#124; number |

**Returns:** *[ExtrinsicPayload](_extrinsic_extrinsicpayload_.extrinsicpayload.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#readonly-registry)*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#readonly-registry)*

*Defined in [packages/types/src/codec/Base.ts:17](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/codec/Base.ts#L17)*

## Accessors

###  blockHash

• **get blockHash**(): *Hash*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:56](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L56)*

**`description`** The block [Hash](../interfaces/_augment_registry_._registry_.interfacetypes.md#hash) the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Base.ts:29](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/codec/Base.ts#L29)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:63](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L63)*

**`description`** The [ExtrinsicEra](_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  genesisHash

• **get genesisHash**(): *Hash*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:70](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L70)*

**`description`** The genesis block [Hash](../interfaces/_augment_registry_._registry_.interfacetypes.md#hash) the signature applies to

**Returns:** *Hash*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:36](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/codec/Base.ts#L36)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:43](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/codec/Base.ts#L43)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Raw](_codec_raw_.raw.md)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:78](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L78)*

**`description`** The [Raw](_codec_raw_.raw.md) contained in the payload

**Returns:** *[Raw](_codec_raw_.raw.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:85](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L85)*

**`description`** The [Index](../interfaces/_augment_registry_._registry_.interfacetypes.md#index)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  specVersion

• **get specVersion**(): *[u32](../interfaces/_augment_registry_._registry_.interfacetypes.md#u32)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:92](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L92)*

**`description`** The specVersion as a [u32](../interfaces/_augment_registry_._registry_.interfacetypes.md#u32) for this payload

**Returns:** *[u32](../interfaces/_augment_registry_._registry_.interfacetypes.md#u32)*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:100](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L100)*

**`description`** The [Balance](../interfaces/_augment_registry_._registry_.interfacetypes.md#balance)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

___

###  transactionVersion

• **get transactionVersion**(): *[u32](../interfaces/_augment_registry_._registry_.interfacetypes.md#u32)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:108](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L108)*

**`description`** The transaction version as a [u32](../interfaces/_augment_registry_._registry_.interfacetypes.md#u32) for this payload

**Returns:** *[u32](../interfaces/_augment_registry_._registry_.interfacetypes.md#u32)*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:116](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L116)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md)): *object*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:123](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L123)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md) |

**Returns:** *object*

* **signature**: *string*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Base.ts:57](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/codec/Base.ts#L57)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toHuman](_codec_base_.base.md#tohuman)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:138](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L138)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *any*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:145](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L145)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Base.ts:93](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/codec/Base.ts#L93)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:152](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L152)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:159](https://github.com/polkadot-js/api/blob/bbbd82eb4a/packages/types/src/extrinsic/ExtrinsicPayload.ts#L159)*

**`description`** Returns a serialized u8a form

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
