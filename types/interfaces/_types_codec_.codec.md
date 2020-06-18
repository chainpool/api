[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/codec"](../modules/_types_codec_.md) › [Codec](_types_codec_.codec.md)

# Interface: Codec

**`name`** Codec

**`description`** 
The base Codec interface. All types implement the interface provided here. Additionally
implementors can add their own specific interfaces and helpers with getters and functions.
The Codec Base is however required for operating as an encoding/decoding layer

## Hierarchy

* **Codec**

  ↳ [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md)

  ↳ [CompactEncodable](_codec_compact_.compactencodable.md)

  ↳ [RegistryMetadataText](_types_registry_.registrymetadatatext.md)

  ↳ [ICompact](_types_interfaces_.icompact.md)

  ↳ [IMethod](_types_interfaces_.imethod.md)

  ↳ [IU8a](_types_interfaces_.iu8a.md)

  ↳ [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)

  ↳ [IExtrinsicEra](_types_extrinsic_.iextrinsicera.md)

  ↳ [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md)

## Implemented by

* [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md)
* [AccountIndex](../classes/_generic_accountindex_.accountindex.md)
* [Address](../classes/_generic_address_.address.md)
* [BTreeMap](../classes/_codec_btreemap_.btreemap.md)
* [BTreeSet](../classes/_codec_btreeset_.btreeset.md)
* [Base](../classes/_codec_base_.base.md)
* [Block](../classes/_generic_block_.block.md)
* [Bool](../classes/_primitive_bool_.bool.md)
* [Call](../classes/_generic_call_.call.md)
* [CodecDate](../classes/_codec_date_.codecdate.md)
* [CodecMap](../classes/_codec_map_.codecmap.md)
* [CodecSet](../classes/_codec_set_.codecset.md)
* [Compact](../classes/_codec_compact_.compact.md)
* [ConsensusEngineId](../classes/_generic_consensusengineid_.consensusengineid.md)
* [Data](../classes/_primitive_data_.data.md)
* [DoNotConstruct](../classes/_primitive_donotconstruct_.donotconstruct.md)
* [Enum](../classes/_codec_enum_.enum.md)
* [Event](../classes/_generic_event_.event.md)
* [EventData](../classes/_generic_event_.eventdata.md)
* [Extrinsic](../classes/_extrinsic_extrinsic_.extrinsic.md)
* [ExtrinsicEra](../classes/_extrinsic_extrinsicera_.extrinsicera.md)
* [ExtrinsicPayload](../classes/_extrinsic_extrinsicpayload_.extrinsicpayload.md)
* [ExtrinsicPayloadUnknown](../classes/_extrinsic_extrinsicpayloadunknown_.extrinsicpayloadunknown.md)
* [ExtrinsicPayloadV1](../classes/_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)
* [ExtrinsicPayloadV2](../classes/_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)
* [ExtrinsicPayloadV3](../classes/_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)
* [ExtrinsicPayloadV4](../classes/_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)
* [ExtrinsicSignatureV1](../classes/_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)
* [ExtrinsicSignatureV3](../classes/_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)
* [ExtrinsicSignatureV4](../classes/_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)
* [ExtrinsicUnknown](../classes/_extrinsic_extrinsicunknown_.extrinsicunknown.md)
* [ExtrinsicV1](../classes/_extrinsic_v1_extrinsic_.extrinsicv1.md)
* [ExtrinsicV2](../classes/_extrinsic_v2_extrinsic_.extrinsicv2.md)
* [ExtrinsicV3](../classes/_extrinsic_v3_extrinsic_.extrinsicv3.md)
* [ExtrinsicV4](../classes/_extrinsic_v4_extrinsic_.extrinsicv4.md)
* [HashMap](../classes/_codec_hashmap_.hashmap.md)
* [I128](../classes/_primitive_i128_.i128.md)
* [I16](../classes/_primitive_i16_.i16.md)
* [I256](../classes/_primitive_i256_.i256.md)
* [I32](../classes/_primitive_i32_.i32.md)
* [I64](../classes/_primitive_i64_.i64.md)
* [I8](../classes/_primitive_i8_.i8.md)
* [Int](../classes/_codec_int_.int.md)
* [Linkage](../classes/_codec_linkage_.linkage.md)
* [LinkageResult](../classes/_codec_linkage_.linkageresult.md)
* [MortalEra](../classes/_extrinsic_extrinsicera_.mortalera.md)
* [Null](../classes/_primitive_null_.null.md)
* [Option](../classes/_codec_option_.option.md)
* [Result](../classes/_codec_result_.result.md)
* [Struct](../classes/_codec_struct_.struct.md)
* [StructAny](../classes/_codec_structany_.structany.md)
* [Text](../classes/_primitive_text_.text.md)
* [Tuple](../classes/_codec_tuple_.tuple.md)
* [Type](../classes/_primitive_type_.type.md)
* [U128](../classes/_primitive_u128_.u128.md)
* [U16](../classes/_primitive_u16_.u16.md)
* [U256](../classes/_primitive_u256_.u256.md)
* [U32](../classes/_primitive_u32_.u32.md)
* [U64](../classes/_primitive_u64_.u64.md)
* [U8](../classes/_primitive_u8_.u8.md)
* [UInt](../classes/_codec_uint_.uint.md)
* [USize](../classes/_primitive_usize_.usize.md)
* [Vec](../classes/_codec_vec_.vec.md)
* [VecAny](../classes/_codec_vecany_.vecany.md)
* [VecFixed](../classes/_codec_vecfixed_.vecfixed.md)

## Index

### Properties

* [encodedLength](_types_codec_.codec.md#readonly-encodedlength)
* [hash](_types_codec_.codec.md#readonly-hash)
* [isEmpty](_types_codec_.codec.md#readonly-isempty)
* [registry](_types_codec_.codec.md#readonly-registry)

### Methods

* [eq](_types_codec_.codec.md#eq)
* [toHex](_types_codec_.codec.md#tohex)
* [toHuman](_types_codec_.codec.md#tohuman)
* [toJSON](_types_codec_.codec.md#tojson)
* [toRawType](_types_codec_.codec.md#torawtype)
* [toString](_types_codec_.codec.md#tostring)
* [toU8a](_types_codec_.codec.md#tou8a)

## Properties

### `Readonly` encodedLength

• **encodedLength**: *number*

*Defined in [packages/types/src/types/codec.ts:39](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` hash

• **hash**: *H256*

*Defined in [packages/types/src/types/codec.ts:44](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L44)*

**`description`** Returns a hash of the value

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Defined in [packages/types/src/types/codec.ts:49](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L49)*

**`description`** Checks if the value is an empty value

___

### `Readonly` registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Defined in [packages/types/src/types/codec.ts:54](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L54)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Defined in [packages/types/src/types/codec.ts:59](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L59)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Defined in [packages/types/src/types/codec.ts:64](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L64)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Defined in [packages/types/src/types/codec.ts:69](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L69)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L74)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [packages/types/src/types/codec.ts:79](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L79)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [packages/types/src/types/codec.ts:84](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L84)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types/codec.ts:90](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/types/src/types/codec.ts#L90)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
