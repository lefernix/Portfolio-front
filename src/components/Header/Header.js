import { Link } from "gatsby"
import React, { useState } from "react"
import headstyle from "./Header.module.css"
import logoan from "../../images/logoan.png"
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
              activeClassName={headstyle.linkActive}
              className={headstyle.link}
            >
              logo
            </a>
          </div>
          <nav className="navigation">
            <button type="button" onClick={() => setHandleMenu(!handleMenu)}>
              {!handleMenu ? (
                <FontAwesomeIcon icon={faBars} className={headstyle.icons} />
              ) : (
                <FontAwesomeIcon icon={faTimes} className={headstyle.icons} />
              )}
            </button>
          </nav>
        </div>
        {handleMenu && (
          <div className="menu">
            <a
              href="#project"
              activeClassName={headstyle.linkActive}
              className={headstyle.link}
            >
              Projets
            </a>
            <a
              href="#about"
              activeClassName={headstyle.linkActive}
              className={headstyle.link}
            >
              A propos
            </a>
            <a
              href="#contact"
              activeClassName={headstyle.linkActive}
              className={headstyle.link}
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
