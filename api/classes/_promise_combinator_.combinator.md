[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/Combinator"](../modules/_promise_combinator_.md) › [Combinator](_promise_combinator_.combinator.md)

# Class: Combinator ‹**T**›

## Type parameters

▪ **T**: *any[]*

## Hierarchy

* **Combinator**

## Index

### Constructors

* [constructor](_promise_combinator_.combinator.md#constructor)

### Methods

* [unsubscribe](_promise_combinator_.combinator.md#unsubscribe)

## Constructors

###  constructor

\+ **new Combinator**(`fns`: [CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md) | [[CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md), any][], `callback`: [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback)‹T›): *[Combinator](_promise_combinator_.combinator.md)*

*Defined in [api/src/promise/Combinator.ts:29](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/promise/Combinator.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`fns` | [CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md) &#124; [[CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md), any][] |
`callback` | [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback)‹T› |

**Returns:** *[Combinator](_promise_combinator_.combinator.md)*

## Methods

###  unsubscribe

▸ **unsubscribe**(): *void*

*Defined in [api/src/promise/Combinator.ts:79](https://github.com/polkadot-js/api/blob/34101ec12b/packages/api/src/promise/Combinator.ts#L79)*

**Returns:** *void*
