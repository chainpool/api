import Enum from '../codec/Enum';
import { Registry } from '../types';

export default class BTCAddrTyep extends Enum {
  constructor (registry: Registry, value?: Record<string, any> | Uint8Array | Enum | string, index?: string) {
    super(registry, [
      'P2PKH',
      'P2SH'
    ], index);
  }
}
