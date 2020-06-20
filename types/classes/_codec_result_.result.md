[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Result"](../modules/_codec_result_.md) › [Result](_codec_result_.result.md)

# Class: Result ‹**O, E**›

**`name`** Result

**`description`** 
A Result maps to the Rust Result type, that can either wrap a success or error value

## Type parameters

▪ **O**: *[Codec](../interfaces/_types_codec_.codec.md)*

▪ **E**: *[Codec](../interfaces/_types_codec_.codec.md)*

## Hierarchy

  ↳ [Enum](_codec_enum_.enum.md)

  ↳ **Result**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_codec_result_.result.md#constructor)

### Properties

* [registry](_codec_result_.result.md#readonly-registry)

### Accessors

* [asError](_codec_result_.result.md#aserror)
* [asOk](_codec_result_.result.md#asok)
* [defEntries](_codec_result_.result.md#defentries)
* [defKeys](_codec_result_.result.md#defkeys)
* [encodedLength](_codec_result_.result.md#encodedlength)
* [hash](_codec_result_.result.md#hash)
* [index](_codec_result_.result.md#index)
* [isBasic](_codec_result_.result.md#isbasic)
* [isEmpty](_codec_result_.result.md#isempty)
* [isError](_codec_result_.result.md#iserror)
* [isNone](_codec_result_.result.md#isnone)
* [isNull](_codec_result_.result.md#isnull)
* [isOk](_codec_result_.result.md#isok)
* [type](_codec_result_.result.md#type)
* [value](_codec_result_.result.md#value)

### Methods

* [eq](_codec_result_.result.md#eq)
* [toHex](_codec_result_.result.md#tohex)
* [toHuman](_codec_result_.result.md#tohuman)
* [toJSON](_codec_result_.result.md#tojson)
* [toNumber](_codec_result_.result.md#tonumber)
* [toRawType](_codec_result_.result.md#torawtype)
* [toString](_codec_result_.result.md#tostring)
* [toU8a](_codec_result_.result.md#tou8a)
* [with](_codec_result_.result.md#static-with)

## Constructors

###  constructor

\+ **new Result**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Ok`: [Constructor](../interfaces/_types_codec_.constructor.md)‹O› | keyof InterfaceTypes, `Error`: [Constructor](../interfaces/_types_codec_.constructor.md)‹E› | keyof InterfaceTypes, `value?`: unknown): *[Result](_codec_result_.result.md)*

*Overrides [Enum](_codec_enum_.enum.md).[constructor](_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/codec/Result.ts:16](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Result.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Ok` | [Constructor](../interfaces/_types_codec_.constructor.md)‹O› &#124; keyof InterfaceTypes |
`Error` | [Constructor](../interfaces/_types_codec_.constructor.md)‹E› &#124; keyof InterfaceTypes |
`value?` | unknown |

**Returns:** *[Result](_codec_result_.result.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#readonly-registry)*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#readonly-registry)*

*Defined in [packages/types/src/codec/Base.ts:17](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Base.ts#L17)*

## Accessors

###  asError

• **get asError**(): *E*

*Defined in [packages/types/src/codec/Result.ts:34](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Result.ts#L34)*

**`description`** Returns the wrapper Error value (if isError)

**Returns:** *E*

___

###  asOk

• **get asOk**(): *O*

*Defined in [packages/types/src/codec/Result.ts:43](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Result.ts#L43)*

**`description`** Returns the wrapper Ok value (if isOk)

**Returns:** *O*

___

###  defEntries

• **get defEntries**(): *string[]*

*Inherited from [Enum](_codec_enum_.enum.md).[defEntries](_codec_enum_.enum.md#defentries)*

*Defined in [packages/types/src/codec/Enum.ts:212](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L212)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Enum](_codec_enum_.enum.md).[defKeys](_codec_enum_.enum.md#defkeys)*

*Defined in [packages/types/src/codec/Enum.ts:219](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L219)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[encodedLength](_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Enum.ts:177](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L177)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:36](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Base.ts#L36)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[index](_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:184](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L184)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isBasic

• **get isBasic**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isBasic](_codec_enum_.enum.md#isbasic)*

*Defined in [packages/types/src/codec/Enum.ts:191](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L191)*

**`description`** true if this is a basic enum (no values)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Overrides [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Result.ts:52](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Result.ts#L52)*

**`description`** Checks if the Result has no value

**Returns:** *boolean*

___

###  isError

• **get isError**(): *boolean*

*Defined in [packages/types/src/codec/Result.ts:59](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Result.ts#L59)*

**`description`** Checks if the Result wraps an Error value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNone](_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:198](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L198)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNull](_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:205](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L205)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isOk

• **get isOk**(): *boolean*

*Defined in [packages/types/src/codec/Result.ts:66](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Result.ts#L66)*

**`description`** Checks if the Result wraps an Ok value

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[type](_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:226](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L226)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[value](_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:233](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L233)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[eq](_codec_enum_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:240](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L240)*

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

*Defined in [packages/types/src/codec/Enum.ts:263](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L263)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toHuman](_codec_enum_.enum.md#tohuman)*

*Overrides [Base](_codec_base_.base.md).[toHuman](_codec_base_.base.md#tohuman)*

*Defined in [packages/types/src/codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L270)*

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

*Defined in [packages/types/src/codec/Enum.ts:279](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L279)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[toNumber](_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:288](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L288)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [Enum](_codec_enum_.enum.md).[toRawType](_codec_enum_.enum.md#torawtype)*

*Defined in [packages/types/src/codec/Result.ts:73](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Result.ts#L73)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toString](_codec_enum_.enum.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:311](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L311)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Enum](_codec_enum_.enum.md).[toU8a](_codec_enum_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Enum.ts:321](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Enum.ts#L321)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**‹**O**, **E**›(`Types`: object): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Result](_codec_result_.result.md)‹O, E››*

*Overrides [Enum](_codec_enum_.enum.md).[with](_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Result.ts:23](https://github.com/polkadot-js/api/blob/646e64c286/packages/types/src/codec/Result.ts#L23)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_types_codec_.codec.md)*

▪ **E**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

▪ **Types**: *object*

Name | Type |
------ | ------ |
`Error` | [Constructor](../interfaces/_types_codec_.constructor.md)‹E› &#124; keyof InterfaceTypes |
`Ok` | [Constructor](../interfaces/_types_codec_.constructor.md)‹O› &#124; keyof InterfaceTypes |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Result](_codec_result_.result.md)‹O, E››*
