import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const MyProject = () => {
  const { projects } = useStaticQuery(
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
      }
    `
  )

  return (
    <section>
      <h1 id="projects">Mes projets</h1>
      <div>{console.log(projects)}</div>
      {projects.projects.map((project, index) => (
        <div className="project">
          <div className="gatsby-image-wrapper">
            <img src={`http://127.0.0.1:5500/src/images/${project.mockup}`} alt="ok"></img>
          </div>
          <p className="title">{project.title}</p>
          <p className="description">{project.description}
          </p>
          <Link
      to={`/${projects.slug}`}></Link>
          <button className="more_button">Voir plus</button>
        </div>
      ))}
    </section>
  )
}

export default MyProject
