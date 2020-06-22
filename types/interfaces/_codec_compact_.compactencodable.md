[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Compact"](../modules/_codec_compact_.md) › [CompactEncodable](_codec_compact_.compactencodable.md)

# Interface: CompactEncodable

## Hierarchy

* [Codec](_types_codec_.codec.md)

  ↳ **CompactEncodable**

## Index

### Properties

* [encodedLength](_codec_compact_.compactencodable.md#readonly-encodedlength)
* [hash](_codec_compact_.compactencodable.md#readonly-hash)
* [isEmpty](_codec_compact_.compactencodable.md#readonly-isempty)
* [registry](_codec_compact_.compactencodable.md#readonly-registry)

### Methods

* [bitLength](_codec_compact_.compactencodable.md#bitlength)
* [eq](_codec_compact_.compactencodable.md#eq)
* [toBn](_codec_compact_.compactencodable.md#tobn)
* [toHex](_codec_compact_.compactencodable.md#tohex)
* [toHuman](_codec_compact_.compactencodable.md#tohuman)
* [toJSON](_codec_compact_.compactencodable.md#tojson)
* [toNumber](_codec_compact_.compactencodable.md#tonumber)
* [toRawType](_codec_compact_.compactencodable.md#torawtype)
* [toString](_codec_compact_.compactencodable.md#tostring)
* [toU8a](_codec_compact_.compactencodable.md#tou8a)

## Properties

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:39](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` hash

• **hash**: *H256*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/codec.ts:44](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L44)*

**`description`** Returns a hash of the value

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:49](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L49)*

**`description`** Checks if the value is an empty value

___

### `Readonly` registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:54](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L54)*

**`description`** The registry associated with this object

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Defined in [packages/types/src/codec/Compact.ts:16](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/codec/Compact.ts#L16)*

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:59](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L59)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *BN*

*Defined in [packages/types/src/codec/Compact.ts:17](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/codec/Compact.ts#L17)*

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:64](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L64)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:69](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L69)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L74)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [packages/types/src/codec/Compact.ts:18](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/codec/Compact.ts#L18)*

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:79](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L79)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:84](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L84)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:90](https://github.com/polkadot-js/api/blob/2493442a2e/packages/types/src/types/codec.ts#L90)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
