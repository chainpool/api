// eslint-disable-next-line header/header
import Enum from '../codec/Enum';
import { Registry } from '../types';

export default class BTCNetwork extends Enum {
  constructor (registry: Registry, value?: Record<string, any> | Uint8Array | Enum | string, index?: string) {
    super(registry, [
      'Mainnet',
      'Testnet'
    ], index);
  }
}
