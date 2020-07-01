import Enum from '../codec/Enum';
import { Registry } from '../types';

export default class Chain extends Enum {
  constructor(registry: Registry, value?: Record<string, any> | Uint8Array | Enum | string, index?: string) {
    super(registry, ['CanMove', 'CanTransfer', 'CanDeposit', 'CanWithdraw', 'CanDestroyWithdrawal', 'CanDestroyFree'], index);
  }

}
