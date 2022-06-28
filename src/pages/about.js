import React from "react"
import Layout from "../components/Layout"
import {
    tilte
  } from '../scss/about.module.scss'

const about = () => {
    return (
        <Layout>
            <h1 className={tilte}>About Page</h1>
        </Layout>
    )
}

export default about