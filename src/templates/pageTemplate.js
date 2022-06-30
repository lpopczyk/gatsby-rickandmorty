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
import {
    containerpagination,
    pagination__pgnumber,
} from '../scss/pageTemplate.module.scss'

const CharacterIndex = ({ data }) => {
    //total characters
    const [allcharacters] = useState(
        data.ram.characters.results
    )
    //total page
    const [totalpage] = useState(
        data.ram.characters.info.pages
    )
    //texte recherché
    const [searchText] = useState('')

    const [state, setState] = useState({
        filteredData: [],
        query: [searchText],
    })
    
    //filtre les données
    const handleInputChange = event => {
        //valeur de l'élément ayant déclenché la fonction
        const query = event.target.value
        const characters = data.ram.characters.results || []
        //filtre les données
        const filteredData = characters.filter(data => {
            const { name } = data
            return (
                name.toLowerCase().includes(query.toLowerCase())
            )
        })
        //met à jour l'état avec la nouvelle liste de personnage filtrée
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
            {characters.map(({id, name, image, gender, species}) => {
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
            <div className={containerpagination}>
                        {[...Array(totalpage)].map((_, pageNo) => (
                            <Link
                                className={pagination__pgnumber}  
                                to={`/page/${pageNo + 1}`}
                                key={pageNo}  
                            >
                                <div>
                                    {pageNo + 1}
                                </div>
                            </Link>
                        ))}
                    </div>      
        </Layout>
    )
}

export default CharacterIndex

export const query = graphql`
  query ($page: Int!) {
    ram {
      characters(page: $page) {
        info {
          pages
        }
        results {
          id
          name
          gender
          image
          species
          status  
        }
      }
    }
  }
`