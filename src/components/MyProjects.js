import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faClock } from '@fortawesome/free-solid-svg-icons'

const MyProject = () => {
  const [currentId, setCurrentId] = useState(null)
  const projects = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___title }) {
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
                visiter
              }
            }
          }
        }
        allImageSharp(sort: { fields: fluid___originalName }) {
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
          data-aos={
            project.node.frontmatter.id % 2 === 0 ? 'fade-right' : 'fade-left'
          }
          data-aos-duration="800"
        >
          <>
            <div
              className={
                currentId === project.node.frontmatter.id
                  ? 'wrapper_open'
                  : 'wrapper_closed'
              }
            >
              <div className="wrapper_info">
                {<p><span className="title-info">Outils front :</span> {project.node.frontmatter.toolsFront}</p>}
                {<p><span className="title-info">Outils back :</span> {project.node.frontmatter.toolsBack}</p>}
                {<p><span className="title-info">Webservice :</span> {project.node.frontmatter.webservice}</p>}
              </div>
              {project.node.frontmatter.visiter ? (
                <div className="wrapper_button-link">
                  <button className="button_link">
                    <a
                      href={project.node.frontmatter.visiter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                  Visiter
                    </a></button>
                </div>
              ) : (<div className="wrapper_button-inprogress">
                <button disable="true" className="button_inprogress">
              In progress <FontAwesomeIcon icon={faClock} />
                </button>
              </div>)}
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
                  fluid={projects.allImageSharp.nodes[index].fluid}
                  alt={project.mockup}
                />
              </div>
            </div>
            <div className="contents">
              <p className="title">{project.node.frontmatter.title}</p>
              <p className="description">
                {project.node.frontmatter.description}
              </p>
            </div>
          </>
        </div>
      ))}
    </section>
  )
}

export default MyProject
