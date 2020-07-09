// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@chainx-v2/types/interfaces';
import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { DeriveCouncilVote } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { memo } from '../util';

export function votesOf(api: ApiInterfaceRx): (accountId: string | Uint8Array | AccountId) => Observable<DeriveCouncilVote> {
  return memo((accountId: string | Uint8Array | AccountId): Observable<DeriveCouncilVote> =>
    api.derive.council.votes().pipe(
      map((votes): DeriveCouncilVote =>
        (
          votes.find(([from]) => from.eq(accountId)) ||
          [null, { stake: api.registry.createType('Balance'), votes: [] as AccountId[] }]
        )[1]
      )
    )
  );
}
