[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["accounts/idAndIndex"](_accounts_idandindex_.md)

# Module: "accounts/idAndIndex"

## Index

### Functions

* [idAndIndex](_accounts_idandindex_.md#idandindex)

## Functions

###  idAndIndex

▸ **idAndIndex**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/accounts/idAndIndex.ts:54](https://github.com/polkadot-js/api/blob/c7315ffb74/packages/api-derive/src/accounts/idAndIndex.ts#L54)*

**`name`** idAndIndex

**`description`** An array containing the [[AccountId]] and [[AccountIndex]] as optional values.

**`example`** 
<BR>

```javascript
api.derive.accounts.idAndIndex('F7Hs', ([id, ix]) => {
  console.log(`AccountId #${id} with corresponding AccountIndex ${ix}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`address?`: Address | AccountId | AccountIndex | string | null): *Observable‹AccountIdAndIndex›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address?` | Address &#124; AccountId &#124; AccountIndex &#124; string &#124; null | An accounts address in various formats. |
