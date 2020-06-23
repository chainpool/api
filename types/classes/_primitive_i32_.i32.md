[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/I32"](../modules/_primitive_i32_.md) › [I32](_primitive_i32_.i32.md)

# Class: I32

**`name`** I32

**`description`** 
A 32-bit signed integer

## Hierarchy

  ↳ [Int](_codec_int_.int.md)

  ↳ **I32**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_primitive_i32_.i32.mprime.md)
* [ReductionContext](../interfaces/_primitive_i32_.i32.reductioncontext.md)

### Type aliases

* [Endianness](_primitive_i32_.i32.md#static-endianness)
* [IPrimeName](_primitive_i32_.i32.md#static-iprimename)

### Constructors

* [constructor](_primitive_i32_.i32.md#constructor)

### Methods

* [with](_primitive_i32_.i32.md#static-with)

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

\+ **new I32**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [AnyNumber](../modules/_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): *[I32](_primitive_i32_.i32.md)*

*Inherited from [Int](_codec_int_.int.md).[constructor](_codec_int_.int.md#constructor)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:19](https://github.com/polkadot-js/api/blob/bf472fdcf4/packages/types/src/codec/Int.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | true |

**Returns:** *[I32](_primitive_i32_.i32.md)*

## Methods

### `Static` with

▸ **with**(`bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `typeName?`: undefined | string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Int](_codec_int_.int.md)›*

*Inherited from [Int](_codec_int_.int.md).[with](_codec_int_.int.md#static-with)*

*Defined in [packages/types/src/codec/Int.ts:24](https://github.com/polkadot-js/api/blob/bf472fdcf4/packages/types/src/codec/Int.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Int](_codec_int_.int.md)›*
