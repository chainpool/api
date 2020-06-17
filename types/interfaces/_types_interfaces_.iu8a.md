[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/interfaces"](../modules/_types_interfaces_.md) › [IU8a](_types_interfaces_.iu8a.md)

# Interface: IU8a

## Hierarchy

* [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)

* [Codec](_types_codec_.codec.md)

  ↳ **IU8a**

## Implemented by

* [AccountId](../classes/_generic_accountid_.accountid.md)
* [BitVec](../classes/_primitive_bitvec_.bitvec.md)
* [Bytes](../classes/_primitive_bytes_.bytes.md)
* [CallIndex](../classes/_generic_call_.callindex.md)
* [ImmortalEra](../classes/_extrinsic_extrinsicera_.immortalera.md)
* [Raw](../classes/_codec_raw_.raw.md)
* [StorageKey](../classes/_primitive_storagekey_.storagekey.md)
* [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)
* [Vote](../classes/_generic_vote_.vote.md)

## Indexable

* \[ **index**: *number*\]: number

## Index

### Properties

* [BYTES_PER_ELEMENT](_types_interfaces_.iu8a.md#readonly-bytes_per_element)
* [Uint8Array](_types_interfaces_.iu8a.md#uint8array)
* [[Symbol.toStringTag]](_types_interfaces_.iu8a.md#readonly-[symbol.tostringtag])
* [buffer](_types_interfaces_.iu8a.md#readonly-buffer)
* [byteLength](_types_interfaces_.iu8a.md#readonly-bytelength)
* [byteOffset](_types_interfaces_.iu8a.md#readonly-byteoffset)
* [encodedLength](_types_interfaces_.iu8a.md#readonly-encodedlength)
* [hash](_types_interfaces_.iu8a.md#readonly-hash)
* [isEmpty](_types_interfaces_.iu8a.md#readonly-isempty)
* [length](_types_interfaces_.iu8a.md#readonly-length)
* [registry](_types_interfaces_.iu8a.md#readonly-registry)

### Methods

* [[Symbol.iterator]](_types_interfaces_.iu8a.md#[symbol.iterator])
* [bitLength](_types_interfaces_.iu8a.md#bitlength)
* [copyWithin](_types_interfaces_.iu8a.md#copywithin)
* [entries](_types_interfaces_.iu8a.md#entries)
* [eq](_types_interfaces_.iu8a.md#eq)
* [every](_types_interfaces_.iu8a.md#every)
* [fill](_types_interfaces_.iu8a.md#fill)
* [filter](_types_interfaces_.iu8a.md#filter)
* [find](_types_interfaces_.iu8a.md#find)
* [findIndex](_types_interfaces_.iu8a.md#findindex)
* [forEach](_types_interfaces_.iu8a.md#foreach)
* [includes](_types_interfaces_.iu8a.md#includes)
* [indexOf](_types_interfaces_.iu8a.md#indexof)
* [join](_types_interfaces_.iu8a.md#join)
* [keys](_types_interfaces_.iu8a.md#keys)
* [lastIndexOf](_types_interfaces_.iu8a.md#lastindexof)
* [map](_types_interfaces_.iu8a.md#map)
* [reduce](_types_interfaces_.iu8a.md#reduce)
* [reduceRight](_types_interfaces_.iu8a.md#reduceright)
* [reverse](_types_interfaces_.iu8a.md#reverse)
* [set](_types_interfaces_.iu8a.md#set)
* [slice](_types_interfaces_.iu8a.md#slice)
* [some](_types_interfaces_.iu8a.md#some)
* [sort](_types_interfaces_.iu8a.md#sort)
* [subarray](_types_interfaces_.iu8a.md#subarray)
* [toHex](_types_interfaces_.iu8a.md#tohex)
* [toHuman](_types_interfaces_.iu8a.md#tohuman)
* [toJSON](_types_interfaces_.iu8a.md#tojson)
* [toLocaleString](_types_interfaces_.iu8a.md#tolocalestring)
* [toRawType](_types_interfaces_.iu8a.md#torawtype)
* [toString](_types_interfaces_.iu8a.md#tostring)
* [toU8a](_types_interfaces_.iu8a.md#tou8a)
* [valueOf](_types_interfaces_.iu8a.md#valueof)
* [values](_types_interfaces_.iu8a.md#values)

## Properties

### `Readonly` BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1991

The size in bytes of each element in the array.

___

###  Uint8Array

• **Uint8Array**: *Uint8ArrayConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2263

___

### `Readonly` [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *"Uint8Array"*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:277

___

### `Readonly` buffer

• **buffer**: *ArrayBufferLike*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1996

The ArrayBuffer instance referenced by the array.

___

### `Readonly` byteLength

• **byteLength**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2001

The length in bytes of the array.

___

### `Readonly` byteOffset

• **byteOffset**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2006

The offset in bytes of the array.

___

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:39](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/codec.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` hash

• **hash**: *H256*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/codec.ts:44](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/codec.ts#L44)*

**`description`** Returns a hash of the value

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:49](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/codec.ts#L49)*

**`description`** Checks if the value is an empty value

___

### `Readonly` length

• **length**: *number*

*Inherited from [IU8a](_types_interfaces_.iu8a.md).[length](_types_interfaces_.iu8a.md#readonly-length)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2105

The length of the array.

___

### `Readonly` registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:54](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/codec.ts#L54)*

**`description`** The registry associated with this object

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹number›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:283

**Returns:** *IterableIterator‹number›*

___

###  bitLength

▸ **bitLength**(): *number*

*Defined in [packages/types/src/types/interfaces.ts:51](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/interfaces.ts#L51)*

**Returns:** *number*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2017

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | number | If target is negative, it is treated as length+target where length is the length of the array. |
`start` | number | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
`end?` | undefined &#124; number | If not specified, length of the this object is used as its default value.  |

**Returns:** *this*

___

###  entries

▸ **entries**(): *IterableIterator‹[number, number]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:287

Returns an array of key, value pairs for every entry in the array

**Returns:** *IterableIterator‹[number, number]›*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:59](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/codec.ts#L59)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2027

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: number, `start?`: undefined | number, `end?`: undefined | number): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2037

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | value to fill array section with |
`start?` | undefined &#124; number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | undefined &#124; number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2046

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls
the callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  find

▸ **find**(`predicate`: function, `thisArg?`: any): *number | undefined*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2057

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`value`: number, `index`: number, `obj`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2068

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: number, `index`: number, `obj`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2077

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: number, `fromIndex?`: undefined | number): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2016.array.include.d.ts:54

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | number | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: number, `fromIndex?`: undefined | number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2085

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | number | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the  search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2092

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *IterableIterator‹number›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:291

Returns an list of keys in the array

**Returns:** *IterableIterator‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: number, `fromIndex?`: undefined | number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2100

Returns the index of the last occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | number | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  map

▸ **map**(`callbackfn`: function, `thisArg?`: any): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2115

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2127

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *number*

▸ **reduce**(`callbackfn`: function, `initialValue`: number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2128

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪ **initialValue**: *number*

**Returns:** *number*

▸ **reduce**‹**U**›(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2140

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2152

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *number*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2153

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪ **initialValue**: *number*

**Returns:** *number*

▸ **reduceRight**‹**U**›(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2165

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2170

Reverses the elements in an Array.

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  set

▸ **set**(`array`: ArrayLike‹number›, `offset?`: undefined | number): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2177

Sets a value or an array of values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | ArrayLike‹number› | A typed or untyped array of values to set. |
`offset?` | undefined &#124; number | The index in the current array at which the values are to be written.  |

**Returns:** *void*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2184

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2194

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2205

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```  |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin?`: undefined | number, `end?`: undefined | number): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [IU8a](_types_interfaces_.iu8a.md).[subarray](_types_interfaces_.iu8a.md#subarray)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2213

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin?` | undefined &#124; number | The index of the beginning of the array. |
`end?` | undefined &#124; number | The index of the end of the array.  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:64](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/codec.ts#L64)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *any*

*Overrides [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/interfaces.ts:52](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/interfaces.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *any*

___

###  toJSON

▸ **toJSON**(): *any*

*Overrides [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/interfaces.ts:53](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/interfaces.ts#L53)*

**Returns:** *any*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2218

Converts a number to a string by using the current locale.

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:79](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/codec.ts#L79)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [IU8a](_types_interfaces_.iu8a.md).[toString](_types_interfaces_.iu8a.md#tostring)*

*Overrides [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2223

Returns a string representation of an array.

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:90](https://github.com/polkadot-js/api/blob/2eb09374bc/packages/types/src/types/codec.ts#L90)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  valueOf

▸ **valueOf**(): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2226

Returns the primitive value of the specified object.

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  values

▸ **values**(): *IterableIterator‹number›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:295

Returns an list of values in the array

**Returns:** *IterableIterator‹number›*
