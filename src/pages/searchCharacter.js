import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {
    tilte,
    searchContainer,
    searchBar,
    card,
} from '../scss/searchCharacter.module.scss'

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
            <h1 classname={tilte}>Search a character</h1>
            <div className={searchContainer}>
                <input
                    className={searchBar}
                    type="text"
                    placeholder="Search"
                    onChange={handleInputChange}
                />
            </div>
           
            <div>
            {characters.map(({id, image, name, gender, species}) => {
               return <span key={id}>
                    <div className={card}>
                        <img src={image} alt={name}></img>
                        <div>{name}</div>
                        <div>Gender : {gender}</div>
                        <div>Species : {species}</div>
                        <div>Origin : {name}</div>
                    </div>
                </span>   
            })}
            </div>   
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
              species
            }
          }
        }
      }
`