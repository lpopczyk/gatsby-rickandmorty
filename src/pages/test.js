import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

const testPage = () => {
  // Build Time Data Fetching
  const ram = useStaticQuery(graphql`
    query {
      ram {
        characters{
          results{
            name
          }
        }
      }
    }
  `)
  // Client-side Runtime Data Fetching
  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://rickandmortyapi.com/graphql`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setStarsCount(resultData.stargazers_count)
      }) // set data for the number of stars
  }, [])
  return (
    <section>
      <p>
        Build Time Data: Gatsby repo{` `}
        {ram.chracters.results.name}
      </p>
    </section>
  )
}
export default testPage