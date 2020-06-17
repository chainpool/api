[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/stakerSlashes"](_staking_stakerslashes_.md)

# Module: "staking/stakerSlashes"

## Index

### Functions

* [_stakerSlashes](_staking_stakerslashes_.md#_stakerslashes)
* [stakerSlashes](_staking_stakerslashes_.md#stakerslashes)

## Functions

###  _stakerSlashes

▸ **_stakerSlashes**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerSlashes.ts:14](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/api-derive/src/staking/stakerSlashes.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveStakerSlashes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  stakerSlashes

▸ **stakerSlashes**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerSlashes.ts:29](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/api-derive/src/staking/stakerSlashes.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `withActive?`: undefined | false | true): *Observable‹DeriveStakerSlashes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`withActive?` | undefined &#124; false &#124; true |
