[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/stakerRewards"](_staking_stakerrewards_.md)

# Module: "staking/stakerRewards"

## Index

### Functions

* [_stakerRewards](_staking_stakerrewards_.md#_stakerrewards)
* [stakerRewards](_staking_stakerrewards_.md#stakerrewards)
* [stakerRewardsMulti](_staking_stakerrewards_.md#stakerrewardsmulti)

## Functions

###  _stakerRewards

▸ **_stakerRewards**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:159](https://github.com/polkadot-js/api/blob/45786b31da/packages/api-derive/src/staking/stakerRewards.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `eras`: EraIndex[], `withActive?`: undefined | false | true): *Observable‹DeriveStakerReward[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`eras` | EraIndex[] |
`withActive?` | undefined &#124; false &#124; true |

___

###  stakerRewards

▸ **stakerRewards**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:186](https://github.com/polkadot-js/api/blob/45786b31da/packages/api-derive/src/staking/stakerRewards.ts#L186)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `withActive?`: undefined | false | true): *Observable‹DeriveStakerReward[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`withActive?` | undefined &#124; false &#124; true |

___

###  stakerRewardsMulti

▸ **stakerRewardsMulti**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:194](https://github.com/polkadot-js/api/blob/45786b31da/packages/api-derive/src/staking/stakerRewards.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountIds`: string | Uint8Array‹›[], `withActive?`: undefined | false | true): *Observable‹DeriveStakerReward[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountIds` | string &#124; Uint8Array‹›[] |
`withActive?` | undefined &#124; false &#124; true |