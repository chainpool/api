[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Struct"](../modules/_codec_struct_.md) › [Struct](_codec_struct_.struct.md)

# Class: Struct ‹**S, T, V, E**›

**`name`** Struct

**`description`** 
A Struct defines an Object with key-value pairs - where the values are Codec values. It removes
a lot of repetition from the actual coding, define a structure type, pass it the key/Codec
values in the constructor and it manages the decoding. It is important that the constructor
values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
it needs to decoded in the specific defined order.

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* [Map](_codec_struct_.struct.md#static-map)‹keyof S, [Codec](../interfaces/_types_codec_.codec.md)›

  ↳ **Struct**

  ↳ [ExtrinsicPayloadUnknown](_extrinsic_extrinsicpayloadunknown_.extrinsicpayloadunknown.md)

  ↳ [ExtrinsicUnknown](_extrinsic_extrinsicunknown_.extrinsicunknown.md)

  ↳ [ExtrinsicV1](_extrinsic_v1_extrinsic_.extrinsicv1.md)

  ↳ [ExtrinsicPayloadV1](_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)

  ↳ [ExtrinsicSignatureV1](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)

  ↳ [ExtrinsicV2](_extrinsic_v2_extrinsic_.extrinsicv2.md)

  ↳ [ExtrinsicPayloadV2](_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)

  ↳ [ExtrinsicSignatureV2](_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)

  ↳ [ExtrinsicV3](_extrinsic_v3_extrinsic_.extrinsicv3.md)

  ↳ [ExtrinsicPayloadV3](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)

  ↳ [ExtrinsicV4](_extrinsic_v4_extrinsic_.extrinsicv4.md)

  ↳ [ExtrinsicPayloadV4](_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)

  ↳ [ExtrinsicSignatureV4](_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

  ↳ [Block](_generic_block_.block.md)

  ↳ [Event](_generic_event_.event.md)

  ↳ [Call](_generic_call_.call.md)

  ↳ [Linkage](_codec_linkage_.linkage.md)

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_codec_struct_.struct.md#constructor)

### Properties

* [registry](_codec_struct_.struct.md#readonly-registry)
* [Map](_codec_struct_.struct.md#static-map)

### Accessors

* [Type](_codec_struct_.struct.md#type)
* [defKeys](_codec_struct_.struct.md#defkeys)
* [encodedLength](_codec_struct_.struct.md#encodedlength)
* [hash](_codec_struct_.struct.md#hash)
* [isEmpty](_codec_struct_.struct.md#isempty)

### Methods

* [eq](_codec_struct_.struct.md#eq)
* [get](_codec_struct_.struct.md#get)
* [getAtIndex](_codec_struct_.struct.md#getatindex)
* [toArray](_codec_struct_.struct.md#toarray)
* [toHex](_codec_struct_.struct.md#tohex)
* [toHuman](_codec_struct_.struct.md#tohuman)
* [toJSON](_codec_struct_.struct.md#tojson)
* [toRawType](_codec_struct_.struct.md#torawtype)
* [toString](_codec_struct_.struct.md#tostring)
* [toU8a](_codec_struct_.struct.md#tou8a)
* [typesToMap](_codec_struct_.struct.md#static-typestomap)
* [with](_codec_struct_.struct.md#static-with)

## Constructors

###  constructor

\+ **new Struct**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: S, `value`: V | [Map](_codec_struct_.struct.md#static-map)‹unknown, unknown› | unknown[] | string, `jsonMap`: [Map](_codec_struct_.struct.md#static-map)‹keyof S, string›): *[Struct](_codec_struct_.struct.md)*

*Defined in [packages/types/src/codec/Struct.ts:116](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L116)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`Types` | S | - |
`value` | V &#124; [Map](_codec_struct_.struct.md#static-map)‹unknown, unknown› &#124; unknown[] &#124; string | {} as V |
`jsonMap` | [Map](_codec_struct_.struct.md#static-map)‹keyof S, string› | new Map() |

**Returns:** *[Struct](_codec_struct_.struct.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#readonly-registry)*

*Defined in [packages/types/src/codec/Struct.ts:112](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L112)*

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  Type

• **get Type**(): *E*

*Defined in [packages/types/src/codec/Struct.ts:175](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L175)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  defKeys

• **get defKeys**(): *string[]*

*Defined in [packages/types/src/codec/Struct.ts:153](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L153)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L189)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L200)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L160)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L207)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

*Overrides [CodecMap](_codec_map_.codecmap.md).[get](_codec_map_.codecmap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L222)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Defined in [packages/types/src/codec/Struct.ts:229](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L229)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/Struct.ts:236](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L236)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:243](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L243)*

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

*Defined in [packages/types/src/codec/Struct.ts:256](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L256)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:280](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L280)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:289](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L289)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:297](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L297)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›): *Record‹string, string›*

*Defined in [packages/types/src/codec/Struct.ts:269](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**‹**S**›(`Types`: S, `jsonMap?`: [Map](_codec_struct_.struct.md#static-map)‹keyof S, string›): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Defined in [packages/types/src/codec/Struct.ts:129](https://github.com/polkadot-js/api/blob/219e928c01/packages/types/src/codec/Struct.ts#L129)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | [Map](_codec_struct_.struct.md#static-map)‹keyof S, string› |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
