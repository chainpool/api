// eslint-disable-next-line header/header
export default {
  xassets: {
    getAssetsByAccount: {
      description: 'get all assets balance for an account',
      params: [
        {
          name: 'who',
          type: 'AccountId'
        },
        {
          name: 'at',
          type: 'Hash',
          // eslint-disable-next-line sort-keys
          isOptional: true
        }
      ],
      type: 'BTreeMap<AssetId, BTreeMap<AssetType, String>>'
    },
    // eslint-disable-next-line sort-keys
    getAssets: {
      description: 'get all assets balance and infos',
      params: [
        {
          name: 'at',
          type: 'Hash',
          // eslint-disable-next-line sort-keys
          isOptional: true
        }
      ],
      type: 'BTreeMap<AssetId, TotalAssetInfoForRpc>'
    }

  },
  // eslint-disable-next-line sort-keys
  chainx: {
    // eslint-disable-next-line sort-keys
    contractXRC20Call: {
      description: 'xrc20 request',
      params: [
        {
          name: 'ContractXRC20CallRequest',
          type: 'PublicKey'
        },
        {
          name: 'at',
          type: 'Hash',
          // eslint-disable-next-line sort-keys
          isOptional: true
        }
      ],
      type: 'Text'
    }
  }

};
