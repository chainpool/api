// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { AccountId, ValidatorPrefs } from '@chainx-v2/types/interfaces';
import { ITuple } from '@chainx-v2/types/types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vec } from '@chainx-v2/types';

import { memo } from '../util';

/**
 * @description Retrieve the list of all validator stashes
 */
export function stashes(api: ApiInterfaceRx): () => Observable<AccountId[]> {
  return memo((): Observable<AccountId[]> =>
    api.query.staking.validators.creator.meta.type.asMap.linked.isTrue
      ? api.query.staking.validators<ITuple<[Vec<AccountId>, Vec<ValidatorPrefs>]>>().pipe(
        map(([stashIds]) => stashIds)
      )
      : api.query.staking.validators.keys().pipe(
        map((keys) => keys.map((key) => key.args[0] as AccountId))
      )
  );
}
