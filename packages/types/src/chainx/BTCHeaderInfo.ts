
// eslint-disable-next-line header/header
import Struct from '../codec/Struct';
import BTCHeader from './BTCHeader';
import U32 from '../primitive/U32';
import Vec from '../codec/Vec';
import H256 from './H256';
import Bool from '../primitive/Bool';

import { ExtrinsicPayloadValue, Registry } from '../types';

export default class BTCHeaderInfo extends Struct {
  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        header: BTCHeader,
        height: U32,
        // eslint-disable-next-line sort-keys
        confirmed: Bool,
        txid_list: Vec.with(H256)
      },
      value
    );
  }
}
