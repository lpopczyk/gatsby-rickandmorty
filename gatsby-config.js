//lis la configuration depuis .env
require("dotenv").config()

module.exports = {
    siteMetadata: {
        title: `gatsby-project`,
    siteUrl: `https://www.yourdomain.tld`,
  },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-graphql",
            options: {
                // This type will contain remote schema Query type
                typeName: "RAM",
                // This is the field under which it's accessible
                fieldName: "ram",
                // URL to query from
                url: "https://rickandmortyapi.com/graphql",
            },
        },
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
              appId: process.env.GATSBY_ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_ADMIN_KEY,
              queries: require("./src/utils/algolia-config")
            },
          }
    ],
}
