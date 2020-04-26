import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Images from '../images'
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo} from "@fortawesome/free-solid-svg-icons"

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
            toolsFront
            toolsBack
            architecture
            url
          }
        }
        allFile(filter: { extension: { eq: "png" } }) {
          edges {
            node {
              childImageSharp {
                fluid(pngQuality: 10, maxWidth: 800) {
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
        <div
          className="project"
          key={index}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-duration="800"
        >
          <>
            <div
              className={
                currentId === project.id ? "wrapper_open" : "wrapper_closed"
              }
            >
              <p>Outils front : {project?.toolsFront}</p>
              <p>Outils Back : {project?.toolsBack}</p>
              <p>Archirecture : {project?.architecture}</p>
              <p>Url/Repository : {project.url}</p>
            </div>
            <div className="buttons">
              {currentId === project.id ? (
                <button
                  className="more_button_moins"
                  onClick={() => setCurrentId(false)}
                >
                  <FontAwesomeIcon icon={faInfo} />
                </button>
              ) : (
                <button
                  className="more_button_plus"
                  onClick={() => setCurrentId(project.id)}
                >
                  <FontAwesomeIcon icon={faInfo} />
                </button>
              )}
            </div>
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
            <div className="contents">
              <p className="title">{project.title}</p>
              <p className="description">{project.description}</p>
            </div>
          </>
        </div>
      ))}
    </section>
  )
}

export default MyProject
