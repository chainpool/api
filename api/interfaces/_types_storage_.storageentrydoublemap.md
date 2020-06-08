[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](../modules/_types_storage_.md) › [StorageEntryDoubleMap](_types_storage_.storageentrydoublemap.md)

# Interface: StorageEntryDoubleMap ‹**ApiType, F**›

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

▪ **F**: *AnyFunction*

## Hierarchy

* [StorageEntryBase](_types_storage_.storageentrybase.md)‹ApiType, F›

  ↳ **StorageEntryDoubleMap**

## Index

### Properties

* [at](_types_storage_.storageentrydoublemap.md#at)
* [creator](_types_storage_.storageentrydoublemap.md#creator)
* [entries](_types_storage_.storageentrydoublemap.md#entries)
* [hash](_types_storage_.storageentrydoublemap.md#hash)
* [key](_types_storage_.storageentrydoublemap.md#key)
* [keyPrefix](_types_storage_.storageentrydoublemap.md#keyprefix)
* [keys](_types_storage_.storageentrydoublemap.md#keys)
* [multi](_types_storage_.storageentrydoublemap.md#multi)
* [range](_types_storage_.storageentrydoublemap.md#range)
* [size](_types_storage_.storageentrydoublemap.md#size)

## Properties

###  at

• **at**: *function*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[at](_types_storage_.storageentrybase.md#at)*

*Defined in [api/src/types/storage.ts:29](https://github.com/polkadot-js/api/blob/ff52876920/packages/api/src/types/storage.ts#L29)*

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

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[creator](_types_storage_.storageentrybase.md#creator)*

*Defined in [api/src/types/storage.ts:30](https://github.com/polkadot-js/api/blob/ff52876920/packages/api/src/types/storage.ts#L30)*

___

###  entries

• **entries**: *function*

*Overrides [StorageEntryBase](_types_storage_.storageentrybase.md).[entries](_types_storage_.storageentrybase.md#entries)*

*Defined in [api/src/types/storage.ts:42](https://github.com/polkadot-js/api/blob/ff52876920/packages/api/src/types/storage.ts#L42)*

#### Type declaration:

▸ ‹**T**›(`arg?`: Parameters<F>[0]): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, [StorageKey, T][]›*

**Type parameters:**

▪ **T**: *Codec | any*

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | Parameters<F>[0] |

___

###  hash

• **hash**: *function*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[hash](_types_storage_.storageentrybase.md#hash)*

*Defined in [api/src/types/storage.ts:32](https://github.com/polkadot-js/api/blob/ff52876920/packages/api/src/types/storage.ts#L32)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, Hash›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  key

• **key**: *function*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[key](_types_storage_.storageentrybase.md#key)*

*Defined in [api/src/types/storage.ts:33](https://github.com/polkadot-js/api/blob/ff52876920/packages/api/src/types/storage.ts#L33)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  keyPrefix

• **keyPrefix**: *function*

*Overrides [StorageEntryBase](_types_storage_.storageentrybase.md).[keyPrefix](_types_storage_.storageentrybase.md#keyprefix)*

*Defined in [api/src/types/storage.ts:43](https://github.com/polkadot-js/api/blob/ff52876920/packages/api/src/types/storage.ts#L43)*

#### Type declaration:

▸ (`key1?`: Parameters<F>[0]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`key1?` | Parameters<F>[0] |

___

###  keys

• **keys**: *function*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[keys](_types_storage_.storageentrybase.md#keys)*

*Defined in [api/src/types/storage.ts:35](https://github.com/polkadot-js/api/blob/ff52876920/packages/api/src/types/storage.ts#L35)*

#### Type declaration:

▸ (`arg?`: any): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, StorageKey[]›*

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | any |

___

###  multi

• **multi**: *ApiType extends "rxjs" ? StorageEntryObservableMulti : StorageEntryPromiseMulti*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[multi](_types_storage_.storageentrybase.md#multi)*

*Defined in [api/src/types/storage.ts:38](https://github.com/polkadot-js/api/blob/ff52876920/packages/api/src/types/storage.ts#L38)*

___

###  range

• **range**: *function*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[range](_types_storage_.storageentrybase.md#range)*

*Defined in [api/src/types/storage.ts:36](https://github.com/polkadot-js/api/blob/ff52876920/packages/api/src/types/storage.ts#L36)*

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

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[size](_types_storage_.storageentrybase.md#size)*

*Defined in [api/src/types/storage.ts:37](https://github.com/polkadot-js/api/blob/ff52876920/packages/api/src/types/storage.ts#L37)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, u64›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |
