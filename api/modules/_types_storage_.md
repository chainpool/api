[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](_types_storage_.md)

# Module: "types/storage"

## Index

### Interfaces

* [AugmentedQueries](../interfaces/_types_storage_.augmentedqueries.md)
* [QueryableModuleStorage](../interfaces/_types_storage_.queryablemodulestorage.md)
* [QueryableStorageMultiBase](../interfaces/_types_storage_.queryablestoragemultibase.md)
* [QueryableStorageMultiPromise](../interfaces/_types_storage_.queryablestoragemultipromise.md)
* [StorageEntryBase](../interfaces/_types_storage_.storageentrybase.md)
* [StorageEntryDoubleMap](../interfaces/_types_storage_.storageentrydoublemap.md)
* [StorageEntryPromiseOverloads](../interfaces/_types_storage_.storageentrypromiseoverloads.md)

### Type aliases

* [AugmentedQuery](_types_storage_.md#augmentedquery)
* [AugmentedQueryDoubleMap](_types_storage_.md#augmentedquerydoublemap)
* [QueryableStorageEntry](_types_storage_.md#queryablestorageentry)
* [QueryableStorageMulti](_types_storage_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_types_storage_.md#queryablestoragemultiarg)

## Type aliases

###  AugmentedQuery

Ƭ **AugmentedQuery**: *[MethodResult](_types_base_.md#methodresult)‹ApiType, F› & [StorageEntryBase](../interfaces/_types_storage_.storageentrybase.md)‹ApiType, F›*

*Defined in [api/src/types/storage.ts:16](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/api/src/types/storage.ts#L16)*

___

###  AugmentedQueryDoubleMap

Ƭ **AugmentedQueryDoubleMap**: *[MethodResult](_types_base_.md#methodresult)‹ApiType, F› & [StorageEntryDoubleMap](../interfaces/_types_storage_.storageentrydoublemap.md)‹ApiType, F›*

*Defined in [api/src/types/storage.ts:18](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/api/src/types/storage.ts#L18)*

___

###  QueryableStorageEntry

Ƭ **QueryableStorageEntry**: *ApiType extends "rxjs" ? AugmentedQuery<"rxjs", GenericStorageEntryFunction> : AugmentedQuery<"promise", GenericStorageEntryFunction> & StorageEntryPromiseOverloads*

*Defined in [api/src/types/storage.ts:23](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/api/src/types/storage.ts#L23)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *ApiType extends "rxjs" ? QueryableStorageMultiBase<ApiType> : QueryableStorageMultiPromise<ApiType>*

*Defined in [api/src/types/storage.ts:81](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/api/src/types/storage.ts#L81)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_types_storage_.md#queryablestorageentry)‹ApiType› | [[QueryableStorageEntry](_types_storage_.md#queryablestorageentry)‹ApiType›, undefined | string | number | false | true | Codec | Uint8Array‹› | BN‹› | CodecArgArray‹› | object]*

*Defined in [api/src/types/storage.ts:68](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/api/src/types/storage.ts#L68)*
