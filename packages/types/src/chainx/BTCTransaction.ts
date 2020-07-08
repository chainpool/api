
// eslint-disable-next-line header/header
import Struct from '../codec/Struct';
import U32 from '../primitive/U32';
import I32 from '../primitive/I32';
import TransactionInput from './TransactionInput';
import TransactionOutput from './TransactionOutput';
import Vec from '../codec/Vec';

import { ExtrinsicPayloadValue, Registry } from '../types';

export default class BTCTransaction extends Struct {
  constructor(registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        version: I32,
        // eslint-disable-next-line sort-keys
        inputs: Vec.with(TransactionInput),
        outputs: Vec.with(TransactionOutput),
        // eslint-disable-next-line sort-keys
        lock_time: U32
      },
      value
    );
  }

}
