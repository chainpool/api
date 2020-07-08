
// eslint-disable-next-line header/header
import Struct from '../codec/Struct';
import Type from '../primitive/Type';
import Network from './BTCNetwork';
import AddressHash from './AddressHash';

import { ExtrinsicPayloadValue, Registry } from '../types';

export default class BTCParams extends Struct {
  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        kind: Type,
        network: Network,
        // eslint-disable-next-line sort-keys
        hash: AddressHash
      },
      value
    );
  }
}
