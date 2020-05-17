import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHome } from '@fortawesome/free-solid-svg-icons'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

const Header = () => {
  const [handleMenu, setHandleMenu] = useState(false)

  const handling = () => {
    setHandleMenu(!handleMenu)
  }
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(filter: {fluid: {originalName: {eq: "zlogo.png"}}}) {
        edges {
          node {
            id
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    
  `)
  return (
    <nav id="navigation" className="NavBar">
      <div id="header"><Img fixed={data.allImageSharp.edges['0'].node.fixed} /></div>
      <button type="button" style={handleMenu ? { position: 'fixed', right: 0, padding: '1rem' } : {}} className="menu_button" onClick={() => handling()}>
        {!handleMenu ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </button>
      <div
        className={cx(
          { overlay: handleMenu, overlay_close: !handleMenu },
          'list'
        )}
      >
        <ul className={cx({ list__hidden: !handleMenu }, 'list')}>
          <li className="item"><a href="#" className="link" onClick={() => handling()}><FontAwesomeIcon icon={faHome} /></a></li>
          <li className="item"><a href="#projects" className="link" onClick={() => handling()}>Projects</a></li>
          <li className="item"><a href="#about" className="link" onClick={() => handling()}>About</a></li>
          <li className="item"><a href="#contact" className="link" onClick={() => handling()}>Contact</a></li>
          <li className="item"><a href="#links" className="link" onClick={() => handling()}>Infos</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
