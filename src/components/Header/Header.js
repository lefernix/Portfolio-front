import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import headstyle from "./Header.module.css"
import logoan from "../../images/logoan.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle }) => {
  const [handleMenu, setHandleMenu] = useState(false)
  return (
    <header className={headstyle.Header}>
      <div className={headstyle.heading}>
        <button
          type="button"
          className={headstyle.menu}
          onClick={() => setHandleMenu(!handleMenu)}
        >
          {!handleMenu ? (
            <FontAwesomeIcon icon={faBars} className={headstyle.icons}/>
          ) : (
            <FontAwesomeIcon icon={faTimes} className={headstyle.icons}/>
          )}
        </button>
        <Link to="/">
          <img src={logoan} className={headstyle.logo} title={siteTitle} />
        </Link>
        <nav className={headstyle.nav}>
          {handleMenu && (
            <ul className={headstyle.list}>
              <li className={headstyle.item}>
                <a
                  href="#projets"
                  activeClassName={headstyle.linkActive}
                  className={headstyle.link}
                >
                  Projets
                </a>
              </li>
              <li className={headstyle.item}>
                <a
                  href="#apropos"
                  activeClassName={headstyle.linkActive}
                  className={headstyle.link}
                >
                  A propos
                </a>
              </li>
              <li className={headstyle.item}>
                <a
                  href="#contact"
                  activeClassName={headstyle.linkActive}
                  className={headstyle.link}
                >
                  Me contacter
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
      <div className={headstyle.name}>NOMBALIER Adrien - Developpeur Web</div>
    </header>
  )
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
