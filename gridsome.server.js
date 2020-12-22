// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs')
module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/cv',
      component: './src/pages/CV.vue',
    })
  })

  api.afterBuild(({ redirects, config }) => {
    const template = `<!doctype html>
<title>https://mekyle.com.com{{}}</title>
<link rel=canonical href=https://mekyle.com.com{{}}>
<meta name=robots content="noindex">
<meta charset=utf-8>
<meta http-equiv=refresh content="0; url={{}}">`
    for (const rule of redirects) {
      const out = template.replace(/{{}}/g, rule.to)
      fs.writeFileSync(`${config.outputDir}${rule.from}`, out, 'utf-8')
    }
  })
}
