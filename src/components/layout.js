import React from "react"
import { Link } from 'gatsby'
import {
  } from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
        <nav className="navbar">
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/searchCharacter">about</Link>
        </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout