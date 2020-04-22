import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Images from '../images'
import Img from "gatsby-image"

const MyProject = () => {
  // const data = Images()
  const [currentId, setCurrentId] = useState(null)
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
        allFile(filter: { extension: { eq: "png" } }) {
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
            <div
              className={
                currentId === project.id ? "wrapper_open" : "wrapper_closed"
              }
            >
              <p>{project.tools}</p>
            </div>
          </>
          {currentId === project.id ? (
            <button
              className="more_button_moins"
              onClick={() => setCurrentId(false)}
            ></button>
          ) : (
            <button
              className="more_button_plus"
              onClick={() => setCurrentId(project.id)}
            ></button>
          )}
        </div>
      ))}
    </section>
  )
}

export default MyProject
