import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import cx from "classnames"

const Header = () => {
  const [handleMenu, setHandleMenu] = useState(false)

  const handling = () => {
    setHandleMenu(!handleMenu)
  }
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">logo</a>
        </div>
        <div className="menu">
          <div className={cx({ active: handleMenu }, "main-nav")}>
            <a href="#projects" className="nav-links" onClick={() =>handling()}>
              Projets
            </a>
            <a href="#about" className="nav-links" onClick={() =>handling()}>
              A propos
            </a>
            <a href="#contact" className="nav-links" onClick={() =>handling()}>
              Me contacter
            </a>
          </div>
          <div className="navbar-toggle">
            <button type="button" onClick={() => handling()}>
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
