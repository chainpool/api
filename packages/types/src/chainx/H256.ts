// eslint-disable-next-line header/header
import { AnyU8a, Registry } from '../types';
import U8aFixed, { BitLength } from '../codec/U8aFixed';

export default class Vote extends U8aFixed {

  constructor (registry: Registry, value: AnyU8a = new Uint8Array(), bitLength: BitLength = 256) {
    // decoded is just 1 byte
    // Aye: Most Significant Bit
    // Conviction: 0000 - 0101

    super(registry, value, 256);
  }
}
