[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](../modules/_types_storage_.md) › [QueryableStorageMultiPromise](_types_storage_.queryablestoragemultipromise.md)

# Interface: QueryableStorageMultiPromise ‹**ApiType**›

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

* **QueryableStorageMultiPromise**

## Callable

▸ ‹**T**›(`calls`: [QueryableStorageMultiArg](../modules/_types_storage_.md#queryablestoragemultiarg)‹ApiType›[], `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/storage.ts:77](https://github.com/polkadot-js/api/blob/00fed90da2/packages/api/src/types/storage.ts#L77)*

**Type parameters:**

▪ **T**: *Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`calls` | [QueryableStorageMultiArg](../modules/_types_storage_.md#queryablestoragemultiarg)‹ApiType›[] |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

▸ ‹**T**›(`calls`: [QueryableStorageMultiArg](../modules/_types_storage_.md#queryablestoragemultiarg)‹ApiType›[]): *Promise‹T›*

*Defined in [api/src/types/storage.ts:78](https://github.com/polkadot-js/api/blob/00fed90da2/packages/api/src/types/storage.ts#L78)*

**Type parameters:**

▪ **T**: *Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`calls` | [QueryableStorageMultiArg](../modules/_types_storage_.md#queryablestoragemultiarg)‹ApiType›[] |

**Returns:** *Promise‹T›*
