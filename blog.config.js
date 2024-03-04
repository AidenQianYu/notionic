const BLOG = {
  title: 'AQian',
  author: 'Aiden',
  email: 'aqian761@gmail.com',
  link: 'https://qianyu.blog',
  //newsletter: 'Notionic Weekly',
  description: 'A static blog build on top of Notion and Next.js',
  lang: 'zh-CN', // [ 'zh-CN','en-US', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Notionic in a folder
  since: 2024, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  pagesShow: {
    projects: true,
    newsletter: true,
    notes: false,
    contact: false,
    books: false,
    friends: false
  },
  showWeChatPay: false,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  defaultCover: '/cover.jpg',
  socialLink: {
    twitter: 'https://twitter.com/AQIAN03054293',
    github: 'https://github.com/AidenQianYu',
    telegram: ''
  },
  seo: {
    keywords: ['Human-computer Interaction', 'Product Manager', 'SEUer'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'izuolan.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '6252313427', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://channel.zuolan.me/', // The link of your Telegram channel
  telegramChannelName: 'zuolan_me', // The name of your Telegram channel
  craftConfigShareUrl: 'https://www.craft.do/s/kQtcWqkv98cHhB', // The link to share your craft config
  analytics: {
    provider: '', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Default
      token: '' // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    }
  },
  comment: {
    // support provider: utterances, supacomments
    provider: '', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: '', // The url of your Supabase instance
      supabaseAnonKey: '' // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
