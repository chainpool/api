[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/U256"](../modules/_primitive_u256_.md) › [U256](_primitive_u256_.u256.md)

# Class: U256

**`name`** U256

**`description`** 
A 256-bit unsigned integer

## Hierarchy

  ↳ [UInt](_codec_uint_.uint.md)

  ↳ **U256**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_primitive_u256_.u256.mprime.md)
* [ReductionContext](../interfaces/_primitive_u256_.u256.reductioncontext.md)

### Type aliases

* [Endianness](_primitive_u256_.u256.md#static-endianness)
* [IPrimeName](_primitive_u256_.u256.md#static-iprimename)

### Constructors

* [constructor](_primitive_u256_.u256.md#constructor)

### Methods

* [with](_primitive_u256_.u256.md#static-with)

## Type aliases

### `Static` Endianness

Ƭ **Endianness**: *"le" | "be"*

Defined in node_modules/@types/bn.js/index.d.ts:11

___

### `Static` IPrimeName

Ƭ **IPrimeName**: *"k256" | "p224" | "p192" | "p25519"*

Defined in node_modules/@types/bn.js/index.d.ts:12

## Constructors

###  constructor

\+ **new U256**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [AnyNumber](../modules/_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): *[U256](_primitive_u256_.u256.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:19](https://github.com/polkadot-js/api/blob/34101ec12b/packages/types/src/codec/UInt.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | false |

**Returns:** *[U256](_primitive_u256_.u256.md)*

## Methods

### `Static` with

▸ **with**(`bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `typeName?`: undefined | string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*

*Inherited from [UInt](_codec_uint_.uint.md).[with](_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:24](https://github.com/polkadot-js/api/blob/34101ec12b/packages/types/src/codec/UInt.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*
