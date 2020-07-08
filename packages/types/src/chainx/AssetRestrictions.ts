// eslint-disable-next-line header/header
import U32 from '../primitive/U32';

import Struct from '../codec/Struct';
import { ExtrinsicPayloadValue, Registry } from '../types';

export default class AssetRestrictions extends Struct {
    constructor(registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
        super(
            registry,
            {
                mask: U32,
            },
            value
        );
    }
 }
