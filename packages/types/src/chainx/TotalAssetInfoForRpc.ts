
// eslint-disable-next-line header/header
import Struct from '../codec/Struct';

import { ExtrinsicPayloadValue, Registry } from '../types';
import BTreeMap from '../codec/BTreeMap';
import AssetType from './AssetType';
import { bool } from '../primitive';
import AssetRestrictions from './AssetRestrictions';
import AssetInfoForRpc from './AssetInfoForRpc';
import Text from '../primitive/Text';
import Vec from '../codec/Vec';

export default class TotalAssetInfoForRpc extends Struct {
  constructor(registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(
      registry,
      {
        info: AssetInfoForRpc,
        balance: BTreeMap.with(AssetType, Vec.with(Text)),
        isOnlin: bool,
        restrictions: AssetRestrictions
      },
      value
    );
  }
}
