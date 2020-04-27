import React from "react"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header"
import "../styles/styles.scss"
import Banner from "../components/Banner"

import Animation from "../components/Animation"
import MyProject from "../components/MyProjects.js"
import Form from "../components/Form"
import About from "../components/About"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Nombalier Adrien | Fullstack developer"
      description="Développeur web junior à Tours (37)"
    />
    <Header />
    <Animation />
    <Banner />
    <MyProject />
    <About />
    <Form />
    <Footer />
  </Layout>
)

export default IndexPage
