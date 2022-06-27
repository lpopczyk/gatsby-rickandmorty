import Layout from "../components/Layout"
import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Characters from "../components/character"
import {
    containercharacter,
    tilte,
    containerpagination,
    pagination__selected,
    pagination__pgnumber,
} from '../scss/pageTemplate.module.scss'

const PageTemplate = ({ data, pageContext }) => {

    const [characters] = useState(
        data.ram.characters.results
    )
    const [totalpage] = useState(
        data.ram.characters.info.pages
    )

    const [searchText, setsearchText] = useState('')

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



    return (
        //print card character, create pagination
        <Layout>
            <div>
                <div className={containercharacter}> 
                    <h1 className={tilte}>Character List</h1>
                    <Characters characters={characters} />
                    <br></br><br></br><br></br>
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