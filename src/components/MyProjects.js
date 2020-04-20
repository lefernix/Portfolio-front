import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Images from '../images'
import Img from "gatsby-image"

const MyProject = () => {
  // const data = Images()
  const [more, setMore] = useState(false)
  const projects = useStaticQuery(
    graphql`
      {
        projects {
          projects {
            id
            slug
            title
            description
            mockup
            tools
          }
        }
        allFile {
          edges {
            node {
              childImageSharp {
                fluid(pngQuality: 10, maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
          totalCount
        }
      }
    `
  )

  return (
    <section>
      <h1 id="projects">Mes projets</h1>
      {console.log(projects)}
      {projects.projects.projects.map((project, index) => (
        <div className="project" key={index}>
          {!more ? (
            <>
              <div className="image-container">
                <div className="gatsby-image-wrapper">
                  <Img
                    fluid={
                      projects.allFile.edges[index].node.childImageSharp.fluid
                    }
                    alt={project.mockup}
                  />
                </div>
              </div>
              <p className="title">{project.title}</p>
              <p className="description">{project.description}</p>
            </>
          ) : (
            "SEE MORE"
          )}
          <button className="more_button" onClick={() => setMore(!more)}>
            Voir plus
          </button>
        </div>
      ))}
    </section>
  )
}

export default MyProject
