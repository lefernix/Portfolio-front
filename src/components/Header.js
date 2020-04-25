import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import cx from "classnames"

const Header = () => {
  const [handleMenu, setHandleMenu] = useState(false)
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">logo</a>
        </div>
        <div className="menu">
          <div className={cx({ active: handleMenu }, "main-nav")}>
            <a href="#projects" className="nav-links">
              Projets
            </a>
            <a href="#about" className="nav-links">
              A propos
            </a>
            <a href="#contact" className="nav-links">
              Me contacter
            </a>
          </div>
          <div className="navbar-toggle">
            <button type="button" onClick={() => setHandleMenu(!handleMenu)}>
              {!handleMenu ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faTimes} />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
