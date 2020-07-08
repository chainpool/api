// eslint-disable-next-line header/header
import H256 from './H256';
import U32 from '../primitive/U32';
import Struct from '../codec/Struct';

import { ExtrinsicPayloadValue, Registry } from '../types';

export default class OutPoint extends Struct {
  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        hash: H256,
        index: U32
      },
      value
    );
  }
}
