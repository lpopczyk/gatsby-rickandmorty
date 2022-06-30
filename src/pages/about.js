import React from "react"
import Layout from "../components/Layout"
import {
    tilte,
    text
  } from '../scss/about.module.scss'

const about = () => {
    return (
        <Layout>
            <h1 className={tilte}>About</h1>
            <p className={text}>gatsby_api est un site de test qui utilise l'API rickandmorty</p>
        </Layout>
    )
}

export default about