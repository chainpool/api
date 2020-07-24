/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Required imports
const { ChainX } = require('@chainx-v2/api');
const { Account } = require('@chainx-v2/account');
const { decodeAddress, encodeAddress, setSS58Format } = require('@chainx-v2/keyring');

async function main () {
  // Initialise the provider to connect to the local node
  const chainx = new ChainX('ws://47.114.131.193:9000');
  const account1 = Account.generate();

  console.log(`generate account is: ${account1.address()}`);

  // Create the API and wait until ready
  await chainx.ready();
  const api = chainx.getApi();

  const assets = await api.rpc.xassets.getAssets();

  console.log('balance:' + assets);

  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
}

main().catch(console.error).finally(() => process.exit());
