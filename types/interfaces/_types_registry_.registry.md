[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/registry"](../modules/_types_registry_.md) › [Registry](_types_registry_.registry.md)

# Interface: Registry

## Hierarchy

* **Registry**

## Implemented by

* [TypeRegistry](../classes/_create_registry_.typeregistry.md)

## Index

### Properties

* [chainDecimals](_types_registry_.registry.md#readonly-chaindecimals)
* [chainSS58](_types_registry_.registry.md#readonly-chainss58)
* [chainToken](_types_registry_.registry.md#readonly-chaintoken)
* [knownTypes](_types_registry_.registry.md#readonly-knowntypes)
* [signedExtensions](_types_registry_.registry.md#readonly-signedextensions)

### Methods

* [createClass](_types_registry_.registry.md#createclass)
* [createType](_types_registry_.registry.md#createtype)
* [findMetaCall](_types_registry_.registry.md#findmetacall)
* [findMetaError](_types_registry_.registry.md#findmetaerror)
* [findMetaEvent](_types_registry_.registry.md#findmetaevent)
* [get](_types_registry_.registry.md#get)
* [getChainProperties](_types_registry_.registry.md#getchainproperties)
* [getDefinition](_types_registry_.registry.md#getdefinition)
* [getOrThrow](_types_registry_.registry.md#getorthrow)
* [getOrUnknown](_types_registry_.registry.md#getorunknown)
* [getSignedExtensionExtra](_types_registry_.registry.md#getsignedextensionextra)
* [getSignedExtensionTypes](_types_registry_.registry.md#getsignedextensiontypes)
* [hasClass](_types_registry_.registry.md#hasclass)
* [hasDef](_types_registry_.registry.md#hasdef)
* [hasType](_types_registry_.registry.md#hastype)
* [register](_types_registry_.registry.md#register)
* [setChainProperties](_types_registry_.registry.md#setchainproperties)
* [setKnownTypes](_types_registry_.registry.md#setknowntypes)
* [setMetadata](_types_registry_.registry.md#setmetadata)
* [setSignedExtensions](_types_registry_.registry.md#setsignedextensions)

## Properties

### `Readonly` chainDecimals

• **chainDecimals**: *number*

*Defined in [packages/types/src/types/registry.ts:111](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L111)*

___

### `Readonly` chainSS58

• **chainSS58**: *number | undefined*

*Defined in [packages/types/src/types/registry.ts:112](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L112)*

___

### `Readonly` chainToken

• **chainToken**: *string*

*Defined in [packages/types/src/types/registry.ts:113](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L113)*

___

### `Readonly` knownTypes

• **knownTypes**: *[RegisteredTypes](_types_registry_.registeredtypes.md)*

*Defined in [packages/types/src/types/registry.ts:114](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L114)*

___

### `Readonly` signedExtensions

• **signedExtensions**: *string[]*

*Defined in [packages/types/src/types/registry.ts:115](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L115)*

## Methods

###  createClass

▸ **createClass**‹**K**›(`type`: K): *[Constructor](_types_codec_.constructor.md)‹InterfaceTypes[K]›*

*Defined in [packages/types/src/types/registry.ts:123](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L123)*

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |

**Returns:** *[Constructor](_types_codec_.constructor.md)‹InterfaceTypes[K]›*

___

###  createType

▸ **createType**‹**K**›(`type`: K, ...`params`: any[]): *InterfaceTypes[K]*

*Defined in [packages/types/src/types/registry.ts:124](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L124)*

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |
`...params` | any[] |

**Returns:** *InterfaceTypes[K]*

___

###  findMetaCall

▸ **findMetaCall**(`callIndex`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *[CallFunction](_types_calls_.callfunction.md)*

*Defined in [packages/types/src/types/registry.ts:117](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[CallFunction](_types_calls_.callfunction.md)*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *[RegistryError](_types_registry_.registryerror.md)*

*Defined in [packages/types/src/types/registry.ts:118](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[RegistryError](_types_registry_.registryerror.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *[Constructor](_types_codec_.constructor.md)‹any›*

*Defined in [packages/types/src/types/registry.ts:121](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Constructor](_types_codec_.constructor.md)‹any›*

___

###  get

▸ **get**‹**T**›(`name`: string, `withUnknown?`: undefined | false | true): *[Constructor](_types_codec_.constructor.md)‹T› | undefined*

*Defined in [packages/types/src/types/registry.ts:125](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L125)*

**Type parameters:**

▪ **T**: *[Codec](_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`withUnknown?` | undefined &#124; false &#124; true |

**Returns:** *[Constructor](_types_codec_.constructor.md)‹T› | undefined*

___

###  getChainProperties

▸ **getChainProperties**(): *ChainProperties | undefined*

*Defined in [packages/types/src/types/registry.ts:126](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L126)*

**Returns:** *ChainProperties | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Defined in [packages/types/src/types/registry.ts:127](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**‹**T**›(`name`: string, `msg?`: undefined | string): *[Constructor](_types_codec_.constructor.md)‹T›*

*Defined in [packages/types/src/types/registry.ts:128](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L128)*

**Type parameters:**

▪ **T**: *[Codec](_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](_types_codec_.constructor.md)‹T›*

___

###  getOrUnknown

▸ **getOrUnknown**‹**T**›(`name`: string): *[Constructor](_types_codec_.constructor.md)‹T›*

*Defined in [packages/types/src/types/registry.ts:129](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L129)*

**Type parameters:**

▪ **T**: *[Codec](_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](_types_codec_.constructor.md)‹T›*

___

###  getSignedExtensionExtra

▸ **getSignedExtensionExtra**(): *Record‹string, keyof InterfaceTypes›*

*Defined in [packages/types/src/types/registry.ts:131](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L131)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, keyof InterfaceTypes›*

*Defined in [packages/types/src/types/registry.ts:132](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L132)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Defined in [packages/types/src/types/registry.ts:133](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Defined in [packages/types/src/types/registry.ts:134](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Defined in [packages/types/src/types/registry.ts:135](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](_types_codec_.constructor.md) | [RegistryTypes](../modules/_types_registry_.md#registrytypes)): *void*

*Defined in [packages/types/src/types/registry.ts:136](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_types_registry_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](_types_codec_.constructor.md)): *void*

*Defined in [packages/types/src/types/registry.ts:137](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](_types_codec_.constructor.md) |

**Returns:** *void*

▸ **register**(`arg1`: string | [Constructor](_types_codec_.constructor.md) | [RegistryTypes](../modules/_types_registry_.md#registrytypes), `arg2?`: [Constructor](_types_codec_.constructor.md)): *void*

*Defined in [packages/types/src/types/registry.ts:138](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | string &#124; [Constructor](_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_types_registry_.md#registrytypes) |
`arg2?` | [Constructor](_types_codec_.constructor.md) |

**Returns:** *void*

___

###  setChainProperties

▸ **setChainProperties**(`properties?`: [ChainProperties](_augment_registry_._registry_.interfacetypes.md#chainproperties)): *void*

*Defined in [packages/types/src/types/registry.ts:139](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`properties?` | [ChainProperties](_augment_registry_._registry_.interfacetypes.md#chainproperties) |

**Returns:** *void*

___

###  setKnownTypes

▸ **setKnownTypes**(`types`: [RegisteredTypes](_types_registry_.registeredtypes.md)): *void*

*Defined in [packages/types/src/types/registry.ts:130](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`types` | [RegisteredTypes](_types_registry_.registeredtypes.md) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](_types_registry_.registrymetadata.md), `signedExtensions?`: string[]): *void*

*Defined in [packages/types/src/types/registry.ts:140](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](_types_registry_.registrymetadata.md) |
`signedExtensions?` | string[] |

**Returns:** *void*

___

###  setSignedExtensions

▸ **setSignedExtensions**(`signedExtensions?`: string[]): *void*

*Defined in [packages/types/src/types/registry.ts:141](https://github.com/polkadot-js/api/blob/622682b4ef/packages/types/src/types/registry.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`signedExtensions?` | string[] |

**Returns:** *void*
