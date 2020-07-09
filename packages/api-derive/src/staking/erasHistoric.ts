// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { ActiveEraInfo, EraIndex } from '@chainx-v2/types/interfaces';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Option, u32 } from '@chainx-v2/types';

import { memo } from '../util';

export function erasHistoric (api: ApiInterfaceRx): (withActive: boolean) => Observable<EraIndex[]> {
  return memo((withActive: boolean): Observable<EraIndex[]> =>
    api.query.staking?.activeEra
      ? api.queryMulti<[Option<ActiveEraInfo>, u32]>([
        api.query.staking.activeEra,
        api.query.staking.historyDepth
      ]).pipe(
        map(([activeEraOpt, historyDepth]): EraIndex[] => {
          const result: EraIndex[] = [];
          const max = historyDepth.toNumber();
          const activeEra: BN = activeEraOpt.unwrapOrDefault().index;
          let lastEra = activeEra;

          while (lastEra.gten(0) && (result.length < max)) {
            if ((lastEra !== activeEra) || (withActive === true)) {
              result.push(api.registry.createType('EraIndex', lastEra));
            }

            lastEra = lastEra.subn(1);
          }

          // go from oldest to newest
          return result.reverse();
        })
      )
      : of([])
  );
}
