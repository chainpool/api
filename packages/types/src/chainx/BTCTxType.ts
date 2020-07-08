import Enum from '../codec/Enum';
import { Registry } from '../types';

export default class BTCTxType extends Enum {
  constructor (registry: Registry, value?: Record<string, any> | Uint8Array | Enum | string, index?: string) {
    super(registry, [
      'Withdrawal',
      'Deposit',
      'HotAndCold',
      'TrusteeTransition',
      'Lock',
      'Unlock',
      'Irrelevance'
    ], index);
  }
}
