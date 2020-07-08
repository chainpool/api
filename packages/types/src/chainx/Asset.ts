import Struct from '../codec/Struct';
import Token from './Token';
import Chain from './Chain';
import Precision from './Precision';
import Desc from './Desc';
import { ExtrinsicPayloadValue, Registry } from '../types';

export default class Asset extends Struct {
  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        token: Token,
        token_name: Token,
        // eslint-disable-next-line sort-keys
        chain: Chain,
        precision: Precision,
        // eslint-disable-next-line sort-keys
        desc: Desc
      },
      value
    );
  }
}
