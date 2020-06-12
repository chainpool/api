[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/rpc"](../modules/_types_rpc_.md) › [RpcRxResult](_types_rpc_.rpcrxresult.md)

# Interface: RpcRxResult ‹**F**›

## Type parameters

▪ **F**: *AnyFunction*

## Hierarchy

* [RxResult](_types_base_.rxresult.md)‹F›

  ↳ **RpcRxResult**

## Callable

▸ (...`args`: Parameters‹F›): *Observable‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››*

*Defined in [api/src/types/base.ts:48](https://github.com/polkadot-js/api/blob/6a281211b4/packages/api/src/types/base.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Observable‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››*

▸ ‹**T**›(...`args`: Parameters‹F›): *Observable‹T›*

*Defined in [api/src/types/base.ts:49](https://github.com/polkadot-js/api/blob/6a281211b4/packages/api/src/types/base.ts#L49)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Observable‹T›*

## Index

### Methods

* [raw](_types_rpc_.rpcrxresult.md#raw)

## Methods

###  raw

▸ **raw**(...`args`: Parameters‹F›): *Observable‹Uint8Array & Codec›*

*Defined in [api/src/types/rpc.ts:12](https://github.com/polkadot-js/api/blob/6a281211b4/packages/api/src/types/rpc.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Observable‹Uint8Array & Codec›*
