// eslint-disable-next-line sort-keys,header/header
export default {
  Address: 'AccountId',
  Token: 'Text',
  // eslint-disable-next-line sort-keys
  Desc: 'Text',
  Memo: 'Text',
  // eslint-disable-next-line sort-keys
  AddrStr: 'Text',
  NetworkType: {
    _enum: [
      'Mainnet',
      'Testnet'
    ]
  },
  // eslint-disable-next-line sort-keys
  Chain: {
    _enum: [
      'ChainX',
      'Bitcoin',
      'Ethereum',
      'Polkadot'
    ]
  },
  Precision: 'u8',
  // eslint-disable-next-line sort-keys
  AssetId: 'u32',
  AssetInfo: {
    token: 'Token',
    token_name: 'Token',
    // eslint-disable-next-line sort-keys
    chain: 'Chain',
    precision: 'Precision',
    // eslint-disable-next-line sort-keys
    desc: 'Desc'
  },
  AssetType: {
    _enum: [
      'Free',
      'ReservedStaking',
      'ReservedStakingRevocation',
      'ReservedWithdrawal',
      'ReservedDexSpot',
      'ReservedDexFuture',
      'ReservedCurrency',
      'ReservedXRC20'
    ]
  },
  // eslint-disable-next-line sort-keys
  AssetRestrictions: {
    mask: 'u32'
  },
  // eslint-disable-next-line sort-keys
  AssetRestriction: {
    _enum: [
      'Move',
      'Transfer',
      'Deposit',
      'Withdraw',
      'DestroyWithdrawal',
      'DestroyFree'
    ]
  },
  SignedBalance: {
    _enum: {
      Positive: 'Balance',
      // eslint-disable-next-line sort-keys
      Negative: 'Balance'
    }
  },
  // eslint-disable-next-line sort-keys
  Compact: 'u32',
  // eslint-disable-next-line sort-keys
  BTCHeader: {
    version: 'u32',
    // eslint-disable-next-line sort-keys
    previous_header_hash: 'H256',
    // eslint-disable-next-line sort-keys
    merkle_root_hash: 'H256',
    time: 'u32',
    // eslint-disable-next-line sort-keys
    bits: 'Compact',
    once: 'u32'
  },
  BTCHeaderInfo: {
    header: 'BTCHeader',
    height: 'u32',
    // eslint-disable-next-line sort-keys
    confirmed: 'bool',
    txid_list: 'Vec<H256>'
  },
  OutPoint: {
    hash: 'H256',
    index: 'u32'
  },
  TransactionInput: {
    previous_output: 'OutPoint',
    script_sig: 'Bytes',
    sequence: 'u32',
    // eslint-disable-next-line sort-keys
    script_witness: 'Vec<Bytes>'
  },
  TransactionOutput: {
    value: 'u64',
    // eslint-disable-next-line sort-keys
    script_pubkey: 'Bytes'
  },
  // eslint-disable-next-line sort-keys
  BTCTransaction: {
    version: 'i32',
    // eslint-disable-next-line sort-keys
    inputs: 'Vec<TransactionInput>',
    outputs: 'Vec<TransactionOutput>',
    // eslint-disable-next-line sort-keys
    lock_time: 'u32'
  },
  BTCTxType: {
    _enum: [
      'Withdrawal',
      'Deposit',
      'HotAndCold',
      'TrusteeTransition',
      'Lock',
      'Unlock',
      'Irrelevance'
    ]
  },
  // eslint-disable-next-line sort-keys
  BTCTxInfo: {
    raw_tx: 'BTCTransaction',
    tx_type: 'BTCTxType',
    // eslint-disable-next-line sort-keys
    height: 'u32'
  },
  // eslint-disable-next-line sort-keys
  BTCAddrTyep: {
    _enum: [
      'P2PKH',
      'P2SH'
    ]
  },
  BTCNetwork: {
    _enum: [
      'Mainnet',
      'Testnet'
    ]
  },
  // eslint-disable-next-line sort-keys
  AddressHash: 'H160',
  BTCAddress: {
    kind: 'Type',
    network: 'Network',
    // eslint-disable-next-line sort-keys
    hash: 'AddressHash'
  },
  BTCParams: {
    max_bits: 'u32',
    // eslint-disable-next-line sort-keys
    block_max_future: 'u32',
    target_timespan_seconds: 'u32',
    // eslint-disable-next-line sort-keys
    target_spacing_seconds: 'u32',
    // eslint-disable-next-line sort-keys
    retargeting_factor: 'u32',
    retargeting_interval: 'u32',
    // eslint-disable-next-line sort-keys
    min_timespan: 'u32',
    // eslint-disable-next-line sort-keys
    max_timespan: 'u32'
  },
  ContractInfo: 'RawAliveContractInfo',
  XRC20Selector: {
    _enum: [
      'BalanceOf',
      'TotalSupply',
      'Name',
      'Symbol',
      'Decimals',
      'Issue',
      'Destroy'
    ]
  },
  // eslint-disable-next-line sort-keys
  Selector: '[u8; 4]',
  // eslint-disable-next-line sort-keys
  AssetInfoForRpc: {
    token: 'String',
    token_name: 'String',
    // eslint-disable-next-line sort-keys
    chain: 'Chain',
    precision: 'Precision',
    // eslint-disable-next-line sort-keys
    desc: 'String'
  },
  TotalAssetInfoForRpc: {
    info: 'AssetInfoForRpc',
    // eslint-disable-next-line sort-keys
    balance: 'BTreeMap<AssetType, String>',
    isOnline: 'bool',
    restrictions: 'AssetRestrictions'
  }
};
