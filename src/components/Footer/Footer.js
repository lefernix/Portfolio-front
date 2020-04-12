import footerstyle from "./Footer.module.css"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import CV from '../../images/CV.pdf'

const Footer = () => (
  <div className={footerstyle.footer}>
    <div className={footerstyle.text}>Follow me</div>
    <div className={footerstyle.social__container}>
    <a
        className={footerstyle.social_link}
        href="https://www.linkedin.com/in/adrien-nombalier/"
        rel="noopener noreferrer"
        target="_blank"
    >
    <FontAwesomeIcon icon={faLinkedinIn} className={footerstyle.icons}/></a>
    <a
        className={footerstyle.social_link}
        href="https://www.facebook.com/adrien.nombalier.9/"
        rel="noopener noreferrer"
        target="_blank"
    >
    <FontAwesomeIcon icon={faFacebookF} className={footerstyle.icons}/></a>
    <a
        className={footerstyle.social_link}
        href={CV}
        rel="noopener noreferrer"
        download
    >
    <FontAwesomeIcon icon={faDownload} className={footerstyle.icons}/></a>
    </div>
  </div>
)

export default Footer

