import Layout from "../components/Layout"
import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import {
    containercharacter,
    tilte,
    containerpagination,
    pagination__pgnumber,
} from '../scss/pageTemplate.module.scss'
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

const PageTemplate = ({ data, pageContext }) => {

    //pagination
    const [allcharacters, setAllcharacters] = useState(
        data.ram.characters.results
    )
    const [totalpage, setTotalpage] = useState(
        data.ram.characters.info.pages
    )

    const [searchText] = useState('')

    const [currentPage, setCurrentPage] = useState(pageContext.page)
    const [loading, setLoading] = useState(false)
    const [searchMode, setSearchMode] = useState(false)

    const updateCharacters = () => {
        setSearchMode(true)
        if (searchText === "") {
            return
        }
        setLoading(true)
    }

    useEffect(() => {
        updateCharacters()
    }, [currentPage])

    //search
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
        //print card character, create pagination
        <Layout>
            <div>
                <div className={containercharacter}> 
                    <h1 className={tilte}>Character List</h1>
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
                {loading ? (
                    ""
                ) : characters.length > 0 ? (
                    <div className={containerpagination}>
                        {[...Array(totalpage)].map((_, pageNo) => (
                            <Link
                                to={`/page/${pageNo + 1}`}
                                key={pageNo}
                                className={pagination__pgnumber}
                                onClick={e => {
                                    if (searchText !== "" && searchMode) {
                                        e.preventDefault()
                                        setCurrentPage(pageNo + 1)
                                    }
                                }}
                            >
                                <div>{pageNo + 1}</div>
                            </Link>
                        ))}
                    </div>

                ) : (
                    ""
                )}
            </div>
        </Layout>
    )
}

export default PageTemplate


export const query = graphql`
  query ($page: Int!) {
    ram {
      characters(page: $page) {
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
`