import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Header = () => {

  const [handleMenu, setHandleMenu] = useState(false)
  return (
    <header>
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
