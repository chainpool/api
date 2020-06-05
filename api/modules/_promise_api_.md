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

*Defined in [api/src/promise/Api.ts:66](https://github.com/polkadot-js/api/blob/f501994df8/packages/api/src/promise/Api.ts#L66)*

**`description`** Decorate method for ApiPromise, where the results are converted to the Promise equivalent

**Type parameters:**

▪ **Method**: *AnyFunction*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md) |

**Returns:** *[StorageEntryPromiseOverloads](../interfaces/_types_storage_.storageentrypromiseoverloads.md)*
