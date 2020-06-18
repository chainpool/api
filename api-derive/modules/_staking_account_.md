[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/account"](_staking_account_.md)

# Module: "staking/account"

## Index

### Functions

* [_account](_staking_account_.md#_account)
* [account](_staking_account_.md#account)
* [accounts](_staking_account_.md#accounts)

## Functions

###  _account

▸ **_account**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/account.ts:73](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/api-derive/src/staking/account.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`sessionInfo`: DeriveSessionInfo, `accountId`: Uint8Array | string): *Observable‹DeriveStakingAccount›*

**Parameters:**

Name | Type |
------ | ------ |
`sessionInfo` | DeriveSessionInfo |
`accountId` | Uint8Array &#124; string |

___

###  account

▸ **account**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/account.ts:83](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/api-derive/src/staking/account.ts#L83)*

**`description`** From a stash, retrieve the controllerId and fill in all the relevant staking details

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string): *Observable‹DeriveStakingAccount›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |

___

###  accounts

▸ **accounts**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/account.ts:93](https://github.com/polkadot-js/api/blob/5c5db2709b/packages/api-derive/src/staking/account.ts#L93)*

**`description`** From a list of stashes, fill in all the relevant staking details

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountIds`: string | Uint8Array‹›[]): *Observable‹DeriveStakingAccount[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountIds` | string &#124; Uint8Array‹›[] |
