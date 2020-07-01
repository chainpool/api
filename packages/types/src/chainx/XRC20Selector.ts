import Enum from '../codec/Enum';
import { Registry } from '../types';

export default class Chain extends Enum {
  constructor(registry: Registry, value?: Record<string, any> | Uint8Array | Enum | string, index?: string) {
    super(registry, ['BalanceOf', 'TotalSupply', 'Name', 'Symbol', 'Decimals', 'Issue', 'Destroy'], index);
  }

  // 发送交易
  public toJSON(): string {
    return this.toJSON();
  }
}
