//character card pageTemplate
import React from "react"
import {Link, graphql} from 'gatsby'
import {
    card,
    cardimage,
    charname,
    cardinfo,
    more,
    charninfotitre,
    charninfo,
} from '../scss/pageTemplate.module.scss'

//all character card
const Characters = ({ characters }) => {
    return (
        <>
            <div>
                {characters.length > 0 ? (
                    characters.map(character => (
                        <div key={character.id}>
                            <Profile character={character} />
                        </div>
                    ))
                ) : (
                    <h3>Character Not Found</h3>
                )}
            </div>
        </>
    )
}

//info
const Profile = ({ character }) => {
    return (
        <div className={card}>
            <div>
                <img className={cardimage} src={character.image} alt="" />
            </div>
            
            <h1 className={charname}>{character.name}</h1>
                <table className={cardinfo}>
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
                </table>
                <Link 
                className={more}
                to={`/character/${character.id}`}
            >→</Link>
        </div>
    )
}

export default Characters