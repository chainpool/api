
// eslint-disable-next-line header/header
import Struct from '../codec/Struct';
import U32 from '../primitive/U32';

import BTCTransaction from './BTCTransaction';
import BTCTxType from './BTCTxType';
import { ExtrinsicPayloadValue, Registry } from '../types';

export default class BTCTxInfo extends Struct {
    constructor(registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
        super(
            registry,
            {
                raw_tx: BTCTransaction,
                tx_type: BTCTxType,
                height: U32
            },
            value
        );
    }

}
