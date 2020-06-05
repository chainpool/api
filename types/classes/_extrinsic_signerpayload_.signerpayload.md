[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["extrinsic/SignerPayload"](../modules/_extrinsic_signerpayload_.md) › [SignerPayload](_extrinsic_signerpayload_.signerpayload.md)

# Class: SignerPayload

**`name`** SignerPayload

**`description`** 
A generic signer payload that can be used for serialization between API and signer

## Hierarchy

  ↳ [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md)

  ↳ **SignerPayload**

## Implements

* [ISignerPayload](../interfaces/_types_extrinsic_.isignerpayload.md)

## Index

### Properties

* [address](_extrinsic_signerpayload_.signerpayload.md#address)
* [blockHash](_extrinsic_signerpayload_.signerpayload.md#blockhash)
* [blockNumber](_extrinsic_signerpayload_.signerpayload.md#blocknumber)
* [encodedLength](_extrinsic_signerpayload_.signerpayload.md#readonly-encodedlength)
* [era](_extrinsic_signerpayload_.signerpayload.md#era)
* [genesisHash](_extrinsic_signerpayload_.signerpayload.md#genesishash)
* [hash](_extrinsic_signerpayload_.signerpayload.md#readonly-hash)
* [isEmpty](_extrinsic_signerpayload_.signerpayload.md#readonly-isempty)
* [method](_extrinsic_signerpayload_.signerpayload.md#method)
* [nonce](_extrinsic_signerpayload_.signerpayload.md#nonce)
* [registry](_extrinsic_signerpayload_.signerpayload.md#readonly-registry)
* [runtimeVersion](_extrinsic_signerpayload_.signerpayload.md#runtimeversion)
* [signedExtensions](_extrinsic_signerpayload_.signerpayload.md#signedextensions)
* [tip](_extrinsic_signerpayload_.signerpayload.md#tip)
* [version](_extrinsic_signerpayload_.signerpayload.md#version)

### Methods

* [eq](_extrinsic_signerpayload_.signerpayload.md#eq)
* [toHex](_extrinsic_signerpayload_.signerpayload.md#tohex)
* [toHuman](_extrinsic_signerpayload_.signerpayload.md#tohuman)
* [toJSON](_extrinsic_signerpayload_.signerpayload.md#tojson)
* [toPayload](_extrinsic_signerpayload_.signerpayload.md#topayload)
* [toRaw](_extrinsic_signerpayload_.signerpayload.md#toraw)
* [toRawType](_extrinsic_signerpayload_.signerpayload.md#torawtype)
* [toString](_extrinsic_signerpayload_.signerpayload.md#tostring)
* [toU8a](_extrinsic_signerpayload_.signerpayload.md#tou8a)

## Properties

###  address

• **address**: *Address*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[address](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#address)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L17)*

___

###  blockHash

• **blockHash**: *Hash*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[blockHash](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L18)*

___

###  blockNumber

• **blockNumber**: *BlockNumber*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[blockNumber](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L19)*

___

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:39](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *ExtrinsicEra*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[era](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#era)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L20)*

___

###  genesisHash

• **genesisHash**: *Hash*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[genesisHash](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L21)*

___

### `Readonly` hash

• **hash**: *H256*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[hash](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/codec.ts:44](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L44)*

**`description`** Returns a hash of the value

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:49](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L49)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *Call*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[method](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#method)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L22)*

___

###  nonce

• **nonce**: *[Compact](_codec_compact_.compact.md)‹Index›*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[nonce](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#nonce)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L23)*

___

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[registry](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:54](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L54)*

**`description`** The registry associated with this object

___

###  runtimeVersion

• **runtimeVersion**: *RuntimeVersion*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[runtimeVersion](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:24](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L24)*

___

###  signedExtensions

• **signedExtensions**: *[Vec](_codec_vec_.vec.md)‹[Text](_primitive_text_.text.md)›*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[signedExtensions](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#signedextensions)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:25](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L25)*

___

###  tip

• **tip**: *[Compact](_codec_compact_.compact.md)‹Balance›*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[tip](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#tip)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:26](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L26)*

___

###  version

• **version**: *[u8](../interfaces/_augment_registry_._registry_.interfacetypes.md#u8)*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[version](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#version)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:27](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L27)*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[eq](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:59](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L59)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:64](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L64)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:69](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L69)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L74)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toPayload

▸ **toPayload**(): *[SignerPayloadJSON](../interfaces/_types_extrinsic_.signerpayloadjson.md)*

*Implementation of [ISignerPayload](../interfaces/_types_extrinsic_.isignerpayload.md)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:55](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L55)*

**`description`** Creates an representation of the structure as an ISignerPayload JSON

**Returns:** *[SignerPayloadJSON](../interfaces/_types_extrinsic_.signerpayloadjson.md)*

___

###  toRaw

▸ **toRaw**(): *[SignerPayloadRaw](../interfaces/_types_extrinsic_.signerpayloadraw.md)*

*Implementation of [ISignerPayload](../interfaces/_types_extrinsic_.isignerpayload.md)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:77](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/extrinsic/SignerPayload.ts#L77)*

**`description`** Creates a representation of the payload in raw Exrinsic form

**Returns:** *[SignerPayloadRaw](../interfaces/_types_extrinsic_.signerpayloadraw.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:79](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L79)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[toString](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:84](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L84)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:90](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/types/codec.ts#L90)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
