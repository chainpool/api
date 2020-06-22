[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](../modules/_types_storage_.md) › [StorageEntryBase](_types_storage_.storageentrybase.md)

# Interface: StorageEntryBase ‹**ApiType, F**›

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

▪ **F**: *AnyFunction*

## Hierarchy

* **StorageEntryBase**

  ↳ [StorageEntryDoubleMap](_types_storage_.storageentrydoublemap.md)

## Index

### Properties

* [at](_types_storage_.storageentrybase.md#at)
* [creator](_types_storage_.storageentrybase.md#creator)
* [entries](_types_storage_.storageentrybase.md#entries)
* [entriesPaged](_types_storage_.storageentrybase.md#entriespaged)
* [hash](_types_storage_.storageentrybase.md#hash)
* [key](_types_storage_.storageentrybase.md#key)
* [keyPrefix](_types_storage_.storageentrybase.md#keyprefix)
* [keys](_types_storage_.storageentrybase.md#keys)
* [keysPaged](_types_storage_.storageentrybase.md#keyspaged)
* [multi](_types_storage_.storageentrybase.md#multi)
* [range](_types_storage_.storageentrybase.md#range)
* [size](_types_storage_.storageentrybase.md#size)

## Properties

###  at

• **at**: *function*

*Defined in [api/src/types/storage.ts:29](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L29)*

#### Type declaration:

▸ ‹**T**›(`hash`: Hash | Uint8Array | string, ...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, T›*

**Type parameters:**

▪ **T**: *Codec | any*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | Hash &#124; Uint8Array &#124; string |
`...args` | Parameters‹F› |

___

###  creator

• **creator**: *StorageEntry*

*Defined in [api/src/types/storage.ts:30](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L30)*

___

###  entries

• **entries**: *function*

*Defined in [api/src/types/storage.ts:31](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L31)*

#### Type declaration:

▸ ‹**T**›(`arg?`: Parameters<F>[0]): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, [StorageKey, T][]›*

**Type parameters:**

▪ **T**: *Codec | any*

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | Parameters<F>[0] |

___

###  entriesPaged

• **entriesPaged**: *function*

*Defined in [api/src/types/storage.ts:32](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L32)*

#### Type declaration:

▸ ‹**T**›(`opts`: [PaginationOptions](_types_base_.paginationoptions.md)‹Parameters<F>[0]›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, [StorageKey, T][]›*

**Type parameters:**

▪ **T**: *Codec | any*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [PaginationOptions](_types_base_.paginationoptions.md)‹Parameters<F>[0]› |

___

###  hash

• **hash**: *function*

*Defined in [api/src/types/storage.ts:33](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L33)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, Hash›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  key

• **key**: *function*

*Defined in [api/src/types/storage.ts:34](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L34)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  keyPrefix

• **keyPrefix**: *function*

*Defined in [api/src/types/storage.ts:35](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L35)*

#### Type declaration:

▸ (): *string*

___

###  keys

• **keys**: *function*

*Defined in [api/src/types/storage.ts:36](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L36)*

#### Type declaration:

▸ (`arg?`: any): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, StorageKey[]›*

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | any |

___

###  keysPaged

• **keysPaged**: *function*

*Defined in [api/src/types/storage.ts:37](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L37)*

#### Type declaration:

▸ (`opts`: [PaginationOptions](_types_base_.paginationoptions.md)‹Parameters<F>[0]›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, StorageKey[]›*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [PaginationOptions](_types_base_.paginationoptions.md)‹Parameters<F>[0]› |

___

###  multi

• **multi**: *ApiType extends "rxjs" ? StorageEntryObservableMulti : StorageEntryPromiseMulti*

*Defined in [api/src/types/storage.ts:40](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L40)*

___

###  range

• **range**: *function*

*Defined in [api/src/types/storage.ts:38](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L38)*

#### Type declaration:

▸ ‹**T**›(`__namedParameters`: [string | Uint8Array‹› | Hash‹›, undefined | string | Uint8Array‹› | Hash‹›], ...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, [Hash, T][]›*

**Type parameters:**

▪ **T**: *Codec | any*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [string &#124; Uint8Array‹› &#124; Hash‹›, undefined &#124; string &#124; Uint8Array‹› &#124; Hash‹›] |
`...args` | Parameters‹F› |

___

###  size

• **size**: *function*

*Defined in [api/src/types/storage.ts:39](https://github.com/polkadot-js/api/blob/2493442a2e/packages/api/src/types/storage.ts#L39)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, u64›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |
