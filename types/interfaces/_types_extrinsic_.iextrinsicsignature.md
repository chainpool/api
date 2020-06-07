[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)

# Interface: IExtrinsicSignature

## Hierarchy

* ExtrinsicSignatureBase

* [Codec](_types_codec_.codec.md)

  ↳ **IExtrinsicSignature**

## Implemented by

* [ExtrinsicSignatureV1](../classes/_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)
* [ExtrinsicSignatureV3](../classes/_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)
* [ExtrinsicSignatureV4](../classes/_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

## Index

### Properties

* [encodedLength](_types_extrinsic_.iextrinsicsignature.md#readonly-encodedlength)
* [era](_types_extrinsic_.iextrinsicsignature.md#readonly-era)
* [hash](_types_extrinsic_.iextrinsicsignature.md#readonly-hash)
* [isEmpty](_types_extrinsic_.iextrinsicsignature.md#readonly-isempty)
* [isSigned](_types_extrinsic_.iextrinsicsignature.md#readonly-issigned)
* [nonce](_types_extrinsic_.iextrinsicsignature.md#readonly-nonce)
* [registry](_types_extrinsic_.iextrinsicsignature.md#readonly-registry)
* [signature](_types_extrinsic_.iextrinsicsignature.md#readonly-signature)
* [signer](_types_extrinsic_.iextrinsicsignature.md#readonly-signer)
* [tip](_types_extrinsic_.iextrinsicsignature.md#readonly-tip)

### Methods

* [addSignature](_types_extrinsic_.iextrinsicsignature.md#addsignature)
* [eq](_types_extrinsic_.iextrinsicsignature.md#eq)
* [sign](_types_extrinsic_.iextrinsicsignature.md#sign)
* [signFake](_types_extrinsic_.iextrinsicsignature.md#signfake)
* [toHex](_types_extrinsic_.iextrinsicsignature.md#tohex)
* [toHuman](_types_extrinsic_.iextrinsicsignature.md#tohuman)
* [toJSON](_types_extrinsic_.iextrinsicsignature.md#tojson)
* [toRawType](_types_extrinsic_.iextrinsicsignature.md#torawtype)
* [toString](_types_extrinsic_.iextrinsicsignature.md#tostring)
* [toU8a](_types_extrinsic_.iextrinsicsignature.md#tou8a)

## Properties

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:39](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` era

• **era**: *[IExtrinsicEra](_types_extrinsic_.iextrinsicera.md)*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[era](_types_extrinsic_.iextrinsicsignature.md#readonly-era)*

*Defined in [packages/types/src/types/extrinsic.ts:69](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/extrinsic.ts#L69)*

___

### `Readonly` hash

• **hash**: *H256*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/codec.ts:44](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L44)*

**`description`** Returns a hash of the value

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:49](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L49)*

**`description`** Checks if the value is an empty value

___

### `Readonly` isSigned

• **isSigned**: *boolean*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[isSigned](_types_extrinsic_.iextrinsicsignature.md#readonly-issigned)*

*Defined in [packages/types/src/types/extrinsic.ts:68](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/extrinsic.ts#L68)*

___

### `Readonly` nonce

• **nonce**: *[ICompact](_types_interfaces_.icompact.md)‹Index›*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[nonce](_types_extrinsic_.iextrinsicsignature.md#readonly-nonce)*

*Defined in [packages/types/src/types/extrinsic.ts:70](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/extrinsic.ts#L70)*

___

### `Readonly` registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:54](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L54)*

**`description`** The registry associated with this object

___

### `Readonly` signature

• **signature**: *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[signature](_types_extrinsic_.iextrinsicsignature.md#readonly-signature)*

*Defined in [packages/types/src/types/extrinsic.ts:71](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/extrinsic.ts#L71)*

___

### `Readonly` signer

• **signer**: *Address*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[signer](_types_extrinsic_.iextrinsicsignature.md#readonly-signer)*

*Defined in [packages/types/src/types/extrinsic.ts:72](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/extrinsic.ts#L72)*

___

### `Readonly` tip

• **tip**: *[ICompact](_types_interfaces_.icompact.md)‹Balance›*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[tip](_types_extrinsic_.iextrinsicsignature.md#readonly-tip)*

*Defined in [packages/types/src/types/extrinsic.ts:73](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/extrinsic.ts#L73)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `payload`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string): *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types/extrinsic.ts:88](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/extrinsic.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:59](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L59)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`method`: Call, `account`: [IKeyringPair](_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](_types_extrinsic_.signatureoptions.md)): *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types/extrinsic.ts:89](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/extrinsic.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Call |
`account` | [IKeyringPair](_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

___

###  signFake

▸ **signFake**(`method`: Call, `address`: Address | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](_types_extrinsic_.signatureoptions.md)): *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types/extrinsic.ts:90](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/extrinsic.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Call |
`address` | Address &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:64](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L64)*

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

*Defined in [packages/types/src/types/codec.ts:69](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L69)*

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

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L74)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:79](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L79)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:84](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L84)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:90](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/codec.ts#L90)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
