// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection, addSchemaTypes }) => {
    // Create empty devToArticle collection if API key is missing
    // This allows the site to build without Dev.to articles
    if (!process.env.DEV_TO_API_KEY) {
      addSchemaTypes(`
        type devToArticle implements Node {
          id: ID!
          title: String
          slug: String
          published_at: String
          cover_image: String
          canonical_url: String
        }
      `)
      addCollection('devToArticle')
    }
  })
}
