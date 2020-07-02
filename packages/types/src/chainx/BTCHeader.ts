
// eslint-disable-next-line header/header
import Struct from '../codec/Struct';
import Compact from './Compact';
import U32 from '../primitive/U32';
import H256 from './H256';

import { ExtrinsicPayloadValue, Registry } from '../types';

export default class BTCHeader extends Struct {
  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        version: U32,
        // eslint-disable-next-line sort-keys
        previous_header_hash: H256,
        // eslint-disable-next-line sort-keys
        merkle_root_hash: H256,
        time: U32,
        // eslint-disable-next-line sort-keys
        bits: Compact,
        once: U32
      },
      value
    );
  }

}
