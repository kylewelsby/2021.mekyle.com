// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Top Software Engineer - Kyle Welsby',
  siteDescription:
    'Passionate Software Engineer ranked top 1% JavaScript, top 2% Vue.js, top 5% Ruby developer in the world.',
  pathPrefix: process.env.BASE_PATH || '',
  icon: './src/icon.png',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: 'gridsome-plugin-pug',
    },
    // {
    //   use: "gridsome-plugin-pwa",
    //   options: {
    //     disableServiceWorker: true,
    //     title: "Software Engineer - Kyle Welsby",
    //     display: "browser",
    //     startUrl: "/",
    //     themeColor: "#181818",
    //     shortName: "Kyle Welsby"
    //   }
    // },
    {
      use: 'gridsome-source-rest',
      options: {
        debug: true,
        axiosConfig: {
          headers: {
            'api-key': process.env.DEV_TO_API_KEY,
          },
        },
        endpoint: 'https://dev.to/api/articles/me/published',
        typeName: 'devToArticles',
        isStatic: false,
        isCollection: true,
      },
    },
  ],
}
