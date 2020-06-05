[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["create/registry"](../modules/_create_registry_.md) › [TypeRegistry](_create_registry_.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Implements

* [Registry](../interfaces/_types_registry_.registry.md)

## Index

### Constructors

* [constructor](_create_registry_.typeregistry.md#constructor)

### Accessors

* [chainDecimals](_create_registry_.typeregistry.md#chaindecimals)
* [chainSS58](_create_registry_.typeregistry.md#chainss58)
* [chainToken](_create_registry_.typeregistry.md#chaintoken)
* [knownTypes](_create_registry_.typeregistry.md#knowntypes)
* [signedExtensions](_create_registry_.typeregistry.md#signedextensions)

### Methods

* [createClass](_create_registry_.typeregistry.md#createclass)
* [createType](_create_registry_.typeregistry.md#createtype)
* [findMetaCall](_create_registry_.typeregistry.md#findmetacall)
* [findMetaError](_create_registry_.typeregistry.md#findmetaerror)
* [findMetaEvent](_create_registry_.typeregistry.md#findmetaevent)
* [get](_create_registry_.typeregistry.md#get)
* [getChainProperties](_create_registry_.typeregistry.md#getchainproperties)
* [getDefinition](_create_registry_.typeregistry.md#getdefinition)
* [getOrThrow](_create_registry_.typeregistry.md#getorthrow)
* [getOrUnknown](_create_registry_.typeregistry.md#getorunknown)
* [getSignedExtensionExtra](_create_registry_.typeregistry.md#getsignedextensionextra)
* [getSignedExtensionTypes](_create_registry_.typeregistry.md#getsignedextensiontypes)
* [hasClass](_create_registry_.typeregistry.md#hasclass)
* [hasDef](_create_registry_.typeregistry.md#hasdef)
* [hasType](_create_registry_.typeregistry.md#hastype)
* [register](_create_registry_.typeregistry.md#register)
* [setChainProperties](_create_registry_.typeregistry.md#setchainproperties)
* [setKnownTypes](_create_registry_.typeregistry.md#setknowntypes)
* [setMetadata](_create_registry_.typeregistry.md#setmetadata)
* [setSignedExtensions](_create_registry_.typeregistry.md#setsignedextensions)

## Constructors

###  constructor

\+ **new TypeRegistry**(): *[TypeRegistry](_create_registry_.typeregistry.md)*

*Defined in [packages/types/src/create/registry.ts:99](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L99)*

**Returns:** *[TypeRegistry](_create_registry_.typeregistry.md)*

## Accessors

###  chainDecimals

• **get chainDecimals**(): *number*

*Defined in [packages/types/src/create/registry.ts:119](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L119)*

**Returns:** *number*

___

###  chainSS58

• **get chainSS58**(): *number | undefined*

*Defined in [packages/types/src/create/registry.ts:125](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L125)*

**Returns:** *number | undefined*

___

###  chainToken

• **get chainToken**(): *string*

*Defined in [packages/types/src/create/registry.ts:131](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L131)*

**Returns:** *string*

___

###  knownTypes

• **get knownTypes**(): *[RegisteredTypes](../interfaces/_types_registry_.registeredtypes.md)*

*Defined in [packages/types/src/create/registry.ts:137](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L137)*

**Returns:** *[RegisteredTypes](../interfaces/_types_registry_.registeredtypes.md)*

___

###  signedExtensions

• **get signedExtensions**(): *string[]*

*Defined in [packages/types/src/create/registry.ts:141](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L141)*

**Returns:** *string[]*

## Methods

###  createClass

▸ **createClass**‹**K**›(`type`: K): *[Constructor](../interfaces/_types_codec_.constructor.md)‹InterfaceTypes[K]›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:148](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L148)*

**`describe`** Creates an instance of the class

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹InterfaceTypes[K]›*

___

###  createType

▸ **createType**‹**K**›(`type`: K, ...`params`: any[]): *InterfaceTypes[K]*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:156](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L156)*

**`description`** Creates an instance of a type as registered

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

▸ **findMetaCall**(`callIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[CallFunction](../interfaces/_types_calls_.callfunction.md)*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:161](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[CallFunction](../interfaces/_types_calls_.callfunction.md)*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | DispatchErrorModule): *[RegistryError](../interfaces/_types_registry_.registryerror.md)*

*Defined in [packages/types/src/create/registry.ts:171](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; DispatchErrorModule |

**Returns:** *[RegistryError](../interfaces/_types_registry_.registryerror.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[EventData](_generic_event_.eventdata.md)›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:184](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L184)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[EventData](_generic_event_.eventdata.md)›*

___

###  get

▸ **get**‹**T**›(`name`: string, `withUnknown?`: undefined | false | true): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T› | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:193](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L193)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`withUnknown?` | undefined &#124; false &#124; true |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹T› | undefined*

___

###  getChainProperties

▸ **getChainProperties**(): *ChainProperties | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:224](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L224)*

**Returns:** *ChainProperties | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:228](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**‹**T**›(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:232](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L232)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

___

###  getOrUnknown

▸ **getOrUnknown**‹**T**›(`name`: string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:242](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L242)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

___

###  getSignedExtensionExtra

▸ **getSignedExtensionExtra**(): *Record‹string, keyof InterfaceTypes›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:246](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L246)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, keyof InterfaceTypes›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:250](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L250)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:254](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:258](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:262](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_codec_.constructor.md) | [RegistryTypes](../modules/_types_registry_.md#registrytypes)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:266](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L266)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_types_registry_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_codec_.constructor.md)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:269](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_types_codec_.constructor.md) |

**Returns:** *void*

___

###  setChainProperties

▸ **setChainProperties**(`properties?`: [ChainProperties](../interfaces/_augment_registry_._registry_.interfacetypes.md#chainproperties)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:306](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L306)*

**Parameters:**

Name | Type |
------ | ------ |
`properties?` | [ChainProperties](../interfaces/_augment_registry_._registry_.interfacetypes.md#chainproperties) |

**Returns:** *void*

___

###  setKnownTypes

▸ **setKnownTypes**(`knownTypes`: [RegisteredTypes](../interfaces/_types_registry_.registeredtypes.md)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:312](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L312)*

**Parameters:**

Name | Type |
------ | ------ |
`knownTypes` | [RegisteredTypes](../interfaces/_types_registry_.registeredtypes.md) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](../interfaces/_types_registry_.registrymetadata.md), `signedExtensions?`: string[]): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:317](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L317)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](../interfaces/_types_registry_.registrymetadata.md) |
`signedExtensions?` | string[] |

**Returns:** *void*

___

###  setSignedExtensions

▸ **setSignedExtensions**(`signedExtensions`: string[]): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:333](https://github.com/polkadot-js/api/blob/f501994df8/packages/types/src/create/registry.ts#L333)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`signedExtensions` | string[] | defaultExtensions |

**Returns:** *void*
