// eslint-disable-next-line sort-keys,header/header
export default {
  SignedBalance: {
    _enum: {
      Negative: 'Balance',
      Positive: 'Balance'
    }
  },
  // eslint-disable-next-line sort-keys
  AssetType: {
    _enum: [
      'Free',
      'ReservedStaking',
      'ReservedStakingRevocation',
      'ReservedWithdrawal',
      'ReservedDexSpot',
      'ReservedDexFuture',
      'ReservedCurrency',
      'ReservedXRC20',
      'LockedFee'
    ]
  },
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
  OrderType: {
    _enum: [
      'Limit',
      'Market'
    ]
  },
  Side: {
    _enum: [
      'Buy',
      'Sell'
    ]
  },
  // eslint-disable-next-line sort-keys
  Memo: 'Text',
  // eslint-disable-next-line sort-keys
  AssetInfo: {
    token: 'Token',
    token_name: 'Token',
    // eslint-disable-next-line sort-keys
    chain: 'Chain',
    precision: 'Precision',
    // eslint-disable-next-line sort-keys
    desc: 'Desc'
  },
  BTCHeaderInfo: {
    header: 'BTCHeader',
    height: 'u32',
    // eslint-disable-next-line sort-keys
    confirmed: 'bool',
    txid_list: 'Vec<H256>'
  },
  BTCTxInfo: {
    raw_tx: 'BTCTransaction',
    tx_type: 'BTCTxType',
    // eslint-disable-next-line sort-keys
    height: 'u32'
  },
  // eslint-disable-next-line sort-keys
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
  TradingPairProfile: {
    id: 'TradingPairId',
    // eslint-disable-next-line sort-keys
    currency_pair: 'CurrencyPair',
    pip_precision: 'u32',
    tick_precision: 'u32',
    // eslint-disable-next-line sort-keys
    online: 'bool'
  },
  // eslint-disable-next-line sort-keys
  Order: {
    props: 'OrderProperty',
    status: 'OrderStatus',
    // eslint-disable-next-line sort-keys
    remaining: 'Balance',
    // eslint-disable-next-line sort-keys
    executed_indices: 'Vec<TradingHistoryIndex>',
    // eslint-disable-next-line sort-keys
    already_filled: 'Balance',
    last_update_at: 'BlockNumber'
  },
  TradingPairInfo: {
    latest_price: 'Price',
    // eslint-disable-next-line sort-keys
    last_updated: 'BlockNumber'
  },
  // eslint-disable-next-line sort-keys
  OrderExecutedInfo: {
    trading_history_idx: 'TradingHistoryIndex',
    // eslint-disable-next-line sort-keys
    pair_id: 'TradingPairId',
    price: 'Price',
    // eslint-disable-next-line sort-keys
    maker: 'AccountId',
    taker: 'AccountId',
    // eslint-disable-next-line sort-keys
    maker_order_id: 'OrderId',
    taker_order_id: 'OrderId',
    turnover: 'Balance',
    // eslint-disable-next-line sort-keys
    executed_at: 'BlockNumber'
  },
  // eslint-disable-next-line sort-keys
  AssetLedger: {
    last_total_mining_weight: 'MiningWeight',
    last_total_mining_weight_update: 'BlockNumber'
  },
  MinerLedger: {
    last_mining_weight: 'MiningWeight',
    last_mining_weight_update: 'BlockNumber',
    // eslint-disable-next-line sort-keys
    last_claim: 'Option<BlockNumber>'
  },
  // eslint-disable-next-line sort-keys
  ClaimRestriction: {
    staking_requirement: 'StakingRequirement',
    // eslint-disable-next-line sort-keys
    frequency_limit: 'BlockNumber'
  },
  // eslint-disable-next-line sort-keys
  BondRequirement: {
    self_bonded: 'Balance',
    total: 'Balance'
  },
  ValidatorLedger: {
    total: 'Balance',
    // eslint-disable-next-line sort-keys
    last_total_vote_weight: 'WeightType',
    last_total_vote_weight_update: 'BlockNumber'
  },
  // eslint-disable-next-line sort-keys
  NominatorLedger: {
    nomination: 'Balance',
    // eslint-disable-next-line sort-keys
    last_vote_weight: 'WeightType',
    last_vote_weight_update: 'BlockNumber'
  },
  ValidatorProfile: {
    registered_at: 'BlockNumber',
    // eslint-disable-next-line sort-keys
    is_chilled: 'bool',
    last_chilled: 'Option<BlockNumber>'
  },
  // eslint-disable-next-line sort-keys
  NominatorProfile: {
    last_rebond: 'Option<BlockNumber>',
    unbonded_chunks: 'Vec<Unbonded>'
  },
  // eslint-disable-next-line sort-keys
  GlobalDistribution: {
    treasury: 'u32',
    // eslint-disable-next-line sort-keys
    mining: 'u32'
  },
  MiningDistribution: {
    asset: 'u32',
    staking: 'u32'
  },
  UnbondedIndex: 'u32',
  // eslint-disable-next-line sort-keys
  Desc: 'Text',
  Token: 'Text',
  // eslint-disable-next-line sort-keys
  AddrStr: 'Text',
  Selector: '[u8; 4]',
  // eslint-disable-next-line sort-keys
  HandicapInfo: 'Handicap',
  Price: 'Balance',
  // eslint-disable-next-line sort-keys
  OrderId: 'u64',
  TradingPairId: 'u32',
  // eslint-disable-next-line sort-keys
  TradingHistoryIndex: 'u64',
  // eslint-disable-next-line sort-keys
  PriceFluctuation: 'u32',
  // eslint-disable-next-line sort-keys
  FixedAssetPower: 'u32',
  StakingRequirement: 'u32',
  // eslint-disable-next-line sort-keys
  Precision: 'u8',
  // eslint-disable-next-line sort-keys
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
  CurrencyPair: {
    base: 'AssetId',
    quote: 'AssetId'
  },
  OrderStatus: {
    _enum: [
      'Created',
      'ParitialFill',
      'Filled',
      'ParitialFillAndCanceled',
      'Canceled'
    ]
  },
  // eslint-disable-next-line sort-keys
  MiningWeight: 'u128',
  WeightType: 'u128',
  // eslint-disable-next-line sort-keys
  AssetId: 'u32',
  Chain: {
    _enum: [
      'ChainX',
      'Bitcoin',
      'Ethereum',
      'Polkadot'
    ]
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
  AssetRestrictions: 'u32',
  BTCAddress: {
    kind: 'Type',
    network: 'Network',
    // eslint-disable-next-line sort-keys
    hash: 'AddressHash'
  },
  BTCHeader: {
    version: 'u32',
    // eslint-disable-next-line sort-keys
    previous_header_hash: 'H256',
    // eslint-disable-next-line sort-keys
    merkle_root_hash: 'H256',
    time: 'u32',
    // eslint-disable-next-line sort-keys
    bits: 'BTCCompact',
    nonce: 'u32'
  },
  BTCNetwork: {
    _enum: [
      'Mainnet',
      'Testnet'
    ]
  },
  NetworkType: {
    _enum: [
      'Mainnet',
      'Testnet'
    ]
  },
  OrderInfo: 'Order',
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
  Handicap: {
    highest_bid: 'Price',
    lowest_offer: 'Price'
  },
  OrderProperty: {
    id: 'OrderId',
    side: 'Side',
    // eslint-disable-next-line sort-keys
    price: 'Price',
    // eslint-disable-next-line sort-keys
    amount: 'Amount',
    pair_id: 'TradingPairId',
    submitter: 'AccountId',
    // eslint-disable-next-line sort-keys
    order_type: 'OrderType',
    // eslint-disable-next-line sort-keys
    created_at: 'BlockNumber'
  },
  TotalAssetInfoForRpc: {
    info: 'AssetInfoForRpc',
    // eslint-disable-next-line sort-keys
    balance: 'BTreeMap<AssetType, String>',
    isOnline: 'bool',
    restrictions: 'AssetRestrictions'
  },
  Unbonded: {
    locked_until: 'BlockNumber',
    value: 'Balance'
  },
  // eslint-disable-next-line sort-keys
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
  // eslint-disable-next-line sort-keys
  BTCAddrType: {
    _enum: [
      'P2PKH',
      'P2SH'
    ]
  },
  MiningPower: 'u128',
  // eslint-disable-next-line sort-keys
  AddressHash: 'H160'

};
