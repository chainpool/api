[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/Api"](_promise_api_.md)

# Module: "promise/Api"

## Index

### Classes

* [ApiPromise](../classes/_promise_api_.apipromise.md)

### Functions

* [decorateMethod](_promise_api_.md#decoratemethod)

## Functions

###  decorateMethod

▸ **decorateMethod**‹**Method**›(`method`: Method, `options?`: [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md)): *[StorageEntryPromiseOverloads](../interfaces/_types_storage_.storageentrypromiseoverloads.md)*

*Defined in [api/src/promise/Api.ts:98](https://github.com/polkadot-js/api/blob/76e15d465d/packages/api/src/promise/Api.ts#L98)*

**`description`** Decorate method for ApiPromise, where the results are converted to the Promise equivalent

**Type parameters:**

▪ **Method**: *[DecorateFn](_types_base_.md#decoratefn)‹[ObsInnerType](_types_base_.md#obsinnertype)‹ReturnType‹Method›››*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md) |

**Returns:** *[StorageEntryPromiseOverloads](../interfaces/_types_storage_.storageentrypromiseoverloads.md)*
