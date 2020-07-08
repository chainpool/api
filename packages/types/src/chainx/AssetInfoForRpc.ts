
// eslint-disable-next-line header/header
import Struct from '../codec/Struct';
import Vec from '../codec/Vec';
import Chain from './Chain';
import Precision from './Precision';
import Text from '../primitive/Text';

import { ExtrinsicPayloadValue, Registry } from '../types';

export default class AssetInfo extends Struct {
  constructor(registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        token: Vec.with(Text),
        token_name: Vec.with(Text),
        // eslint-disable-next-line sort-keys
        chain: Chain,
        precision: Precision,
        // eslint-disable-next-line sort-keys
        desc: Vec.with(Text)
      },
      value
    );
  }
}
