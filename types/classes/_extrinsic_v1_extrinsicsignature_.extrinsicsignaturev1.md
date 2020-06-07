[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["extrinsic/v1/ExtrinsicSignature"](../modules/_extrinsic_v1_extrinsicsignature_.md) › [ExtrinsicSignatureV1](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)

# Class: ExtrinsicSignatureV1 ‹**S, T, V, E**›

**`name`** GenericExtrinsicSignatureV1

**`description`** 
A container for the [Signature](../interfaces/_augment_registry_._registry_.interfacetypes.md#signature) associated with a specific [Extrinsic](_extrinsic_extrinsic_.extrinsic.md)

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicSignatureV1**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)
* [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)

## Index

### Constructors

* [constructor](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#constructor)

### Properties

* [registry](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#readonly-registry)

### Accessors

* [Type](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#type)
* [defKeys](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#defkeys)
* [encodedLength](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#encodedlength)
* [era](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#era)
* [hash](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#hash)
* [isEmpty](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#isempty)
* [isSigned](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#issigned)
* [nonce](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#nonce)
* [signature](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#signature)
* [signer](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#signer)
* [tip](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tip)

### Methods

* [addSignature](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#addsignature)
* [createPayload](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#createpayload)
* [eq](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#eq)
* [get](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#get)
* [getAtIndex](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#getatindex)
* [sign](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#sign)
* [signFake](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#signfake)
* [toArray](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#toarray)
* [toHex](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tohex)
* [toHuman](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tohuman)
* [toJSON](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tojson)
* [toRawType](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#torawtype)
* [toString](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tostring)
* [toU8a](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tou8a)
* [typesToMap](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#static-typestomap)
* [with](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicSignatureV1**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: [ExtrinsicSignatureV1](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array), `__namedParameters`: object): *[ExtrinsicSignatureV1](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:22](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L22)*

**Parameters:**

▪ **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

▪`Optional`  **value**: *[ExtrinsicSignatureV1](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array)*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`isSigned` | undefined &#124; false &#124; true |

**Returns:** *[ExtrinsicSignatureV1](_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md).[registry](../interfaces/_types_extrinsic_.iextrinsicsignature.md#readonly-registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#readonly-registry)*

*Defined in [packages/types/src/codec/Struct.ts:112](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L112)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:175](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L175)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:153](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L153)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:56](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L56)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:72](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L72)*

**`description`** The [ExtrinsicEra](_extrinsic_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** *ExtrinsicEra*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L200)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L160)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:65](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L65)*

**`description`** `true` if the signature is valid

**Returns:** *boolean*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:79](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L79)*

**`description`** The [Index](../interfaces/_augment_registry_._registry_.interfacetypes.md#index) for the signature

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  signature

• **get signature**(): *Signature*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:86](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L86)*

**`description`** The actual [Signature](../interfaces/_augment_registry_._registry_.interfacetypes.md#signature) hash

**Returns:** *Signature*

___

###  signer

• **get signer**(): *Address*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:93](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L93)*

**`description`** The [Address](_generic_address_.address.md) that signed

**Returns:** *Address*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:100](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L100)*

**`description`** Forwards compat

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:116](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L116)*

**`description`** Adds a raw signature

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

___

###  createPayload

▸ **createPayload**(`method`: Call, `__namedParameters`: object): *[ExtrinsicPayloadV1](_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:127](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L127)*

**`description`** Creates a payload from the supplied options

**Parameters:**

▪ **method**: *Call*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blockHash` | string &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; number[] |
`era` | undefined &#124; [IExtrinsicEra](../interfaces/_types_extrinsic_.iextrinsicera.md) |
`genesisHash` | string &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; number[] |
`nonce` | string &#124; number &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; BN‹› &#124; BigInt |

**Returns:** *[ExtrinsicPayloadV1](_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L207)*

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

*Defined in [packages/types/src/codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L215)*

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

*Defined in [packages/types/src/codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L222)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

___

###  sign

▸ **sign**(`method`: Call, `account`: [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md)): *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:144](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L144)*

**`description`** Generate a payload and applies the signature from a keypair

**Parameters:**

Name | Type |
------ | ------ |
`method` | Call |
`account` | [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

___

###  signFake

▸ **signFake**(`method`: Call, `address`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md)): *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:158](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L158)*

**`description`** Generate a payload and applies a fake signature

**Parameters:**

Name | Type |
------ | ------ |
`method` | Call |
`address` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:229](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L229)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:236](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L236)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHuman](_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:243](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L243)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:256](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L256)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:280](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L280)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:289](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L289)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicSignature.ts:170](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/extrinsic/v1/ExtrinsicSignature.ts#L170)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:269](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L269)*

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

*Defined in [packages/types/src/codec/Struct.ts:129](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/codec/Struct.ts#L129)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | [Map](_codec_struct_.struct.md#static-map)‹keyof S, string› |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
