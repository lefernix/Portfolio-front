import React from "react"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer"
import About from "../pages/about"
import Header from "../components/Header/Header"
import "../styles/styles.scss"

const IndexPage = () => (
  <div>
    <Header/>
    <SEO title="Nombalier Adrien | Fullstack developer" description="Développeur web junior à Tours (37)" />
    <h1 id="projets">Mes projets</h1>
    <About/>
    <h1 id="contact">Me contacter</h1>
    <p>"Formulaire ici"</p>
    <Footer/>
  </div>
)

export default IndexPage
