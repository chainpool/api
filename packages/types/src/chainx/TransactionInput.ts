
// eslint-disable-next-line header/header
import Struct from '../codec/Struct';
import U32 from '../primitive/U32';
import OutPoint from "./OutPoint";
import Bytes from '../primitive/Bytes';
import Vec from '../codec/Vec';
import { ExtrinsicPayloadValue, Registry } from '../types';

export default class TransactionInput extends Struct {
    constructor(registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
        super(
            registry,
            {
                previous_output: OutPoint,
                script_sig: Bytes,
                sequence: U32,
                script_witness: Vec.with(Bytes)
            },
            value
        );
    }

}
