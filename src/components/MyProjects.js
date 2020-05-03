import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Images from '../images'
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo } from "@fortawesome/free-solid-svg-icons"

const MyProject = () => {
  // const data = Images()
  const [currentId, setCurrentId] = useState(null)
  const projects = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: {fields: frontmatter___title}) {
          edges {
            node {
              frontmatter {
                id
                title
                description
                mockup
                toolsFront
                toolsBack
                webservice
                url_github
              }
            }
          }
        }
        allImageSharp(sort: {fields: fluid___originalName}) {
          nodes {
            fluid(pngQuality: 10, maxWidth: 800) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    `
  )

  return (
    <section>
      <h1 id="projects">Mes projets</h1>
      {projects.allMarkdownRemark.edges.map((project, index) => (
      <div
        className="project"
        key={index}
        data-aos={project.node.frontmatter.id % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-duration="800"
      >
        <>
           <div
              className={
                currentId === project.node.frontmatter.id ? "wrapper_open" : "wrapper_closed"
              }
            >
                {<p>Outils front : {project.node.frontmatter.toolsFront}</p>}
                {<p>Outils Back : {project.node.frontmatter.toolsBack}</p>}
                {<p>Archirecture : {project.node.frontmatter.webservice}</p>}
                {project.node.frontmatter?.url_github && (
                  <p>
                    Url/Repository :{" "}
                    <a
                      href={project.node.frontmatter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.node.frontmatter.url}
                    </a>
                  </p>
                )}
            </div> 
           <div className="buttons">
              {currentId === project.node.frontmatter.id ? (
                <button
                  className="more_button_moins"
                  onClick={() => setCurrentId(false)}
                >
                  <FontAwesomeIcon icon={faInfo} />
                </button>
              ) : (
                <button
                  className="more_button_plus"
                  onClick={() => setCurrentId(project.node.frontmatter.id)}
                >
                  <FontAwesomeIcon icon={faInfo} />
                </button>
              )}
            </div> 
          <div className="image-container">
            <div className="gatsby-image-wrapper">
              <Img
                  fluid={
                    projects.allImageSharp.nodes[index].fluid
                  }
                  alt={project.mockup}
                />
            </div>
          </div>
          <div className="contents">
            <p className="title">{project.node.frontmatter.title}</p>
            <p className="description">{project.node.frontmatter.description}</p>
          </div>
        </>
      </div>
      ))}
    </section>
  )
}

export default MyProject
