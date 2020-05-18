import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allRestApiApiV1UsersLefernix {
        edges {
          node {
            ranks {
              languages {
                javascript {
                  score
                  name
                }
              }
            }
            username
            honor
          }
        }
      }
      allImageSharp(
        filter: { fluid: { originalName: { eq: "zcodewars.png" } } }
      ) {
        edges {
          node {
            id
            fluid(pngQuality: 10) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <section>
      <h1 id="about">A propos</h1>
      <div className="presentation">
        <p>
          Jeune développeur web fullstack de 21 ans passionné par l'informatique
          et la création de contenu. En recherche d'opportunités afin de mettre
          en application mes compétences en développement ainsi que mes
          connaissances, ma motivation et mon dynamisme au sein de votre
          entreprise.
        </p>
        <div className="codewars">
          <Img fluid={data.allImageSharp.edges['0'].node.fluid} />
          {data.allRestApiApiV1UsersLefernix.edges.map((e, index) => (
            <div className="metrics" key={index}>
              <p>Username : {e.node.username}</p>
              <p>Honor : {e.node.honor}</p>
              <p>JavaScript : {e.node.ranks.languages.javascript.score} pts</p>
              <p>Rank : {e.node.ranks.languages.javascript.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
