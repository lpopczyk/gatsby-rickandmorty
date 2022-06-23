import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import {
    container,
    imageid,
    charname,
    info,
    charninfotitre,
    charninfo,

} from './characterTemplate.module.css'

const CharacterTemplate = ({ pageContext }) => {
    const character = pageContext.character
    return (
        <Layout>
            <Link to="/page/1">Back</Link>
            <div className={container}>
                <img className={imageid} src={character.image} alt="" />
                <h1 className={charname}>{character.name}</h1>
                <div className={info}>
                    <div className={charninfotitre}>
                        Gender
                    </div>
                    <div className={charninfo}>
                        {character.gender}
                    </div>
                </div>
                <div className={info}>
                    <div className={charninfotitre}>
                        Species
                    </div>
                    <div className={charninfo}>
                        {character.species}
                    </div>
                </div>
                <div className={info}>
                    <div className={charninfotitre}>
                        Status
                    </div>
                    <div className={charninfo}>
                        {character.status}
                    </div>
                </div>
                <div className={info}>
                    <div className={charninfotitre}>
                        Origin
                    </div>
                    <div className={charninfo}>
                        {character.origin.name}
                    </div>
                </div>
                <div className={info}>
                    <div className={charninfotitre}>
                        location
                    </div>
                    <div className={charninfo}>
                        {character.location.name}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CharacterTemplate