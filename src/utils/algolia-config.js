const pagePath = `templates/pageTemplate`
const indexName = `Pages`
const datapageQuery = `{
  pages: allSitePage {
      edges {
        node {
          id
          pageContext
        }
      }
    }
  }`

function pageToAlgoliaRecord({ node: { id, pageContext } }) {
  return {
    objectID: id, 
    pageContext,
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