// Copyright 2017-2020 @chainx-v2/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Handlebars from 'handlebars';

import { readTemplate } from './file';

Handlebars.registerPartial({
  docs: Handlebars.compile(readTemplate('docs'))
});
