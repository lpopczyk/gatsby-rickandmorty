//character card pageTemplate
import React from "react"
import { Link } from "gatsby"

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
        <Link to={`/character/${character.id}`}>
            <div>
                <div>
                    <img src={character.image} alt="" />
                </div>
                <div>
                    <div>{character.name}</div>
                    <div>Species : {character.species}</div>
                    <div>Origin : {character.origin.name}</div>
                    <div>Gender : {character.gender}</div>
                </div>
            </div>
        </Link>
    )
}

export default Characters