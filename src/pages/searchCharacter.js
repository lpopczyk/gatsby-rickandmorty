import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import {
    tiltepage,
    searchContainer,
    searchBar,
    resultcontainer,
    card,
    cardimage,
    charname,
    cardinfo,
    more,
    charninfotitre,
    charninfo,
} from '../scss/searchCharacter.module.scss'

const CharacterIndex = ({ data }) => {
    
    const [allcharacters] = useState(
        data.ram.characters.results
    )

    const [searchText] = useState('')

    const [state, setState] = useState({
        filteredData: [],
        query: [searchText],
    })

    const handleInputChange = event => {
        const query = event.target.value

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
    const hasSearchResults = filteredData && query !== [searchText]
    const characters = hasSearchResults ? filteredData : [allcharacters]

    return (
        <Layout>
            <div className={resultcontainer}>
                <h1 className={tiltepage}>Search a character</h1>
                <div className={searchContainer}>
                    <input
                        className={searchBar}
                        type="text"
                        placeholder="Search"
                        onChange={handleInputChange}
                    />
                    </div>
            </div>
            <div className={resultcontainer}>
            {characters.map(({id, image, name, gender, species}) => {
               return <span key={id}>
                    <div className={card}>
                        <div>
                            <img className={cardimage} src={image} alt="" />
                        </div>
                        <h1 className={charname}>{name}</h1>
                        <table className={cardinfo}>
                            <tr>
                                <td className={charninfotitre}>
                                    Gender
                                </td>
                                <td className={charninfo}>
                                    {gender}
                                </td>
                            </tr>
                            <tr>
                                <td className={charninfotitre}>
                                    Species
                                </td>
                                <td className={charninfo}>
                                    {species}
                                </td>
                            </tr>
                        </table>
                        <Link 
                        className={more}
                        to={`/character/${id}`}
                    >→</Link>
                    </div>
                </span>   
            })}
            </div>        
        </Layout>
    )
}

export default CharacterIndex

export const query = graphql`
query{
    ram{
      characters(page: 10) {
        results {
          image
          name
          id
          gender
          species
          status
          location {
            name
          }
        }
        info {
            pages
          }
      }
    }
  }
`