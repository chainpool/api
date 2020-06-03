[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/erasPrefs"](_staking_erasprefs_.md)

# Module: "staking/erasPrefs"

## Index

### Functions

* [_eraPrefs](_staking_erasprefs_.md#_eraprefs)
* [_erasPrefs](_staking_erasprefs_.md#_erasprefs)
* [eraPrefs](_staking_erasprefs_.md#eraprefs)
* [erasPrefs](_staking_erasprefs_.md#erasprefs)

## Functions

###  _eraPrefs

▸ **_eraPrefs**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasPrefs.ts:27](https://github.com/polkadot-js/api/blob/11d162a10d/packages/api-derive/src/staking/erasPrefs.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex, `withActive`: boolean): *Observable‹DeriveEraPrefs›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |
`withActive` | boolean |

___

###  _erasPrefs

▸ **_erasPrefs**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasPrefs.ts:54](https://github.com/polkadot-js/api/blob/11d162a10d/packages/api-derive/src/staking/erasPrefs.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveEraPrefs[]›*

**Parameters:**

Name | Type |
------ | ------ |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  eraPrefs

▸ **eraPrefs**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasPrefs.ts:48](https://github.com/polkadot-js/api/blob/11d162a10d/packages/api-derive/src/staking/erasPrefs.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex): *Observable‹DeriveEraPrefs›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |

___

###  erasPrefs

▸ **erasPrefs**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasPrefs.ts:62](https://github.com/polkadot-js/api/blob/11d162a10d/packages/api-derive/src/staking/erasPrefs.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: undefined | false | true): *Observable‹DeriveEraPrefs[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | undefined &#124; false &#124; true |
