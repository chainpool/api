// Copyright 2017-2020 @chainx-v2/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo } from '@chainx-v2/types/create/types';
import { Constructor, Registry } from '@chainx-v2/types/types';

import { ClassOfUnsafe, getTypeDef } from '@chainx-v2/types/create';
import AbstractInt from '@chainx-v2/types/codec/AbstractInt';
import Compact from '@chainx-v2/types/codec/Compact';
import Enum from '@chainx-v2/types/codec/Enum';
import Option from '@chainx-v2/types/codec/Option';
import Struct from '@chainx-v2/types/codec/Struct';
import UInt from '@chainx-v2/types/codec/UInt';
import Vec from '@chainx-v2/types/codec/Vec';
import Tuple from '@chainx-v2/types/codec/Tuple';
import { AllConvictions } from '@chainx-v2/types/interfaces/democracy/definitions';
import GenericAccountId from '@chainx-v2/types/generic/AccountId';
import GenericAddress from '@chainx-v2/types/generic/Address';
import Vote from '@chainx-v2/types/generic/Vote';
import Null from '@chainx-v2/types/primitive/Null';
import * as primitiveClasses from '@chainx-v2/types/primitive';
import { isChildClass } from '@polkadot/util';

import { isCompactEncodable } from './class';
import { formatType } from './formatting';
import { setImports, ModuleTypes, TypeImports } from './imports';

function arrayToStrType (arr: string[]): string {
  return `${arr.map((c): string => `'${c}'`).join(' | ')}`;
}

const voteConvictions = arrayToStrType(AllConvictions);

// From `T`, generate `Compact<T>, Option<T>, Vec<T>`
/** @internal */
export function getDerivedTypes (definitions: Record<string, ModuleTypes>, type: string, primitiveName: string, imports: TypeImports): string[] {
  // `primitiveName` represents the actual primitive type our type is mapped to
  const isCompact = isCompactEncodable((primitiveClasses as Record<string, any>)[primitiveName]);
  const def = getTypeDef(type);

  setImports(definitions, imports, ['Option', 'Vec', isCompact ? 'Compact' : '']);

  const types = [
    {
      info: TypeDefInfo.Option,
      sub: def,
      type
    },
    {
      info: TypeDefInfo.Vec,
      sub: def,
      type
    }
  ];

  if (isCompact) {
    types.unshift({
      info: TypeDefInfo.Compact,
      sub: def,
      type
    });
  }

  const result = types.map((t) => formatType(definitions, t, imports)).map((t) => `'${t}': ${t};`);

  result.unshift(`${type}: ${type};`);

  return result;
}

// Make types a little bit more flexible
// - if param instanceof AbstractInt, then param: u64 | Uint8array | AnyNumber
// etc
/** @internal */
export function getSimilarTypes (definitions: Record<string, ModuleTypes>, registry: Registry, _type: string, imports: TypeImports): string[] {
  const typeParts = _type.split('::');
  const type = typeParts[typeParts.length - 1];
  const possibleTypes = [type];

  if (type === 'Extrinsic') {
    setImports(definitions, imports, ['IExtrinsic']);

    return ['IExtrinsic'];
  } else if (type === 'StorageKey') {
    // TODO We can do better
    return ['StorageKey', 'string', 'Uint8Array', 'any'];
  } else if (type === '()') {
    return ['null'];
  }

  const Clazz = ClassOfUnsafe(registry, type);

  if (isChildClass(Vec, Clazz)) {
    const subDef = (getTypeDef(type).sub) as TypeDef;

    if (subDef.info === TypeDefInfo.Plain) {
      possibleTypes.push(`(${getSimilarTypes(definitions, registry, subDef.type, imports).join(' | ')})[]`);
    } else if (subDef.info === TypeDefInfo.Tuple) {
      const subs = (subDef.sub as TypeDef[]).map(({ type }): string =>
        getSimilarTypes(definitions, registry, type, imports).join(' | ')
      );

      possibleTypes.push(`([${subs.join(', ')}])[]`);
    } else {
      throw new Error(`Unhandled subtype in Vec, ${JSON.stringify(subDef)}`);
    }
  } else if (isChildClass(Enum, Clazz)) {
    const e = new (Clazz as Constructor)(registry) as Enum;

    if (e.isBasic) {
      possibleTypes.push(arrayToStrType(e.defKeys), 'number');
    } else {
      // TODO We don't really want any here, these should be expanded
      possibleTypes.push(...e.defKeys.map((key): string => `{ ${key}: any }`), 'string');
    }

    possibleTypes.push('Uint8Array');
  } else if (isChildClass(AbstractInt as unknown as Constructor<UInt>, Clazz) || isChildClass(Compact, Clazz)) {
    possibleTypes.push('AnyNumber', 'Uint8Array');
  } else if (isChildClass(GenericAddress, Clazz)) {
    possibleTypes.push('Address', 'AccountId', 'AccountIndex', 'string', 'Uint8Array');
  } else if (isChildClass(GenericAccountId, Clazz)) {
    possibleTypes.push('string', 'Uint8Array');
  } else if (isChildClass(registry.createClass('bool'), Clazz)) {
    possibleTypes.push('boolean', 'Uint8Array');
  } else if (isChildClass(Null, Clazz)) {
    possibleTypes.push('null');
  } else if (isChildClass(Struct, Clazz)) {
    const s = new (Clazz as Constructor)(registry) as Struct;
    const obj = s.defKeys.map((key): string => `${key}?: any`).join('; ');

    possibleTypes.push(`{ ${obj} }`, 'string', 'Uint8Array');
  } else if (isChildClass(Option, Clazz)) {
    // TODO inspect container
    possibleTypes.push('null', 'object', 'string', 'Uint8Array');
  } else if (isChildClass(Vote, Clazz)) {
    possibleTypes.push(`{ aye: boolean; conviction?: ${voteConvictions} | number }`, 'boolean', 'string', 'Uint8Array');
  } else if (isChildClass(Uint8Array, Clazz)) {
    possibleTypes.push('string', 'Uint8Array');
  } else if (isChildClass(String, Clazz)) {
    possibleTypes.push('string');
  } else if (isChildClass(Tuple, Clazz)) {
    const subDef = getTypeDef(type).sub;

    if (Array.isArray(subDef)) {
      const subs = subDef.map(({ type }) => getSimilarTypes(definitions, registry, type, imports).join(' | '));

      possibleTypes.push(`[${subs.join(', ')}]`);
    }
  }

  return possibleTypes;
}
