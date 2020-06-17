[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](../modules/_types_storage_.md) › [StorageEntryPromiseOverloads](_types_storage_.storageentrypromiseoverloads.md)

# Interface: StorageEntryPromiseOverloads

## Hierarchy

* **StorageEntryPromiseOverloads**

## Callable

▸ (`arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹Codec›*

*Defined in [api/src/types/storage.ts:56](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/api/src/types/storage.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

**Returns:** *Promise‹Codec›*

▸ ‹**T**›(`arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹T›*

*Defined in [api/src/types/storage.ts:57](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/api/src/types/storage.ts#L57)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

**Returns:** *Promise‹T›*

▸ ‹**T**›(`callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/storage.ts:58](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/api/src/types/storage.ts#L58)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

▸ ‹**T**›(`arg`: CodecArg, `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/storage.ts:59](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/api/src/types/storage.ts#L59)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | CodecArg |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

▸ ‹**T**›(`arg1`: CodecArg, `arg2`: CodecArg, `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/storage.ts:60](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/api/src/types/storage.ts#L60)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | CodecArg |
`arg2` | CodecArg |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*
