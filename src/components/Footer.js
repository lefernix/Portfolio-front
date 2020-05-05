import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import CV from '../images/CV.pdf'

const Footer = () => (
  <div id="links">
    <div className="text">Social Links</div>
    <div className="social__container">
    <a
        className="social_link"
        href="https://www.linkedin.com/in/adrien-nombalier/"
        rel="noopener noreferrer"
        target="_blank"
    >
    <FontAwesomeIcon icon={faLinkedinIn} className="icons"/></a>
    <a
        className="social_link"
        href="https://github.com/lefernix"
        rel="noopener noreferrer"
        target="_blank"
    >
    <FontAwesomeIcon icon={faGithub} className="icons"/></a>
    <a
        className="social_link"
        href={CV}
        rel="noopener noreferrer"
        download
    >
    <FontAwesomeIcon icon={faDownload} className="icons"/></a>
    </div>
  </div>
)

export default Footer

