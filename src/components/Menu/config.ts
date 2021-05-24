import { MenuEntry } from '@pantherswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://pantherswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      {
        label: 'LP Migration',
        href: 'https://docs.pantherswap.com/amm-launch',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://pantherswap.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://pantherswap.com/pools',
  },
  {
    label: 'Jungles',
    icon: 'JungleIcon',
    href: 'https://pantherswap.com/jungles',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://pantherswap.com/lottery',
  },
  {
    label: 'IPO',
    icon: 'IfoIcon',
    href: 'https://pantherswap.com/ipo',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: 'https://pantherswap.com/referrals',
  },
  {
    label: 'Audits',
    icon: 'ShieldIcon',
    href: 'https://docs.pantherswap.com/security/audits',
  },
  {
    label: 'Features',
    icon: 'FeatureIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://docs.pantherswap.com/tokenomics/automatic-liquidity',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.pantherswap.com/tokenomics/automatic-burning',
      },
      {
        label: 'Harvest Lockup',
        href: 'https://docs.pantherswap.com/tokenomics/harvest-lockup',
      },
      {
        label: 'Anti-Whale',
        href: 'https://docs.pantherswap.com/tokenomics/anti-whale',
      },
    ],
  },
  // {
  //   label: 'Price Charts',
  //   icon: 'ChartIcon',
  //   items: [
  //     {
  //       label: 'DexGuru',
  //       href: 'https://dex.guru/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7-bsc',
  //     },
  //     {
  //       label: 'PooCoin',
  //       href: 'https://poocoin.app/tokens/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
  //     },
  //     {
  //       label: 'BoggedFinance',
  //       href: 'https://charts.bogged.finance/?token=0x1f546aD641B56b86fD9dCEAc473d1C7a357276B7',
  //     },
  //     {
  //       label: 'DexTools',
  //       href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0xecc11a78490866e0073ebc4a4dcb6f75673c8685',
  //     },
  //   ],
  // },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/pantherswap',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/pantherswap',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/pantherswap/',
      },
      {
        label: 'LiveCoinWatch',
        href: 'https://www.livecoinwatch.com/price/PantherSwap-PANTHER',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/bsc/panther',
      },
    ],
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pantherswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pantherswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pantherswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pantherswap.info/accounts',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/pantherswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pantherswap.com',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.pantherswap.com/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://pantherswap.medium.com',
      },
      {
        label: 'Voting',
        href: 'https://voting.pantherswap.com/',
      },
    ],
  },
]

export default config
