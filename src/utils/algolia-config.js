const escapeStringRegexp = require("escape-string-regexp")
const pagePath = `templates/pageTemplate`
const indexName = `Pages`
const datapageQuery = `{
  pages: allSitePage {
      edges {
        node {
          pageContext
        }
      }
    }
  }`

function pageToAlgoliaRecord({ node: { pageContext } }) {
  return {
    objectID: pageContext,
  }
}

const queries = [
  {
    query: datapageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),//transforme données graphQL en enregistrements Algolia 
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]
module.exports = queries