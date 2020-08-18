// eslint-disable-next-line sort-keys,header/header
export default {
  AssetType: {
    _enum: [
      'Usable',
      'Locked',
      'Reserved',
      'ReservedWithdrawal',
      'ReservedDexSpot',
      'ReservedXRC20'
    ]
  },
  Chain: {
    _enum: [
      'ChainX',
      'Bitcoin',
      'Ethereum',
      'Polkadot'
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
  // eslint-disable-next-line sort-keys
  Memo: 'Text',
  // eslint-disable-next-line sort-keys
  AssetInfo: {
    token: 'Token',
    tokenName: 'Token',
    // eslint-disable-next-line sort-keys
    chain: 'Chain',
    decimals: 'Decimals',
    desc: 'Desc'
  },
  TradingPairProfile: {
    id: 'TradingPairId',
    // eslint-disable-next-line sort-keys
    currencyPair: 'CurrencyPair',
    pipDecimals: 'u32',
    tickDecimals: 'u32',
    tradable: 'bool'
  },
  // eslint-disable-next-line sort-keys
  Order: {
    props: 'OrderProperty',
    status: 'OrderStatus',
    // eslint-disable-next-line sort-keys
    remaining: 'Balance',
    // eslint-disable-next-line sort-keys
    executedIndices: 'Vec<TradingHistoryIndex>',
    // eslint-disable-next-line sort-keys
    alreadyFilled: 'Balance',
    lastUpdateAt: 'BlockNumber'
  },
  TradingPairInfo: {
    latestPrice: 'Price',
    // eslint-disable-next-line sort-keys
    lastUpdated: 'BlockNumber'
  },
  // eslint-disable-next-line sort-keys
  OrderExecutedInfo: {
    tradingHistoryIdx: 'TradingHistoryIndex',
    // eslint-disable-next-line sort-keys
    pairId: 'TradingPairId',
    price: 'Price',
    // eslint-disable-next-line sort-keys
    maker: 'AccountId',
    taker: 'AccountId',
    // eslint-disable-next-line sort-keys
    makerOrderId: 'OrderId',
    takerOrderId: 'OrderId',
    turnover: 'Balance',
    // eslint-disable-next-line sort-keys
    executedAt: 'BlockNumber'
  },
  // eslint-disable-next-line sort-keys
  BtcHeaderInfo: {
    header: 'BtcHeader',
    height: 'u32'
  },
  BtcParams: {
    maxBits: 'u32',
    // eslint-disable-next-line sort-keys
    blockMaxFuture: 'u32',
    targetTimespanSeconds: 'u32',
    // eslint-disable-next-line sort-keys
    targetSpacingSeconds: 'u32',
    // eslint-disable-next-line sort-keys
    retargetingFactor: 'u32',
    // eslint-disable-next-line sort-keys
    retargetingInterval: 'u32',
    // eslint-disable-next-line sort-keys
    minTimespan: 'u32',
    // eslint-disable-next-line sort-keys
    maxTimespan: 'u32'
  },
  // eslint-disable-next-line sort-keys
  AssetLedger: {
    lastTotalMiningWeight: 'MiningWeight',
    lastTotalMiningWeightUpdate: 'BlockNumber'
  },
  MinerLedger: {
    lastMiningWeight: 'MiningWeight',
    lastMiningWeightUpdate: 'BlockNumber',
    // eslint-disable-next-line sort-keys
    lastClaim: 'Option<BlockNumber>'
  },
  // eslint-disable-next-line sort-keys
  ClaimRestriction: {
    stakingRequirement: 'StakingRequirement',
    // eslint-disable-next-line sort-keys
    frequencyLimit: 'BlockNumber'
  },
  RpcNominatorLedger: {
    nomination: 'Balance',
    // eslint-disable-next-line sort-keys
    lastVoteWeight: 'RpcWeightType',
    lastVoteWeightUpdate: 'BlockNumber'
  },
  // eslint-disable-next-line sort-keys
  BondRequirement: {
    selfBonded: 'Balance',
    total: 'Balance'
  },
  ValidatorLedger: {
    total: 'Balance',
    // eslint-disable-next-line sort-keys
    lastTotalVoteWeight: 'WeightType',
    lastTotalVoteWeightUpdate: 'BlockNumber'
  },
  // eslint-disable-next-line sort-keys
  NominatorLedger: {
    nomination: 'Balance',
    // eslint-disable-next-line sort-keys
    lastVoteWeight: 'WeightType',
    lastVoteWeightUpdate: 'BlockNumber'
  },
  ValidatorProfile: {
    registeredAt: 'BlockNumber',
    // eslint-disable-next-line sort-keys
    isChilled: 'bool',
    lastChilled: 'Option<BlockNumber>',
    referralId: 'ReferralId'
  },
  // eslint-disable-next-line sort-keys
  NominatorProfile: {
    lastRebond: 'Option<BlockNumber>',
    unbondedChunks: 'Vec<Unbonded>'
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
  BtcAddress: 'Text',
  FixedAssetPower: 'u32',
  StakingRequirement: 'u32',
  // eslint-disable-next-line sort-keys
  Decimals: 'u8',
  // eslint-disable-next-line sort-keys
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
  RpcBalance: 'String',
  RpcWeightType: 'String',
  WeightType: 'u128',
  // eslint-disable-next-line sort-keys
  ReferralId: 'Text',
  // eslint-disable-next-line sort-keys
  AssetId: 'u32',

  BtcHeader: {
    version: 'u32',
    // eslint-disable-next-line sort-keys
    previousHeaderHash: 'H256',
    // eslint-disable-next-line sort-keys
    merkleRootHash: 'H256',
    time: 'u32',
    // eslint-disable-next-line sort-keys
    bits: 'BtcCompact',
    nonce: 'u32'
  },
  BtcNetwork: {
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
  Amount: 'i128',
  CurrencyIdOf: 'AssetId',
  // eslint-disable-next-line sort-keys
  CurrencyId: 'AssetId',
  // eslint-disable-next-line sort-keys
  AssetInfoForRpc: {
    token: 'String',
    tokenName: 'String',
    // eslint-disable-next-line sort-keys
    chain: 'Chain',
    decimals: 'Decimals',
    desc: 'String'
  },
  Handicap: {
    highestBid: 'Price',
    lowestAsk: 'Price'
  },
  OrderProperty: {
    id: 'OrderId',
    side: 'Side',
    // eslint-disable-next-line sort-keys
    price: 'Price',
    // eslint-disable-next-line sort-keys
    amount: 'Amount',
    pairId: 'TradingPairId',
    submitter: 'AccountId',
    // eslint-disable-next-line sort-keys
    orderType: 'OrderType',
    // eslint-disable-next-line sort-keys
    createdAt: 'BlockNumber'
  },

  TotalAssetInfoForRpc: {
    info: 'AssetInfoForRpc',
    // eslint-disable-next-line sort-keys
    balance: 'BTreeMap<AssetType, String>',
    isOnline: 'bool',
    restrictions: 'AssetRestrictions'
  },
  Unbonded: {
    lockedUntil: 'BlockNumber',
    value: 'Balance'
  },
  WithdrawalState: {
    _enum: [
      'Applying',
      'Processing',
      'NormalFinish',
      'RootFinish',
      'NormalCancel',
      'RootCancel'
    ]

  },
  // eslint-disable-next-line sort-keys
  WithdrawalRecord: {
    assetId: 'AssetId',
    // eslint-disable-next-line sort-keys
    applicant: 'AccountId',
    balance: 'Balance',
    // eslint-disable-next-line sort-keys
    addr: 'AddrStr',
    ext: 'Memo',
    height: 'BlockNumber'
  },
  // eslint-disable-next-line sort-keys
  WithdrawalLimit: {
    minimalWithdrawal: 'Balance',
    // eslint-disable-next-line sort-keys
    fee: 'Balance'
  },
  // eslint-disable-next-line sort-keys
  TrusteeInfoConfig: {
    minTrusteeCount: 'u32',
    // eslint-disable-next-line sort-keys
    maxTrusteeCount: 'u32'
  },
  // eslint-disable-next-line sort-keys
  GenericTrusteeIntentionProps: {
    about: 'Text',
    hotEntity: 'Vec<u8>',
    // eslint-disable-next-line sort-keys
    coldEntity: 'Vec<u8>'
  },
  // eslint-disable-next-line sort-keys
  GenericTrusteeSessionInfo: {
    trusteeList: 'Vec<AccountId>',
    // eslint-disable-next-line sort-keys
    threshold: 'u16',
    // eslint-disable-next-line sort-keys
    hotAddress: 'Vec<u8>',
    // eslint-disable-next-line sort-keys
    coldAddress: 'Vec<u8>'
  },
  // eslint-disable-next-line sort-keys
  BtcTrusteeType: 'Vec<u8>',
  // eslint-disable-next-line sort-keys
  BtcTrusteeAddrInfo: {
    addr: 'BtcAddress',
    redeemScript: 'Vec<u8>'
  },
  BtcTrusteeIntentionProps: {
    about: 'Text',
    hotEntity: 'BtcTrusteeType',
    // eslint-disable-next-line sort-keys
    coldEntity: 'BtcTrusteeType'
  },
  BtcTrusteeSessionInfo: {
    trusteeList: 'Vec<AccountId>',
    // eslint-disable-next-line sort-keys
    threshold: 'u16',
    // eslint-disable-next-line sort-keys
    hotAddress: 'BtcTrusteeAddrInfo',
    // eslint-disable-next-line sort-keys
    coldAddress: 'BtcTrusteeAddrInfo'
  },
  // eslint-disable-next-line sort-keys
  BtcCompact: 'u32',
  BtcTransaction: 'Vec<u8>',
  // eslint-disable-next-line sort-keys
  BtcPartialMerkleTree: {
    txCount: 'u32',
    // eslint-disable-next-line sort-keys
    hashes: 'Vec<H256>',
    // eslint-disable-next-line sort-keys
    bits: 'Vec<bool>'
  },
  BtcRelayedTxInfo: {
    blockHash: 'H256',
    merkleProof: 'BtcPartialMerkleTree'
  },
  // eslint-disable-next-line sort-keys
  BtcHeaderIndex: {
    hash: 'H256',
    height: 'u32'
  },
  BtcTxResult: {
    _enum: [
      'Success',
      'Failed'
    ]
  },
  BtcTxState: {
    result: 'BtcTxResult',
    txType: 'BtcTxType'
  },
  BtcTxType: {
    _enum: [
      'Withdrawal',
      'Deposit',
      'HotAndCold',
      'TrusteeTransition',
      'Irrelevance'
    ]
  },
  // eslint-disable-next-line sort-keys
  BtcDepositCache: {
    // eslint-disable-next-line sort-keys
    txid: 'H256',
    // eslint-disable-next-line sort-keys
    balance: 'u64'
  },
  BtcVoteResult: {
    _enum: [
      'Unfinish',
      'Finish'
    ]
  },
  BtcWithdrawalProposal: {
    sigState: 'BtcVoteResult',
    withdrawalIdList: 'Vec<u32>',
    // eslint-disable-next-line sort-keys
    tx: 'BtcTransaction',
    // eslint-disable-next-line sort-keys
    trusteeList: 'Vec<(AccountId, bool)>'
  },
  ValidatorInfo: {
    account: 'AccountId',
    registeredAt: 'BlockNumber',
    // eslint-disable-next-line sort-keys
    isChilled: 'bool',
    lastChilled: 'Option<BlockNumber>',
    total: 'RpcBalance',
    // eslint-disable-next-line sort-keys
    lastTotalVoteWeight: 'RpcWeightType',
    lastTotalVoteWeightUpdate: 'BlockNumber',
    // eslint-disable-next-line sort-keys
    isValidating: 'bool',
    // eslint-disable-next-line sort-keys
    selfBonded: 'RpcBalance',
    // eslint-disable-next-line sort-keys
    rewardPotAccount: 'AccountId',
    rewardPotBalance: 'RpcBalance'
  },
  // eslint-disable-next-line sort-keys
  String: 'Text',
  // eslint-disable-next-line sort-keys
  RpcPrice: 'String',
  // eslint-disable-next-line sort-keys
  MiningPower: 'u128'
};
