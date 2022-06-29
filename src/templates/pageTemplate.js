import Layout from "../components/Layout"
import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Characters from "../components/character"
import {
    containercharacter,
    tilte,
    containerpagination,
    pagination__pgnumber,
} from '../scss/pageTemplate.module.scss'

const PageTemplate = ({ data }) => {

    //total characters
    const [characters] = useState(
        data.ram.characters.results
    )
    //total pages
    const [totalpage] = useState(
        data.ram.characters.info.pages
    )

    return (
        //print card character, create pagination
        <Layout>
            <div>
                <div className={containercharacter}> 
                    <h1 className={tilte}>Character List</h1>
                    <Characters characters={characters} />
                    <br></br><br></br><br></br>
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
