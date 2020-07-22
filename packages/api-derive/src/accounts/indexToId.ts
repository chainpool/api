// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, BalanceOf } from '@chainx-v2/types/interfaces';
import { ITuple } from '@chainx-v2/types/types';

import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { ENUMSET_SIZE } from '@chainx-v2/types/generic/AccountIndex';
import { Option, Vec } from '@chainx-v2/types';
import { isFunction } from '@chainx-v2/util';

import { memo } from '../util';

function queryEnumSet(api: ApiInterfaceRx, _accountIndex: AccountIndex | string): Observable<AccountId | undefined> {
  const accountIndex = _accountIndex instanceof api.registry.createClass('AccountIndex')
    ? _accountIndex
    : api.registry.createType('AccountIndex', _accountIndex);

  return api.query.indices.enumSet<Vec<AccountId>>(accountIndex.div(ENUMSET_SIZE)).pipe(
    startWith([]),
    map((accounts): AccountId | undefined =>
      (accounts || [])[accountIndex.mod(ENUMSET_SIZE).toNumber()]
    )
  );
}

// current
function query(api: ApiInterfaceRx, accountIndex: AccountIndex | string): Observable<AccountId | undefined> {
  return api.query.indices.accounts<Option<ITuple<[AccountId, BalanceOf]>>>(accountIndex).pipe(
    map((optResult): AccountId | undefined =>
      optResult.unwrapOr([])[0]
    )
  );
}

/**
 * @name indexToId
 * @param {( AccountIndex | string )} accountIndex - An accounts index in different formats.
 * @returns Returns the corresponding AccountId.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.accounts.indexToId('F7Hs', (accountId) => {
 *   console.log(`The AccountId of F7Hs is ${accountId}`);
 * });
 * ```
 */
export function indexToId(api: ApiInterfaceRx): (accountIndex: AccountIndex | string) => Observable<AccountId | undefined> {
  return memo((accountIndex: AccountIndex | string): Observable<AccountId | undefined> =>
    api.query.indices
      ? isFunction(api.query.indices.accounts)
        ? query(api, accountIndex)
        : queryEnumSet(api, accountIndex)
      : of(undefined)
  );
}
