import React from "react"
import Layout from "../components/Layout"

const CharacterTemplate = ({ pageContext }) => {
    const character = pageContext.character
    return (
        <Layout>
            <div>
                <img src={character.image} alt="" />
                <h1>{character.name}</h1>
                <div>
                    <div>Gender</div>
                    <div>{character.gender}</div>
                </div>
                <div>
                    <div>Species</div>
                    <div>{character.species}</div>
                </div>
                <div>
                    <div>Status</div>
                    <div>{character.status}</div>
                </div>
                <div>
                    <div>Origin</div>
                    <div>{character.origin.name}</div>
                </div>
                <div>
                    <div>location</div>
                    <div>{character.location.name}</div>
                </div>
            </div>
        </Layout>
    )
}

export default CharacterTemplate