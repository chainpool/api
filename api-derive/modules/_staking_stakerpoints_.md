[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/stakerPoints"](_staking_stakerpoints_.md)

# Module: "staking/stakerPoints"

## Index

### Functions

* [_stakerPoints](_staking_stakerpoints_.md#_stakerpoints)
* [stakerPoints](_staking_stakerpoints_.md#stakerpoints)

## Functions

###  _stakerPoints

▸ **_stakerPoints**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerPoints.ts:14](https://github.com/polkadot-js/api/blob/00fed90da2/packages/api-derive/src/staking/stakerPoints.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveStakerPoints[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  stakerPoints

▸ **stakerPoints**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerPoints.ts:30](https://github.com/polkadot-js/api/blob/00fed90da2/packages/api-derive/src/staking/stakerPoints.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `withActive?`: undefined | false | true): *Observable‹DeriveStakerPoints[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`withActive?` | undefined &#124; false &#124; true |
