[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/erasSlashes"](_staking_erasslashes_.md)

# Module: "staking/erasSlashes"

## Index

### Functions

* [_eraSlashes](_staking_erasslashes_.md#_eraslashes)
* [_erasSlashes](_staking_erasslashes_.md#_erasslashes)
* [eraSlashes](_staking_erasslashes_.md#eraslashes)
* [erasSlashes](_staking_erasslashes_.md#erasslashes)

## Functions

###  _eraSlashes

▸ **_eraSlashes**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:33](https://github.com/polkadot-js/api/blob/099cf5a351/packages/api-derive/src/staking/erasSlashes.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex, `withActive`: boolean): *Observable‹DeriveEraSlashes›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |
`withActive` | boolean |

___

###  _erasSlashes

▸ **_erasSlashes**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:63](https://github.com/polkadot-js/api/blob/099cf5a351/packages/api-derive/src/staking/erasSlashes.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveEraSlashes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  eraSlashes

▸ **eraSlashes**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:57](https://github.com/polkadot-js/api/blob/099cf5a351/packages/api-derive/src/staking/erasSlashes.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex): *Observable‹DeriveEraSlashes›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |

___

###  erasSlashes

▸ **erasSlashes**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:73](https://github.com/polkadot-js/api/blob/099cf5a351/packages/api-derive/src/staking/erasSlashes.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: undefined | false | true): *Observable‹DeriveEraSlashes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | undefined &#124; false &#124; true |
