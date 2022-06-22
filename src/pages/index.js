import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Home = () => {
    return (
        <Layout>
            <div>
                <h1>Rick and Morty API</h1>
                <Link to="/page/1">
                    <div>Visit</div>
                </Link>
            </div>
        </Layout>
    )
}

export default Home