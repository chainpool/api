
// eslint-disable-next-line header/header
import Struct from '../codec/Struct';

import { ExtrinsicPayloadValue, Registry } from '../types';
import U64 from '../primitive/U64';
import Bytes from '../primitive/Bytes';

export default class TransactionOutput extends Struct {
  constructor(registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        value: U64,
        // eslint-disable-next-line sort-keys
        script_pubkey: Bytes
      },
      value
    );
  }

}
