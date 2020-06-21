[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/erasPoints"](_staking_eraspoints_.md)

# Module: "staking/erasPoints"

## Index

### Functions

* [_erasPoints](_staking_eraspoints_.md#_eraspoints)
* [erasPoints](_staking_eraspoints_.md#eraspoints)

## Functions

###  _erasPoints

▸ **_erasPoints**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasPoints.ts:34](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/api-derive/src/staking/erasPoints.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveEraPoints[]›*

**Parameters:**

Name | Type |
------ | ------ |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  erasPoints

▸ **erasPoints**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasPoints.ts:64](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/api-derive/src/staking/erasPoints.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: undefined | false | true): *Observable‹DeriveEraPoints[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | undefined &#124; false &#124; true |
