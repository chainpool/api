// Copyright 2017-2020 @chainx-v2/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { detectPackage } from '@chainx-v2/util';

// FIXME This really should be `import(...).then(...)`, but need to check rejections
// eslint-disable-next-line @typescript-eslint/no-var-requires
detectPackage(require('./package.json'), typeof __dirname !== 'undefined' && __dirname);

export { Keyring } from '@chainx-v2/keyring';
export { WsProvider } from '@chainx-v2/rpc-provider';

export { default as ApiPromise } from './promise';
export { default as ApiRx } from './rx';
export * from './submittable';
