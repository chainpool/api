// Copyright 2017-2020 @chainx-v2/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@chainx-v2/types/types';
import Vec from '@chainx-v2/types/codec/Vec';

export interface MetadataInterface<Modules extends Codec> extends Codec {
  modules: Vec<Modules>;
}
