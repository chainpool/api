[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/base"](../modules/_types_base_.md) › [RxResult](_types_base_.rxresult.md)

# Interface: RxResult ‹**F**›

## Type parameters

▪ **F**: *AnyFunction*

## Hierarchy

* **RxResult**

  ↳ [RpcRxResult](_types_rpc_.rpcrxresult.md)

## Callable

▸ (...`args`: Parameters‹F›): *Observable‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››*

*Defined in [api/src/types/base.ts:50](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/types/base.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Observable‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››*

▸ ‹**T**›(...`args`: Parameters‹F›): *Observable‹T›*

*Defined in [api/src/types/base.ts:51](https://github.com/polkadot-js/api/blob/b4306cb60a/packages/api/src/types/base.ts#L51)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Observable‹T›*
