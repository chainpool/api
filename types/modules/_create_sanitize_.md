[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["create/sanitize"](_create_sanitize_.md)

# Module: "create/sanitize"

## Index

### Functions

* [alias](_create_sanitize_.md#alias)
* [cleanupCompact](_create_sanitize_.md#cleanupcompact)
* [findClosing](_create_sanitize_.md#findclosing)
* [flattenSingleTuple](_create_sanitize_.md#flattensingletuple)
* [removeColons](_create_sanitize_.md#removecolons)
* [removeGenerics](_create_sanitize_.md#removegenerics)
* [removePairOf](_create_sanitize_.md#removepairof)
* [removeTraits](_create_sanitize_.md#removetraits)
* [removeWrap](_create_sanitize_.md#removewrap)
* [sanitize](_create_sanitize_.md#sanitize)

## Functions

###  alias

▸ **alias**(`src`: string[], `dest`: string, `withChecks`: boolean): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:64](https://github.com/polkadot-js/api/blob/e3d13107a9/packages/types/src/create/sanitize.ts#L64)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`src` | string[] | - |
`dest` | string | - |
`withChecks` | boolean | true |

**Returns:** *Mapper*

___

###  cleanupCompact

▸ **cleanupCompact**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:79](https://github.com/polkadot-js/api/blob/e3d13107a9/packages/types/src/create/sanitize.ts#L79)*

**Returns:** *Mapper*

___

###  findClosing

▸ **findClosing**(`value`: string, `start`: number): *number*

*Defined in [packages/types/src/create/sanitize.ts:46](https://github.com/polkadot-js/api/blob/e3d13107a9/packages/types/src/create/sanitize.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`start` | number |

**Returns:** *number*

___

###  flattenSingleTuple

▸ **flattenSingleTuple**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:97](https://github.com/polkadot-js/api/blob/e3d13107a9/packages/types/src/create/sanitize.ts#L97)*

**Returns:** *Mapper*

___

###  removeColons

▸ **removeColons**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:103](https://github.com/polkadot-js/api/blob/e3d13107a9/packages/types/src/create/sanitize.ts#L103)*

**Returns:** *Mapper*

___

###  removeGenerics

▸ **removeGenerics**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:131](https://github.com/polkadot-js/api/blob/e3d13107a9/packages/types/src/create/sanitize.ts#L131)*

**Returns:** *Mapper*

___

###  removePairOf

▸ **removePairOf**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:159](https://github.com/polkadot-js/api/blob/e3d13107a9/packages/types/src/create/sanitize.ts#L159)*

**Returns:** *Mapper*

___

###  removeTraits

▸ **removeTraits**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:176](https://github.com/polkadot-js/api/blob/e3d13107a9/packages/types/src/create/sanitize.ts#L176)*

**Returns:** *Mapper*

___

###  removeWrap

▸ **removeWrap**(`_check`: string): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:195](https://github.com/polkadot-js/api/blob/e3d13107a9/packages/types/src/create/sanitize.ts#L195)*

**Parameters:**

Name | Type |
------ | ------ |
`_check` | string |

**Returns:** *Mapper*

___

###  sanitize

▸ **sanitize**(`value`: string, `options?`: SanitizeOptions): *string*

*Defined in [packages/types/src/create/sanitize.ts:216](https://github.com/polkadot-js/api/blob/e3d13107a9/packages/types/src/create/sanitize.ts#L216)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`options?` | SanitizeOptions |

**Returns:** *string*
