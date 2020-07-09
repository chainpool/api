// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash, VoteThreshold } from '@chainx-v2/types/interfaces';
import { ITuple } from '@chainx-v2/types/types';
import { DeriveProposalExternal } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { Option } from '@chainx-v2/types';

import { memo } from '../util';

function withImage(api: ApiInterfaceRx, nextOpt: Option<ITuple<[Hash, VoteThreshold]>>): Observable<DeriveProposalExternal | null> {
  if (nextOpt.isNone) {
    return of(null);
  }

  const [imageHash, threshold] = nextOpt.unwrap();

  return api.derive.democracy.preimage(imageHash).pipe(
    map((image): DeriveProposalExternal => ({
      image,
      imageHash,
      threshold
    }))
  );
}

export function nextExternal(api: ApiInterfaceRx): () => Observable<DeriveProposalExternal | null> {
  return memo((): Observable<DeriveProposalExternal | null> =>
    api.query.democracy?.nextExternal
      ? api.query.democracy.nextExternal<Option<ITuple<[Hash, VoteThreshold]>>>().pipe(
        switchMap((nextOpt) => withImage(api, nextOpt))
      )
      : of(null)
  );
}
