import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import {  graphql, useStaticQuery } from "gatsby"

const Header = () => {

  const data = useStaticQuery(graphql`
  {
    projects {
      projects {
        description
        id
        mockup
        slug
        title
        tools
      }
    }
  }
`)

  const [handleMenu, setHandleMenu] = useState(false)
  return (
    <header>
      {console.log(data)}
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <a
              href="/"
            >
              logo
            </a>
            {/* <div>{data.projects.title}</div> */}
          </div>
          <nav className="navigation">
            <button type="button" onClick={() => setHandleMenu(!handleMenu)}>
              {!handleMenu ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faTimes} />
              )}
            </button>
          </nav>
        </div>
        {handleMenu && (
          <div className="menu">
            <a
              href="#projects"
            >
              Projets
            </a>
            <a
              href="#about"
            >
              A propos
            </a>
            <a
              href="#contact"
            >
              Me contacter
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
