[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/erasExposure"](_staking_erasexposure_.md)

# Module: "staking/erasExposure"

## Index

### Functions

* [_eraExposure](_staking_erasexposure_.md#_eraexposure)
* [_erasExposure](_staking_erasexposure_.md#_erasexposure)
* [eraExposure](_staking_erasexposure_.md#eraexposure)
* [erasExposure](_staking_erasexposure_.md#erasexposure)

## Functions

###  _eraExposure

▸ **_eraExposure**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:39](https://github.com/polkadot-js/api/blob/c7315ffb74/packages/api-derive/src/staking/erasExposure.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex, `withActive`: boolean): *Observable‹DeriveEraExposure›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |
`withActive` | boolean |

___

###  _erasExposure

▸ **_erasExposure**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:66](https://github.com/polkadot-js/api/blob/c7315ffb74/packages/api-derive/src/staking/erasExposure.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveEraExposure[]›*

**Parameters:**

Name | Type |
------ | ------ |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  eraExposure

▸ **eraExposure**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:60](https://github.com/polkadot-js/api/blob/c7315ffb74/packages/api-derive/src/staking/erasExposure.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex): *Observable‹DeriveEraExposure›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |

___

###  erasExposure

▸ **erasExposure**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:74](https://github.com/polkadot-js/api/blob/c7315ffb74/packages/api-derive/src/staking/erasExposure.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: undefined | false | true): *Observable‹DeriveEraExposure[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | undefined &#124; false &#124; true |
