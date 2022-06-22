const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)
    const characterTemplate = path.resolve(`src/templates/characterTemplate.js`)

    const data = await graphql(`
    query MyQuery {
      ram {
        characters {
          info {
            pages
          }
          results {
            name
            gender
            id
            image
            location {
              name
            }
            origin {
              name
            }
            species
            status
          }
        }
      }
    }
  `)

    const totalPages = data.data.ram.characters.info.pages

    //pagination
    for (let page = 1; page <= totalPages; page++) {
        createPage({
            path: `/page/${page}`,
            component: pageTemplate,
            context: {
                page,
                totalPages,
            },
        })
        const characterdata = await graphql(`
      query MyQuery {
        ram {
          characters(page: ${page}) {
            results {
              name
              gender
              id
              image
              location {
                name
              }
              origin {
                name
              }
              species
              status
            }
          }
        }
      }
    `)

        //character card
        characterdata.data.ram.characters.results.map(character => {
            createPage({
                path: `/character/${character.id}`,
                component: characterTemplate,
                context: {
                    character,
                },
            })
        })
    }
}