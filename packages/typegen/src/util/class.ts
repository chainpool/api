// Copyright 2017-2020 @chainx-v2/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@chainx-v2/types/types';

import UInt from '@chainx-v2/types/codec/UInt';
import { isChildClass } from '@chainx-v2/util';

/** @internal */
export function isCompactEncodable (Child: Constructor<any>): boolean {
  return isChildClass(UInt, Child);
}
