[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/base"](_types_base_.md)

# Module: "types/base"

## Index

### Interfaces

* [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md)
* [PaginationOptions](../interfaces/_types_base_.paginationoptions.md)
* [PromiseResult](../interfaces/_types_base_.promiseresult.md)
* [RxResult](../interfaces/_types_base_.rxresult.md)

### Type aliases

* [ApiTypes](_types_base_.md#apitypes)
* [Cons](_types_base_.md#cons)
* [DecorateFn](_types_base_.md#decoratefn)
* [DecorateMethod](_types_base_.md#decoratemethod)
* [MethodResult](_types_base_.md#methodresult)
* [ObsInnerType](_types_base_.md#obsinnertype)
* [PromiseOrObs](_types_base_.md#promiseorobs)
* [Push](_types_base_.md#push)
* [UnsubscribePromise](_types_base_.md#unsubscribepromise)
* [VoidFn](_types_base_.md#voidfn)

## Type aliases

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [api/src/types/base.ts:28](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/types/base.ts#L28)*

___

###  Cons

Ƭ **Cons**: *function extends function ? R : never*

*Defined in [api/src/types/base.ts:10](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/types/base.ts#L10)*

___

###  DecorateFn

Ƭ **DecorateFn**: *function*

*Defined in [api/src/types/base.ts:73](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/types/base.ts#L73)*

#### Type declaration:

▸ (...`args`: any[]): *Observable‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  DecorateMethod

Ƭ **DecorateMethod**: *function*

*Defined in [api/src/types/base.ts:81](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/types/base.ts#L81)*

#### Type declaration:

▸ ‹**Method**›(`method`: Method, `options?`: [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md)): *any*

**Type parameters:**

▪ **Method**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md) |

___

###  MethodResult

Ƭ **MethodResult**: *ApiType extends "rxjs" ? RxResult<F> : PromiseResult<F>*

*Defined in [api/src/types/base.ts:63](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/types/base.ts#L63)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *O extends Observable<infer U> ? U : never*

*Defined in [api/src/types/base.ts:31](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/types/base.ts#L31)*

___

###  PromiseOrObs

Ƭ **PromiseOrObs**: *ApiType extends "rxjs" ? Observable<T> : Promise<T>*

*Defined in [api/src/types/base.ts:38](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/types/base.ts#L38)*

___

###  Push

Ƭ **Push**:

*Defined in [api/src/types/base.ts:18](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/types/base.ts#L18)*

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *Promise‹[VoidFn](_types_base_.md#voidfn)›*

*Defined in [api/src/types/base.ts:35](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/types/base.ts#L35)*

___

###  VoidFn

Ƭ **VoidFn**: *function*

*Defined in [api/src/types/base.ts:33](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/types/base.ts#L33)*

#### Type declaration:

▸ (): *void*
