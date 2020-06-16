[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/Blueprint"](../modules/_base_blueprint_.md) › [Blueprint](_base_blueprint_.blueprint.md)

# Class: Blueprint ‹**ApiType**›

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

  ↳ [BaseWithTx](_base_util_.basewithtx.md)‹ApiType›

  ↳ **Blueprint**

  ↳ [PromiseBlueprint](_promise_promiseblueprint_.promiseblueprint.md)

  ↳ [RxBlueprint](_rx_rxblueprint_.rxblueprint.md)

## Implements

* ContractBase‹ApiType›

## Index

### Constructors

* [constructor](_base_blueprint_.blueprint.md#constructor)

### Properties

* [abi](_base_blueprint_.blueprint.md#readonly-abi)
* [api](_base_blueprint_.blueprint.md#readonly-api)
* [codeHash](_base_blueprint_.blueprint.md#readonly-codehash)
* [decorateMethod](_base_blueprint_.blueprint.md#readonly-decoratemethod)
* [registry](_base_blueprint_.blueprint.md#readonly-registry)

### Accessors

* [messages](_base_blueprint_.blueprint.md#messages)

### Methods

* [deployContract](_base_blueprint_.blueprint.md#deploycontract)
* [getMessage](_base_blueprint_.blueprint.md#getmessage)

## Constructors

###  constructor

\+ **new Blueprint**(`api`: ApiObject‹ApiType›, `abi`: ContractABIPre | Abi, `decorateMethod`: DecorateMethod‹ApiType›, `codeHash`: string | Hash): *[Blueprint](_base_blueprint_.blueprint.md)*

*Overrides [BaseWithTx](_base_util_.basewithtx.md).[constructor](_base_util_.basewithtx.md#constructor)*

*Defined in [base/Blueprint.ts:38](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/api-contract/src/base/Blueprint.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiObject‹ApiType› |
`abi` | ContractABIPre &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |
`codeHash` | string &#124; Hash |

**Returns:** *[Blueprint](_base_blueprint_.blueprint.md)*

## Properties

### `Readonly` abi

• **abi**: *Abi*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#readonly-abi)*

*Defined in [base/util.ts:14](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/api-contract/src/base/util.ts#L14)*

___

### `Readonly` api

• **api**: *ApiObject‹ApiType›*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#readonly-api)*

*Defined in [base/util.ts:16](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/api-contract/src/base/util.ts#L16)*

___

### `Readonly` codeHash

• **codeHash**: *Hash*

*Defined in [base/Blueprint.ts:38](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/api-contract/src/base/Blueprint.ts#L38)*

___

### `Readonly` decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#readonly-decoratemethod)*

*Defined in [base/util.ts:18](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/api-contract/src/base/util.ts#L18)*

___

### `Readonly` registry

• **registry**: *Registry*

*Inherited from [Base](_base_util_.base.md).[registry](_base_util_.base.md#readonly-registry)*

*Defined in [base/util.ts:20](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:31](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  deployContract

▸ **deployContract**(`constructorIndex`: number, `endowment`: number | BN, `maxGas`: number | BN, ...`params`: any[]): *[BlueprintCreate](../interfaces/_base_blueprint_.blueprintcreate.md)‹ApiType›*

*Defined in [base/Blueprint.ts:46](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/api-contract/src/base/Blueprint.ts#L46)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`constructorIndex` | number | 0 |
`endowment` | number &#124; BN | - |
`maxGas` | number &#124; BN | - |
`...params` | any[] | - |

**Returns:** *[BlueprintCreate](../interfaces/_base_blueprint_.blueprintcreate.md)‹ApiType›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:41](https://github.com/polkadot-js/api/blob/ad6b8280a2/packages/api-contract/src/base/util.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
