import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import {
    container,
    tilte,
    tilteSpan,
    btnindex,
    lienindex,
  } from '../scss/index.module.scss'

const Home = () => {
    return (
        <Layout>
            <div className={container}>
                <h1 className={tilte}>Rick and Morty API <span className={tilteSpan}>with Gatsby-JS</span></h1>
                <br></br><br></br>
                <div className={btnindex}>
                    <Link
                        className={lienindex} 
                        to="/page/1">
                            List
                    </Link>
                </div>
                <div className={btnindex}>
                <Link 
                    className={lienindex} 
                    to="/searchCharacter">
                        Search
                </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Home