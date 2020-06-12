[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/U32"](../modules/_primitive_u32_.md) › [U32](_primitive_u32_.u32.md)

# Class: U32

**`name`** U32

**`description`** 
A 32-bit unsigned integer

## Hierarchy

  ↳ [UInt](_codec_uint_.uint.md)

  ↳ **U32**

  ↳ [AccountIndex](_generic_accountindex_.accountindex.md)

  ↳ [ConsensusEngineId](_generic_consensusengineid_.consensusengineid.md)

  ↳ [USize](_primitive_usize_.usize.md)

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_primitive_u32_.u32.mprime.md)
* [ReductionContext](../interfaces/_primitive_u32_.u32.reductioncontext.md)

### Type aliases

* [Endianness](_primitive_u32_.u32.md#static-endianness)
* [IPrimeName](_primitive_u32_.u32.md#static-iprimename)

### Constructors

* [constructor](_primitive_u32_.u32.md#constructor)

### Methods

* [with](_primitive_u32_.u32.md#static-with)

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

\+ **new U32**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [AnyNumber](../modules/_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): *[U32](_primitive_u32_.u32.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:19](https://github.com/polkadot-js/api/blob/6a281211b4/packages/types/src/codec/UInt.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | false |

**Returns:** *[U32](_primitive_u32_.u32.md)*

## Methods

### `Static` with

▸ **with**(`bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `typeName?`: undefined | string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*

*Inherited from [UInt](_codec_uint_.uint.md).[with](_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:24](https://github.com/polkadot-js/api/blob/6a281211b4/packages/types/src/codec/UInt.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*
