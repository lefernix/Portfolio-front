import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faHome } from "@fortawesome/free-solid-svg-icons"
import cx from "classnames"

const Header = () => {
  const [handleMenu, setHandleMenu] = useState(false)

  const handling = () => {
    setHandleMenu(!handleMenu)
  }
  return (
    <nav id="navigation" className="NavBar">
      <h3 id="header">LOGO</h3>
      <button type="button" style={handleMenu ? {position: "fixed", right: 0, padding: "1rem"} : {}} className="menu_button" onClick={() => handling()}>
        {!handleMenu ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </button>
      <div
        className={cx(
          { "overlay": handleMenu, "overlay_close": !handleMenu },
          "list"
        )}
      >
        <ul className={cx({ "list__hidden": !handleMenu }, "list")}>
          <li className="item"><a href="#" className="link" onClick={() => handling()}><FontAwesomeIcon icon={faHome} /></a></li>
          <li className="item"><a href="#projects" className="link" onClick={() => handling()}>Projects</a></li>
          <li className="item"><a href="#about" className="link" onClick={() => handling()}>About</a></li>
          <li className="item"><a href="#contact" className="link" onClick={() => handling()}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
