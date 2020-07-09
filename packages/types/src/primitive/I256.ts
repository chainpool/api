// Copyright 2017-2020 @chainx-v2/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Int from '../codec/Int';

/**
 * @name I256
 * @description
 * A 256-bit signed integer
 */
export default class I256 extends Int.with(256) {}
