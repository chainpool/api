[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Map"](../modules/_codec_map_.md) › [CodecMap](_codec_map_.codecmap.md)

# Class: CodecMap ‹**K, V**›

## Type parameters

▪ **K**: *[Codec](../interfaces/_types_codec_.codec.md)*

▪ **V**: *[Codec](../interfaces/_types_codec_.codec.md)*

## Hierarchy

* [Map](_codec_struct_.struct.md#static-map)‹K, V›

  ↳ **CodecMap**

  ↳ [HashMap](_codec_hashmap_.hashmap.md)

  ↳ [BTreeMap](_codec_btreemap_.btreemap.md)

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_codec_map_.codecmap.md#constructor)

### Properties

* [[Symbol.toStringTag]](_codec_map_.codecmap.md#readonly-[symbol.tostringtag])
* [registry](_codec_map_.codecmap.md#readonly-registry)
* [size](_codec_map_.codecmap.md#readonly-size)
* [Map](_codec_map_.codecmap.md#static-map)

### Accessors

* [encodedLength](_codec_map_.codecmap.md#encodedlength)
* [hash](_codec_map_.codecmap.md#hash)
* [isEmpty](_codec_map_.codecmap.md#isempty)

### Methods

* [[Symbol.iterator]](_codec_map_.codecmap.md#[symbol.iterator])
* [clear](_codec_map_.codecmap.md#clear)
* [delete](_codec_map_.codecmap.md#delete)
* [entries](_codec_map_.codecmap.md#entries)
* [eq](_codec_map_.codecmap.md#eq)
* [forEach](_codec_map_.codecmap.md#foreach)
* [get](_codec_map_.codecmap.md#get)
* [has](_codec_map_.codecmap.md#has)
* [keys](_codec_map_.codecmap.md#keys)
* [set](_codec_map_.codecmap.md#set)
* [toHex](_codec_map_.codecmap.md#tohex)
* [toHuman](_codec_map_.codecmap.md#tohuman)
* [toJSON](_codec_map_.codecmap.md#tojson)
* [toRawType](_codec_map_.codecmap.md#torawtype)
* [toString](_codec_map_.codecmap.md#tostring)
* [toU8a](_codec_map_.codecmap.md#tou8a)
* [values](_codec_map_.codecmap.md#values)

## Constructors

###  constructor

\+ **new CodecMap**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `type`: "BTreeMap" | "HashMap", `keyType`: [Constructor](../interfaces/_types_codec_.constructor.md)‹K› | keyof InterfaceTypes, `valType`: [Constructor](../interfaces/_types_codec_.constructor.md)‹V› | keyof InterfaceTypes, `rawValue?`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string | [Map](_codec_struct_.struct.md#static-map)‹any, any›): *[CodecMap](_codec_map_.codecmap.md)*

*Defined in [packages/types/src/codec/Map.ts:101](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`type` | "BTreeMap" &#124; "HashMap" |
`keyType` | [Constructor](../interfaces/_types_codec_.constructor.md)‹K› &#124; keyof InterfaceTypes |
`valType` | [Constructor](../interfaces/_types_codec_.constructor.md)‹V› &#124; keyof InterfaceTypes |
`rawValue?` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string &#124; [Map](_codec_struct_.struct.md#static-map)‹any, any› |

**Returns:** *[CodecMap](_codec_map_.codecmap.md)*

## Properties

### `Readonly` [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#readonly-registry)*

*Defined in [packages/types/src/codec/Map.ts:95](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L95)*

___

### `Readonly` size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Map.ts:115](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L115)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/Map.ts:128](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L128)*

**`description`** Returns a hash of the value

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Map.ts:135](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L135)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[K, V]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[K, V]›*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: K): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[K, V]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[K, V]›*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Map.ts:142](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L142)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: V, `key`: K, `map`: [Map](_codec_struct_.struct.md#static-map)‹K, V›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`key` | K |
`map` | [Map](_codec_struct_.struct.md#static-map)‹K, V› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: K): *V | undefined*

*Inherited from [CodecMap](_codec_map_.codecmap.md).[get](_codec_map_.codecmap.md#get)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *V | undefined*

___

###  has

▸ **has**(`key`: K): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹K›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹K›*

___

###  set

▸ **set**(`key`: K, `value`: V): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *this*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/Map.ts:149](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L149)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Map.ts:156](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L156)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Map.ts:169](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L169)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Map.ts:182](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L182)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Map.ts:189](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L189)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/Map.ts:197](https://github.com/polkadot-js/api/blob/a1655508ba/packages/types/src/codec/Map.ts#L197)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  values

▸ **values**(): *IterableIterator‹V›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹V›*
