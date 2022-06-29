const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)
    const characterTemplate = path.resolve(`src/templates/characterTemplate.js`)

    //données nécessaires à la création des pages de la liste
    const data = await graphql(`
    query MyQuery {
      ram {
        characters {
          info {
            pages
          }
          results {
            name
            id
          }
        }
      }
    }
  `)

    const totalPages = data.data.ram.characters.info.pages

    //création des pages de la liste des characters 
    for (let page = 1; page <= totalPages; page++) {
        createPage({
            path: `/page/${page}`,
            component: pageTemplate,
            context: {
                page,
                totalPages,
            },
        })
        //données des characters pour remplir les cartes individuelles
        //en fonction de la page
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

        //création des cartes individuelles
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
