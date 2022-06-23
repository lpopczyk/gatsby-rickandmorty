import React, { useState, useEffect } from 'react';

const searchChar = ({ data }) => {

    const [characters] = useState(
        data.ram.characters.results
    )

    const query = graphql`
    $name: String!, $page: Int!) {
        characters(filter: { name: $name }, page: $page) {
          info {
            pages
            prev
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
    `
    return (
        <>
        </>
    )
}

export default searchChar


