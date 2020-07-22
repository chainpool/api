// Copyright 2017-2020 @chainx-v2/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MockProvider from '@chainx-v2/rpc-provider/mock';
import { TypeRegistry } from '@chainx-v2/types';
import { isFunction } from '@chainx-v2/util';

import Rpc from '.';

describe('Api', (): void => {
  const registry = new TypeRegistry();

  it('requires a provider with a send method', (): void => {
    expect(
      (): Rpc => new Rpc(registry, {} as any)
    ).toThrow(/Expected Provider/);
  });

  it('allows for the definition of user RPCs', (): void => {
    const rpc = new Rpc(registry, new MockProvider(registry), {
      testing: {
        foo: {
          description: 'foo',
          params: [{ name: 'bar', type: 'u32' }],
          type: 'Balance'
        }
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(isFunction((rpc as any).testing.foo)).toBe(true);
    expect(rpc.sections.includes('testing')).toBe(true);
    expect(rpc.mapping.get('testing_foo')).toEqual({
      description: 'foo',
      isSubscription: false,
      jsonrpc: 'testing_foo',
      method: 'foo',
      params: [{
        name: 'bar',
        type: 'u32'
      }],
      section: 'testing',
      type: 'Balance'
    });
  });
});
