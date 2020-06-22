[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/base"](../modules/_types_base_.md) › [PromiseResult](_types_base_.promiseresult.md)

# Interface: PromiseResult ‹**F**›

## Type parameters

▪ **F**: *AnyFunction*

## Hierarchy

* **PromiseResult**

  ↳ [RpcPromiseResult](_types_rpc_.rpcpromiseresult.md)

## Callable

▸ (...`args`: Parameters‹F›): *Promise‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››*

*Defined in [api/src/types/base.ts:55](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/types/base.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››*

▸ (...`args`: [Push](../modules/_types_base_.md#push)‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F››››): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/base.ts:56](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/types/base.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Push](../modules/_types_base_.md#push)‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

▸ ‹**T**›(...`args`: Parameters‹F›): *Promise‹T›*

*Defined in [api/src/types/base.ts:57](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/types/base.ts#L57)*

**Type parameters:**

▪ **T**: *Codec | Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹T›*

▸ ‹**T**›(...`args`: [Push](../modules/_types_base_.md#push)‹Parameters‹F›, Callback‹T››): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/base.ts:58](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/types/base.ts#L58)*

**Type parameters:**

▪ **T**: *Codec | Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Push](../modules/_types_base_.md#push)‹Parameters‹F›, Callback‹T›› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*
