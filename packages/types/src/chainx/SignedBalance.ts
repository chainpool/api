// eslint-disable-next-line header/header
import Enum from '../codec/Enum';
import { ExtrinsicPayloadValue, Registry } from '../types';
import Struct from '../codec/Struct';
import Balance from './Balance';

export class SignedBalanceEnumItem extends Struct {
  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        Positive: Balance,
        // eslint-disable-next-line sort-keys
        Negative: Balance
      },
      value
    );
  }
}

export default class SignedBalance extends Enum {
  constructor (registry: Registry, value?: any, index?: string) {
    super(registry, { SignedBalanceEnumItem }, index);
  }
}
