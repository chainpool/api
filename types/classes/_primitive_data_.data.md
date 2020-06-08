[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Data"](../modules/_primitive_data_.md) › [Data](_primitive_data_.data.md)

# Class: Data

**`name`** Data

**`description`** 
A [Data](_primitive_data_.data.md) container with node, raw or hashed data

## Hierarchy

  ↳ [Enum](_codec_enum_.enum.md)

  ↳ **Data**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_primitive_data_.data.md#constructor)

### Properties

* [registry](_primitive_data_.data.md#readonly-registry)

### Accessors

* [asRaw](_primitive_data_.data.md#asraw)
* [asSha256](_primitive_data_.data.md#assha256)
* [defEntries](_primitive_data_.data.md#defentries)
* [defKeys](_primitive_data_.data.md#defkeys)
* [encodedLength](_primitive_data_.data.md#encodedlength)
* [hash](_primitive_data_.data.md#hash)
* [index](_primitive_data_.data.md#index)
* [isBasic](_primitive_data_.data.md#isbasic)
* [isEmpty](_primitive_data_.data.md#isempty)
* [isNone](_primitive_data_.data.md#isnone)
* [isNull](_primitive_data_.data.md#isnull)
* [isRaw](_primitive_data_.data.md#israw)
* [isSha256](_primitive_data_.data.md#issha256)
* [type](_primitive_data_.data.md#type)
* [value](_primitive_data_.data.md#value)

### Methods

* [eq](_primitive_data_.data.md#eq)
* [toHex](_primitive_data_.data.md#tohex)
* [toHuman](_primitive_data_.data.md#tohuman)
* [toJSON](_primitive_data_.data.md#tojson)
* [toNumber](_primitive_data_.data.md#tonumber)
* [toRawType](_primitive_data_.data.md#torawtype)
* [toString](_primitive_data_.data.md#tostring)
* [toU8a](_primitive_data_.data.md#tou8a)
* [with](_primitive_data_.data.md#static-with)

## Constructors

###  constructor

\+ **new Data**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: Record‹string, any› | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | [Enum](_codec_enum_.enum.md) | string): *[Data](_primitive_data_.data.md)*

*Overrides [Enum](_codec_enum_.enum.md).[constructor](_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/primitive/Data.ts:55](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/primitive/Data.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value?` | Record‹string, any› &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; [Enum](_codec_enum_.enum.md) &#124; string |

**Returns:** *[Data](_primitive_data_.data.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#readonly-registry)*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#readonly-registry)*

*Defined in [packages/types/src/codec/Base.ts:17](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Base.ts#L17)*

## Accessors

###  asRaw

• **get asRaw**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/primitive/Data.ts:69](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/primitive/Data.ts#L69)*

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  asSha256

• **get asSha256**(): *H256*

*Defined in [packages/types/src/primitive/Data.ts:73](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/primitive/Data.ts#L73)*

**Returns:** *H256*

___

###  defEntries

• **get defEntries**(): *string[]*

*Inherited from [Enum](_codec_enum_.enum.md).[defEntries](_codec_enum_.enum.md#defentries)*

*Defined in [packages/types/src/codec/Enum.ts:212](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L212)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Enum](_codec_enum_.enum.md).[defKeys](_codec_enum_.enum.md#defkeys)*

*Defined in [packages/types/src/codec/Enum.ts:219](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L219)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Enum](_codec_enum_.enum.md).[encodedLength](_codec_enum_.enum.md#encodedlength)*

*Defined in [packages/types/src/primitive/Data.ts:88](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/primitive/Data.ts#L88)*

**`description`** The encoded length

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:36](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Base.ts#L36)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[index](_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:184](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L184)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isBasic

• **get isBasic**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isBasic](_codec_enum_.enum.md#isbasic)*

*Defined in [packages/types/src/codec/Enum.ts:191](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L191)*

**`description`** true if this is a basic enum (no values)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:43](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Base.ts#L43)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNone](_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:198](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L198)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNull](_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:205](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L205)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isRaw

• **get isRaw**(): *boolean*

*Defined in [packages/types/src/primitive/Data.ts:77](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/primitive/Data.ts#L77)*

**Returns:** *boolean*

___

###  isSha256

• **get isSha256**(): *boolean*

*Defined in [packages/types/src/primitive/Data.ts:81](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/primitive/Data.ts#L81)*

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[type](_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:226](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L226)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[value](_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:233](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L233)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[eq](_codec_enum_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:240](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L240)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toHex](_codec_enum_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Enum.ts:263](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L263)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toHuman](_codec_enum_.enum.md#tohuman)*

*Overrides [Base](_codec_base_.base.md).[toHuman](_codec_base_.base.md#tohuman)*

*Defined in [packages/types/src/codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L270)*

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

*Inherited from [Enum](_codec_enum_.enum.md).[toJSON](_codec_enum_.enum.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:279](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L279)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[toNumber](_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:288](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L288)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toRawType](_codec_enum_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:304](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L304)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toString](_codec_enum_.enum.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:311](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L311)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Enum](_codec_enum_.enum.md).[toU8a](_codec_enum_.enum.md#tou8a)*

*Defined in [packages/types/src/primitive/Data.ts:95](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/primitive/Data.ts#L95)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: Record‹string, keyof InterfaceTypes | [Constructor](../interfaces/_types_codec_.constructor.md)› | string[]): *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*

*Inherited from [Enum](_codec_enum_.enum.md).[with](_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Enum.ts:138](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/codec/Enum.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, keyof InterfaceTypes &#124; [Constructor](../interfaces/_types_codec_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*
