import React from "react"
import { Link } from 'gatsby'
import {
    navbar,
    navbarelement,
} from '../scss/layout.scss'

const Layout = ({ children }) => {
    return (
        <>
        <nav className={navbar}>
            <Link 
                className={navbarelement}
                to="/">
                    Home
            </Link>
            <Link 
                className={navbarelement}
                to="/about">
                    About
            </Link>
            <Link 
            className={navbarelement}
            to="/page/1">
                Character list
            </Link>
            <Link 
            className={navbarelement}
            to="/searchCharacter">
                Search a character
            </Link>
        </nav>

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout