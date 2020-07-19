/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Required imports
const { ApiPromise, WsProvider } = require('@chainx-v2/api');
const Account = require('@chainx-v2/account');

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://47.114.131.193:9000');
  const account1 = Account.generate();

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider });

  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
}

main().catch(console.error).finally(() => process.exit());
