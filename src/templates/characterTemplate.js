import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import {
    btnback,
    container,
    imageid,
    charname,
    info,
    charninfotitre,
    charninfo,

} from '../scss/characterTemplate.module.scss'

const CharacterTemplate = ({ pageContext }) => {
    const character = pageContext.character
    return (
        <Layout>
            <Link 
                className={btnback}
                to="/page/1">Back
            </Link>
            <div className={container}>
                <img className={imageid} src={character.image} alt="" />
                <h1 className={charname}>{character.name}</h1>
                <table className={info}>
                    <tr>
                        <td className={charninfotitre}>
                            Gender
                        </td>
                        <td className={charninfo}>
                            {character.gender}
                        </td>
                    </tr>
                    <tr>
                        <td className={charninfotitre}>
                            Species
                        </td>
                        <td className={charninfo}>
                            {character.species}
                        </td>
                    </tr>
                    <tr>
                    <td className={charninfotitre}>
                        Status
                    </td>
                    <td className={charninfo}>
                        {character.status}
                    </td>
                    </tr>
                    <tr>
                        <td className={charninfotitre}>
                            Origin
                        </td>
                        <td className={charninfo}>
                            {character.origin.name}
                        </td>
                    </tr>
                    <tr>
                    <td className={charninfotitre}>
                        Location
                    </td>
                    <td className={charninfo}>
                        {character.location.name}
                    </td>
                    </tr>
                </table>
            </div>
        </Layout>
    )
}

export default CharacterTemplate