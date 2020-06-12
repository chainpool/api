[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/StorageKey"](../modules/_primitive_storagekey_.md) › [StorageKey](_primitive_storagekey_.storagekey.md)

# Class: StorageKey

**`name`** StorageKey

**`description`** 
A representation of a storage key (typically hashed) in the system. It can be
constructed by passing in a raw key or a StorageEntry with (optional) arguments.

## Hierarchy

  ↳ [Bytes](_primitive_bytes_.bytes.md)

  ↳ **StorageKey**

## Implements

* [IU8a](../interfaces/_types_interfaces_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

**`name`** StorageKey

**`description`** 
A representation of a storage key (typically hashed) in the system. It can be
constructed by passing in a raw key or a StorageEntry with (optional) arguments.

## Index

### Constructors

* [constructor](_primitive_storagekey_.storagekey.md#constructor)

### Properties

* [registry](_primitive_storagekey_.storagekey.md#readonly-registry)

### Accessors

* [args](_primitive_storagekey_.storagekey.md#args)
* [encodedLength](_primitive_storagekey_.storagekey.md#encodedlength)
* [hash](_primitive_storagekey_.storagekey.md#hash)
* [isEmpty](_primitive_storagekey_.storagekey.md#isempty)
* [length](_primitive_storagekey_.storagekey.md#length)
* [meta](_primitive_storagekey_.storagekey.md#meta)
* [method](_primitive_storagekey_.storagekey.md#method)
* [outputType](_primitive_storagekey_.storagekey.md#outputtype)
* [section](_primitive_storagekey_.storagekey.md#section)

### Methods

* [bitLength](_primitive_storagekey_.storagekey.md#bitlength)
* [eq](_primitive_storagekey_.storagekey.md#eq)
* [setMeta](_primitive_storagekey_.storagekey.md#setmeta)
* [subarray](_primitive_storagekey_.storagekey.md#subarray)
* [toHex](_primitive_storagekey_.storagekey.md#tohex)
* [toHuman](_primitive_storagekey_.storagekey.md#tohuman)
* [toJSON](_primitive_storagekey_.storagekey.md#tojson)
* [toRawType](_primitive_storagekey_.storagekey.md#torawtype)
* [toString](_primitive_storagekey_.storagekey.md#tostring)
* [toU8a](_primitive_storagekey_.storagekey.md#tou8a)
* [getMeta](_primitive_storagekey_.storagekey.md#static-getmeta)
* [getType](_primitive_storagekey_.storagekey.md#static-gettype)

## Constructors

###  constructor

\+ **new StorageKey**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: [AnyU8a](../modules/_types_helpers_.md#anyu8a) | [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any], `override`: Partial‹StorageKeyExtra›): *[StorageKey](_primitive_storagekey_.storagekey.md)*

*Overrides [Bytes](_primitive_bytes_.bytes.md).[constructor](_primitive_bytes_.bytes.md#constructor)*

*Defined in [packages/types/src/primitive/StorageKey.ts:165](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L165)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value?` | [AnyU8a](../modules/_types_helpers_.md#anyu8a) &#124; [StorageKey](_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] | - |
`override` | Partial‹StorageKeyExtra› | {} |

**Returns:** *[StorageKey](_primitive_storagekey_.storagekey.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md).[registry](../interfaces/_types_interfaces_.iu8a.md#readonly-registry)*

*Inherited from [Raw](_codec_raw_.raw.md).[registry](_codec_raw_.raw.md#readonly-registry)*

*Defined in [packages/types/src/codec/Raw.ts:30](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/codec/Raw.ts#L30)*

## Accessors

###  args

• **get args**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Defined in [packages/types/src/primitive/StorageKey.ts:214](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L214)*

**`description`** Return the decoded arguments (applicable to map/doublemap with decodable values)

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[encodedLength](_primitive_bytes_.bytes.md#encodedlength)*

*Overrides [Raw](_codec_raw_.raw.md).[encodedLength](_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/primitive/Bytes.ts:55](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/Bytes.ts#L55)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Raw](_codec_raw_.raw.md).[hash](_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:48](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/codec/Raw.ts#L48)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](_codec_raw_.raw.md).[isEmpty](_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:55](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/codec/Raw.ts#L55)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[length](_codec_raw_.raw.md#length)*

*Overrides [IU8a](../interfaces/_types_interfaces_.iu8a.md).[length](../interfaces/_types_interfaces_.iu8a.md#readonly-length)*

*Defined in [packages/types/src/codec/Raw.ts:62](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/codec/Raw.ts#L62)*

**`description`** The length of the value

**Returns:** *number*

___

###  meta

• **get meta**(): *StorageEntryMetadataLatest | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:221](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L221)*

**`description`** The metadata or `undefined` when not available

**Returns:** *StorageEntryMetadataLatest | undefined*

___

###  method

• **get method**(): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:228](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L228)*

**`description`** The key method or `undefined` when not specified

**Returns:** *string | undefined*

___

###  outputType

• **get outputType**(): *string*

*Defined in [packages/types/src/primitive/StorageKey.ts:235](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L235)*

**`description`** The output type

**Returns:** *string*

___

###  section

• **get section**(): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:242](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L242)*

**`description`** The key section or `undefined` when not specified

**Returns:** *string | undefined*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[bitLength](_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:70](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/codec/Raw.ts#L70)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[eq](_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:77](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/codec/Raw.ts#L77)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  setMeta

▸ **setMeta**(`meta?`: [StorageEntryMetadataLatest](../interfaces/_augment_registry_._registry_.interfacetypes.md#storageentrymetadatalatest)): *this*

*Defined in [packages/types/src/primitive/StorageKey.ts:249](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L249)*

**`description`** Sets the meta for this key

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | [StorageEntryMetadataLatest](../interfaces/_augment_registry_._registry_.interfacetypes.md#storageentrymetadatalatest) |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_codec_raw_.raw.md).[subarray](_codec_raw_.raw.md#subarray)*

*Overrides [IU8a](../interfaces/_types_interfaces_.iu8a.md).[subarray](../interfaces/_types_interfaces_.iu8a.md#subarray)*

*Defined in [packages/types/src/codec/Raw.ts:91](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/codec/Raw.ts#L91)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Raw](_codec_raw_.raw.md).[toHex](_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:98](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/codec/Raw.ts#L98)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Overrides [Raw](_codec_raw_.raw.md).[toHuman](_codec_raw_.raw.md#tohuman)*

*Defined in [packages/types/src/primitive/StorageKey.ts:268](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L268)*

**`description`** Returns the Human representation for this type

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[toJSON](_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:112](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/codec/Raw.ts#L112)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Overrides [Bytes](_primitive_bytes_.bytes.md).[toRawType](_primitive_bytes_.bytes.md#torawtype)*

*Defined in [packages/types/src/primitive/StorageKey.ts:277](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L277)*

**`description`** Returns the raw type for this

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[toString](_codec_raw_.raw.md#tostring)*

*Overrides [IU8a](../interfaces/_types_interfaces_.iu8a.md).[toString](../interfaces/_types_interfaces_.iu8a.md#tostring)*

*Defined in [packages/types/src/codec/Raw.ts:126](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/codec/Raw.ts#L126)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toU8a](_primitive_bytes_.bytes.md#tou8a)*

*Overrides [Raw](_codec_raw_.raw.md).[toU8a](_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/primitive/Bytes.ts:70](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/Bytes.ts#L70)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` getMeta

▸ **getMeta**(`value`: [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any]): *StorageEntryMetadataLatest | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:180](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [StorageKey](_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] |

**Returns:** *StorageEntryMetadataLatest | undefined*

___

### `Static` getType

▸ **getType**(`value`: [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any]): *string*

*Defined in [packages/types/src/primitive/StorageKey.ts:194](https://github.com/polkadot-js/api/blob/e900d1d657/packages/types/src/primitive/StorageKey.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [StorageKey](_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] |

**Returns:** *string*
