// Copyright 2017-2020 @chainx-v2/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV7, MetadataV8, ModuleMetadataV8 } from '@chainx-v2/types/interfaces/metadata';
import { Registry } from '@chainx-v2/types/types';

/** @internal */
export default function toV8(registry: Registry, { modules }: MetadataV7): MetadataV8 {
  return registry.createType('MetadataV8', {
    modules: modules.map(({ calls, constants, events, name, storage }): ModuleMetadataV8 =>
      registry.createType('ModuleMetadataV8', {
        calls,
        constants,
        errors: [],
        events,
        name,
        storage
      })
    )
  });
}
