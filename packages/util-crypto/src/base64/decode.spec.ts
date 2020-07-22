// Copyright 2017-2020 @chainx-v2/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { stringToU8a } from '@chainx-v2/util';

import { base64Decode } from './index';

describe('base64Decode', (): void => {
  it('decodes a mixed base64 utf8 string', (): void => {
    expect(
      base64Decode('aGVsbG8gd29ybGQg0J/RgNC40LLQtdGC0YHRgtCy0YPRjiDQvNC4IOS9oOWlvQ==')
    ).toEqual(
      stringToU8a('hello world Приветствую ми 你好')
    );
  });
});
