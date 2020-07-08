
// eslint-disable-next-line header/header
import Struct from '../codec/Struct';
import U32 from '../primitive/U32';
import { ExtrinsicPayloadValue, Registry } from '../types';

export default class BTCParams extends Struct {
  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        max_bits: U32,
        // eslint-disable-next-line sort-keys
        block_max_future: U32,
        target_timespan_seconds: U32,
        // eslint-disable-next-line sort-keys
        target_spacing_seconds: U32,
        // eslint-disable-next-line sort-keys
        retargeting_factor: U32,
        retargeting_interval: U32,
        // eslint-disable-next-line sort-keys
        min_timespan: U32,
        // eslint-disable-next-line sort-keys
        max_timespan: U32
      },
      value
    );
  }
}
