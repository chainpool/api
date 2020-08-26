// eslint-disable-next-line header/header
const { ApiPromise, WsProvider } = require('@chainx-v2/api');
const { PAIRS } = require('@chainx-v2/keyring/testing');
const testKeyring = require('@chainx-v2/keyring/testing').default;
const { encodeAddress } = require('@chainx-v2/keyring');
const { Account } = require('@chainx-v2/account');

const url = 'ws://47.114.131.193:9000';
const wsProvider = new WsProvider(url);

const keyring = testKeyring();
const alice = keyring.pairs[0];

// eslint-disable-next-line no-void
async function excuteTransfer () {
  const api = await ApiPromise.create({ provider: wsProvider });
  const aliceAddr = encodeAddress(PAIRS[0].publicKey, 42);

  const systemProperties = await api.rpc.system.properties();

  console.log(aliceAddr);
  const balance = await api.query.system.account(PAIRS[0].publicKey);

  console.log('balance', balance.data.free.toString());

  let id = 0;
  const fromAddress = Account.generate().address();

  console.log(fromAddress);
  const unsub = await api.tx.balances
    .transfer(fromAddress,
      1000000 * Math.pow(10, 8))
    .signAndSend(alice, ({ events = [], status }) => {
      console.log(`Current status is ${status}`);
      id++;

      if (status.isInBlock) {
        console.log(`Transaction included at blockHash ${status.asInBlock}`);
      } else if (status.isFinalized) {
        console.log(`Transaction finalized at blockHash ${status.asFinalized}`);
        unsub();
      }

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ event: { data, method, section }, phase }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`);
      });
      process.exit();
    });

  process.exit();
}

// eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/require-await
async function main () {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises

  await excuteTransfer();
}

main().catch(console.error);
