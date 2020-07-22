// Copyright 2017-2020 @chainx-v2/crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isU8a } from '@chainx-v2/util';

import { randomAsU8a } from './index';

describe('randomAsU8a', (): void => {
  it('generates a Uint8Array', (): void => {
    expect(
      isU8a(randomAsU8a())
    ).toEqual(true);
  });

  it('generated results does not match', (): void => {
    expect(
      randomAsU8a()
    ).not.toEqual(
      randomAsU8a()
    );
  });

  it('generates 32 bytes by default', (): void => {
    expect(
      randomAsU8a()
    ).toHaveLength(32);
  });

  it('generates with the suuplied length', (): void => {
    expect(
      randomAsU8a(66)
    ).toHaveLength(66);
  });
});