import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const MyProject = () => {
  const [more, setMore] = useState(false)
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
      {projects.projects.map((project, index) => (
        <div className="project" key={index}>
          {!more ? (
            <>
              <div className="gatsby-image-wrapper">
                <img
                  src={`http://127.0.0.1:5500/src/images/${project.mockup}`}
                  alt="ok"
                ></img>
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
          {console.log(more)}
        </div>
      ))}
    </section>
  )
}

export default MyProject
