[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/registry"](../modules/_types_registry_.md) › [RegisteredTypes](_types_registry_.registeredtypes.md)

# Interface: RegisteredTypes

## Hierarchy

* **RegisteredTypes**

## Index

### Properties

* [types](_types_registry_.registeredtypes.md#optional-types)
* [typesAlias](_types_registry_.registeredtypes.md#optional-typesalias)
* [typesChain](_types_registry_.registeredtypes.md#optional-typeschain)
* [typesSpec](_types_registry_.registeredtypes.md#optional-typesspec)

## Properties

### `Optional` types

• **types**? : *[RegistryTypes](../modules/_types_registry_.md#registrytypes)*

*Defined in [packages/types/src/types/registry.ts:95](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/types/src/types/registry.ts#L95)*

**`description`** Additional types used by runtime modules. This is necessary if the runtime modules
uses types not available in the base Substrate runtime.

___

### `Optional` typesAlias

• **typesAlias**? : *Record‹string, [OverrideModuleType](../modules/_types_registry_.md#overridemoduletype)›*

*Defined in [packages/types/src/types/registry.ts:99](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/types/src/types/registry.ts#L99)*

**`description`** Alias an types, as received via the metadata, to a JS-specific type to avoid conflicts. For instance, you can rename the `Proposal` in the `treasury` module to `TreasuryProposal` as to not have conflicts with the one for democracy.

___

### `Optional` typesChain

• **typesChain**? : *Record‹string, [RegistryTypes](../modules/_types_registry_.md#registrytypes)›*

*Defined in [packages/types/src/types/registry.ts:103](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/types/src/types/registry.ts#L103)*

**`description`** Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. `{ 'Kusama CC1': { ... } }`

___

### `Optional` typesSpec

• **typesSpec**? : *Record‹string, [RegistryTypes](../modules/_types_registry_.md#registrytypes)›*

*Defined in [packages/types/src/types/registry.ts:107](https://github.com/polkadot-js/api/blob/d46d32d9bc/packages/types/src/types/registry.ts#L107)*

**`description`** Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. `{ 'edgeware': { ... } }`
