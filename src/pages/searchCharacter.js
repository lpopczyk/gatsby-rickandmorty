import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"

const CharacterIndex = props => {
    const { data } = props
    const allCharacters = data.ram.characters.results

    const emptyQuery = ""

    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,
    })

    const handleInputChange = event => {
        const query = event.target.value
        const { data } = props

        const characters = data.ram.characters.results || []

        const filteredData = characters.filter(data => {
            const { name } = data
            return (
                name.toLowerCase().includes(query.toLowerCase())
            )
        })

        setState({
            query,
            filteredData,
        })
    }

    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const characters = hasSearchResults ? filteredData : allCharacters

    return (
        <Layout>
            <h1 style={{ textAlign: `center` }}>Writing</h1>

            <div className="searchBox">
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Search"
                    onChange={handleInputChange}
                />
            </div>
            {characters.map(({id, image, name}) => {
               return <span key={id}>
                    <div><img src={image} alt={name}></img></div>
                    <div>{name}</div>
                </span>
            })}
        </Layout>
    )
}

export default CharacterIndex

export const pageQuery = graphql`
  query {
        ram {
          characters {
            results {
              name
              gender
              id
              image
            }
          }
        }
      }
`