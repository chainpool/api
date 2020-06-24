[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Tuple"](../modules/_codec_tuple_.md) › [Tuple](_codec_tuple_.tuple.md)

# Class: Tuple

**`name`** Tuple

**`description`** 
A Tuple defines an anonymous fixed-length array, where each element has its
own type. It extends the base JS `Array` object.

## Hierarchy

  ↳ [AbstractArray](_codec_abstractarray_.abstractarray.md)‹[Codec](../interfaces/_types_codec_.codec.md)›

  ↳ **Tuple**

  ↳ [MortalEra](_extrinsic_extrinsicera_.mortalera.md)

  ↳ [EventData](_generic_event_.eventdata.md)

  ↳ [LinkageResult](_codec_linkage_.linkageresult.md)

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Indexable

* \[ **n**: *number*\]: [Codec](../interfaces/_types_codec_.codec.md)

**`name`** Tuple

**`description`** 
A Tuple defines an anonymous fixed-length array, where each element has its
own type. It extends the base JS `Array` object.

## Index

### Constructors

* [constructor](_codec_tuple_.tuple.md#constructor)

### Properties

* [registry](_codec_tuple_.tuple.md#readonly-registry)

### Accessors

* [Types](_codec_tuple_.tuple.md#types)
* [encodedLength](_codec_tuple_.tuple.md#encodedlength)
* [hash](_codec_tuple_.tuple.md#hash)
* [isEmpty](_codec_tuple_.tuple.md#isempty)
* [length](_codec_tuple_.tuple.md#length)

### Methods

* [eq](_codec_tuple_.tuple.md#eq)
* [filter](_codec_tuple_.tuple.md#filter)
* [includes](_codec_tuple_.tuple.md#includes)
* [map](_codec_tuple_.tuple.md#map)
* [toArray](_codec_tuple_.tuple.md#toarray)
* [toHex](_codec_tuple_.tuple.md#tohex)
* [toHuman](_codec_tuple_.tuple.md#tohuman)
* [toJSON](_codec_tuple_.tuple.md#tojson)
* [toRawType](_codec_tuple_.tuple.md#torawtype)
* [toString](_codec_tuple_.tuple.md#tostring)
* [toU8a](_codec_tuple_.tuple.md#tou8a)
* [with](_codec_tuple_.tuple.md#static-with)

## Constructors

###  constructor

\+ **new Tuple**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: TupleTypes, `value?`: AnyTuple): *[Tuple](_codec_tuple_.tuple.md)*

*Overrides void*

*Defined in [packages/types/src/codec/Tuple.ts:56](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Tuple.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Types` | TupleTypes |
`value?` | AnyTuple |

**Returns:** *[Tuple](_codec_tuple_.tuple.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#readonly-registry)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[registry](_codec_abstractarray_.abstractarray.md#readonly-registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:23](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L23)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Defined in [packages/types/src/codec/Tuple.ts:90](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Tuple.ts#L90)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [packages/types/src/codec/Tuple.ts:79](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Tuple.ts#L79)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:43](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L43)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:50](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L50)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:57](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L57)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:65](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L65)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: unknown): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:144](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L144)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: [Codec](../interfaces/_types_codec_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_codec_.codec.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_codec_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_codec_.codec.md)[] |

▪`Optional`  **thisArg**: *unknown*

The `this` object to apply the result to

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  includes

▸ **includes**(`check`: unknown): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[includes](_codec_abstractarray_.abstractarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:160](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L160)*

**`description`** Checks if the array includes a specific value

**Parameters:**

Name | Type |
------ | ------ |
`check` | unknown |

**Returns:** *boolean*

___

###  map

▸ **map**‹**U**›(`callbackfn`: function, `thisArg?`: unknown): *U[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:153](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L153)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: [Codec](../interfaces/_types_codec_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_codec_.codec.md)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_codec_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_codec_.codec.md)[] |

▪`Optional`  **thisArg**: *unknown*

The `this` onject to apply the result to

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:72](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L72)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:79](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L79)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHuman](_codec_abstractarray_.abstractarray.md#tohuman)*

*Defined in [packages/types/src/codec/AbstractArray.ts:86](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L86)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/codec/AbstractArray.ts:95](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/AbstractArray.ts#L95)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:99](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Tuple.ts#L99)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:112](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Tuple.ts#L112)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [packages/types/src/codec/Tuple.ts:121](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Tuple.ts#L121)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Tuple](_codec_tuple_.tuple.md)›*

*Defined in [packages/types/src/codec/Tuple.ts:68](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Tuple.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Tuple](_codec_tuple_.tuple.md)›*
