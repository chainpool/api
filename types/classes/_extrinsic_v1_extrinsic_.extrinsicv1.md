[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["extrinsic/v1/Extrinsic"](../modules/_extrinsic_v1_extrinsic_.md) › [ExtrinsicV1](_extrinsic_v1_extrinsic_.extrinsicv1.md)

# Class: ExtrinsicV1 ‹**S, T, V, E**›

**`name`** GenericExtrinsicV1

**`description`** 
The first generation of compact extrinsics

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicV1**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)
* [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md)

## Index

### Constructors

* [constructor](_extrinsic_v1_extrinsic_.extrinsicv1.md#constructor)

### Properties

* [registry](_extrinsic_v1_extrinsic_.extrinsicv1.md#readonly-registry)

### Accessors

* [Type](_extrinsic_v1_extrinsic_.extrinsicv1.md#type)
* [defKeys](_extrinsic_v1_extrinsic_.extrinsicv1.md#defkeys)
* [encodedLength](_extrinsic_v1_extrinsic_.extrinsicv1.md#encodedlength)
* [hash](_extrinsic_v1_extrinsic_.extrinsicv1.md#hash)
* [isEmpty](_extrinsic_v1_extrinsic_.extrinsicv1.md#isempty)
* [method](_extrinsic_v1_extrinsic_.extrinsicv1.md#method)
* [signature](_extrinsic_v1_extrinsic_.extrinsicv1.md#signature)
* [version](_extrinsic_v1_extrinsic_.extrinsicv1.md#version)

### Methods

* [addSignature](_extrinsic_v1_extrinsic_.extrinsicv1.md#addsignature)
* [eq](_extrinsic_v1_extrinsic_.extrinsicv1.md#eq)
* [get](_extrinsic_v1_extrinsic_.extrinsicv1.md#get)
* [getAtIndex](_extrinsic_v1_extrinsic_.extrinsicv1.md#getatindex)
* [sign](_extrinsic_v1_extrinsic_.extrinsicv1.md#sign)
* [signFake](_extrinsic_v1_extrinsic_.extrinsicv1.md#signfake)
* [toArray](_extrinsic_v1_extrinsic_.extrinsicv1.md#toarray)
* [toHex](_extrinsic_v1_extrinsic_.extrinsicv1.md#tohex)
* [toHuman](_extrinsic_v1_extrinsic_.extrinsicv1.md#tohuman)
* [toJSON](_extrinsic_v1_extrinsic_.extrinsicv1.md#tojson)
* [toRawType](_extrinsic_v1_extrinsic_.extrinsicv1.md#torawtype)
* [toString](_extrinsic_v1_extrinsic_.extrinsicv1.md#tostring)
* [toU8a](_extrinsic_v1_extrinsic_.extrinsicv1.md#tou8a)
* [typesToMap](_extrinsic_v1_extrinsic_.extrinsicv1.md#static-typestomap)
* [with](_extrinsic_v1_extrinsic_.extrinsicv1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV1**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV1](../interfaces/_extrinsic_v1_extrinsic_.extrinsicvaluev1.md), `__namedParameters`: object): *[ExtrinsicV1](_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/extrinsic/v1/Extrinsic.ts:26](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/extrinsic/v1/Extrinsic.ts#L26)*

**Parameters:**

▪ **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

▪`Optional`  **value**: *[Uint8Array](_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV1](../interfaces/_extrinsic_v1_extrinsic_.extrinsicvaluev1.md)*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`isSigned` | undefined &#124; false &#124; true |

**Returns:** *[ExtrinsicV1](_extrinsic_v1_extrinsic_.extrinsicv1.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md).[registry](../interfaces/_types_extrinsic_.iextrinsicimpl.md#readonly-registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#readonly-registry)*

*Defined in [packages/types/src/codec/Struct.ts:112](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L112)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:175](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L175)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:153](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L153)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/extrinsic/v1/Extrinsic.ts:56](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/extrinsic/v1/Extrinsic.ts#L56)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L200)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L160)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *Call*

*Defined in [packages/types/src/extrinsic/v1/Extrinsic.ts:63](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/extrinsic/v1/Extrinsic.ts#L63)*

**`description`** The [Call](_generic_call_.call.md) this extrinsic wraps

**Returns:** *Call*

___

###  signature

• **get signature**(): *ExtrinsicSignatureV1*

*Defined in [packages/types/src/extrinsic/v1/Extrinsic.ts:70](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/extrinsic/v1/Extrinsic.ts#L70)*

**`description`** The [ExtrinsicSignatureV1](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)

**Returns:** *ExtrinsicSignatureV1*

___

###  version

• **get version**(): *number*

*Defined in [packages/types/src/extrinsic/v1/Extrinsic.ts:77](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/extrinsic/v1/Extrinsic.ts#L77)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicV1](_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md)*

*Defined in [packages/types/src/extrinsic/v1/Extrinsic.ts:84](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/extrinsic/v1/Extrinsic.ts#L84)*

**`description`** Add an [ExtrinsicSignatureV1](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicV1](_extrinsic_v1_extrinsic_.extrinsicv1.md)*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L207)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides [CodecMap](_codec_map_.codecmap.md).[get](_codec_map_.codecmap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L222)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md)): *[ExtrinsicV1](_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md)*

*Defined in [packages/types/src/extrinsic/v1/Extrinsic.ts:93](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/extrinsic/v1/Extrinsic.ts#L93)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md) |

**Returns:** *[ExtrinsicV1](_extrinsic_v1_extrinsic_.extrinsicv1.md)*

___

###  signFake

▸ **signFake**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md)): *[ExtrinsicV1](_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md)*

*Defined in [packages/types/src/extrinsic/v1/Extrinsic.ts:102](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/extrinsic/v1/Extrinsic.ts#L102)*

**`describe`** Adds a fake signature to the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md) |

**Returns:** *[ExtrinsicV1](_extrinsic_v1_extrinsic_.extrinsicv1.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:229](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L229)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:236](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L236)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHuman](_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:243](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L243)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:256](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L256)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:280](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L280)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:289](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L289)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:297](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L297)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:269](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**‹**S**›(`Types`: S, `jsonMap?`: [Map](_codec_struct_.struct.md#static-map)‹keyof S, string›): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:129](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/types/src/codec/Struct.ts#L129)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | [Map](_codec_struct_.struct.md#static-map)‹keyof S, string› |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
