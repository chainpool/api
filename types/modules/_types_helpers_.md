[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/helpers"](_types_helpers_.md)

# Module: "types/helpers"

## Index

### Type aliases

* [AnyFunction](_types_helpers_.md#anyfunction)
* [AnyJson](_types_helpers_.md#anyjson)
* [AnyNumber](_types_helpers_.md#anynumber)
* [AnyString](_types_helpers_.md#anystring)
* [AnyU8a](_types_helpers_.md#anyu8a)
* [ArrayElementType](_types_helpers_.md#arrayelementtype)
* [BareOpts](_types_helpers_.md#bareopts)
* [Callback](_types_helpers_.md#callback)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [packages/types/src/types/helpers.ts:9](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/types/helpers.ts#L9)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | AnyJsonArray | object*

*Defined in [packages/types/src/types/helpers.ts:14](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/types/helpers.ts#L14)*

___

###  AnyNumber

Ƭ **AnyNumber**: *BN | BigInt | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | number | string*

*Defined in [packages/types/src/types/helpers.ts:16](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/types/helpers.ts#L16)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [packages/types/src/types/helpers.ts:18](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/types/helpers.ts#L18)*

___

###  AnyU8a

Ƭ **AnyU8a**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | number[] | string*

*Defined in [packages/types/src/types/helpers.ts:20](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/types/helpers.ts#L20)*

___

###  ArrayElementType

Ƭ **ArrayElementType**: *T extends ReadonlyArray<infer ElementType> ? ElementType : never*

*Defined in [packages/types/src/types/helpers.ts:23](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/types/helpers.ts#L23)*

___

###  BareOpts

Ƭ **BareOpts**: *boolean | Record‹string, boolean›*

*Defined in [packages/types/src/types/helpers.ts:27](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/types/helpers.ts#L27)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [packages/types/src/types/helpers.ts:29](https://github.com/polkadot-js/api/blob/6a9e3d80f1/packages/types/src/types/helpers.ts#L29)*

#### Type declaration:

▸ (`result`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |
