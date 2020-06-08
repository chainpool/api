[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/interfaces"](../modules/_types_interfaces_.md) › [IMethod](_types_interfaces_.imethod.md)

# Interface: IMethod

## Hierarchy

* [Codec](_types_codec_.codec.md)

  ↳ **IMethod**

  ↳ [IExtrinsic](_types_extrinsic_.iextrinsic.md)

## Implemented by

* [Call](../classes/_generic_call_.call.md)

## Index

### Properties

* [args](_types_interfaces_.imethod.md#readonly-args)
* [argsDef](_types_interfaces_.imethod.md#readonly-argsdef)
* [callIndex](_types_interfaces_.imethod.md#readonly-callindex)
* [data](_types_interfaces_.imethod.md#readonly-data)
* [encodedLength](_types_interfaces_.imethod.md#readonly-encodedlength)
* [hasOrigin](_types_interfaces_.imethod.md#readonly-hasorigin)
* [hash](_types_interfaces_.imethod.md#readonly-hash)
* [isEmpty](_types_interfaces_.imethod.md#readonly-isempty)
* [meta](_types_interfaces_.imethod.md#readonly-meta)
* [registry](_types_interfaces_.imethod.md#readonly-registry)

### Methods

* [eq](_types_interfaces_.imethod.md#eq)
* [toHex](_types_interfaces_.imethod.md#tohex)
* [toHuman](_types_interfaces_.imethod.md#tohuman)
* [toJSON](_types_interfaces_.imethod.md#tojson)
* [toRawType](_types_interfaces_.imethod.md#torawtype)
* [toString](_types_interfaces_.imethod.md#tostring)
* [toU8a](_types_interfaces_.imethod.md#tou8a)

## Properties

### `Readonly` args

• **args**: *[Codec](_types_codec_.codec.md)[]*

*Defined in [packages/types/src/types/interfaces.ts:24](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/interfaces.ts#L24)*

___

### `Readonly` argsDef

• **argsDef**: *[ArgsDef](../modules/_types_codec_.md#argsdef)*

*Defined in [packages/types/src/types/interfaces.ts:25](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/interfaces.ts#L25)*

___

### `Readonly` callIndex

• **callIndex**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types/interfaces.ts:26](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/interfaces.ts#L26)*

___

### `Readonly` data

• **data**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types/interfaces.ts:27](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/interfaces.ts#L27)*

___

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:39](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/codec.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` hasOrigin

• **hasOrigin**: *boolean*

*Defined in [packages/types/src/types/interfaces.ts:29](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/interfaces.ts#L29)*

___

### `Readonly` hash

• **hash**: *Hash*

*Overrides [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/interfaces.ts:28](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/interfaces.ts#L28)*

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:49](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/codec.ts#L49)*

**`description`** Checks if the value is an empty value

___

### `Readonly` meta

• **meta**: *FunctionMetadataLatest*

*Defined in [packages/types/src/types/interfaces.ts:30](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/interfaces.ts#L30)*

___

### `Readonly` registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:54](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/codec.ts#L54)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:59](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/codec.ts#L59)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:64](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/codec.ts#L64)*

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

*Defined in [packages/types/src/types/codec.ts:69](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/codec.ts#L69)*

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

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/codec.ts#L74)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:79](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/codec.ts#L79)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:84](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/codec.ts#L84)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:90](https://github.com/polkadot-js/api/blob/099cf5a351/packages/types/src/types/codec.ts#L90)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
