import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headstyle from '../styles/header.module.css'
import logoan from '../images/logoan.png'

const Header = ({ siteTitle }) => (
  <header className={headstyle.Header}>
    <Link to="/">
      <img src={logoan} className={headstyle.logo} title={siteTitle} />
    </Link>
    <nav className={headstyle.nav}>
      <ul className={headstyle.list}>
        <li className={headstyle.item}>
          <Link to="/" activeClassName={headstyle.linkActive} className={headstyle.link}>Projets</Link>
        </li>
        <li className={headstyle.item}>
          <Link to="/about" activeClassName={headstyle.linkActive} className={headstyle.link}>A propos</Link>
        </li>
        <li className={headstyle.item}>
          <Link to="/contact" activeClassName={headstyle.linkActive} className={headstyle.link}>Me contacter</Link>
        </li>
      </ul>
    </nav>
    <div className={headstyle.name}>NOMBALIER Adrien - Developpeur Web</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
