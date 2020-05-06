import React from "react"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/styles.scss"
import Banner from "../components/Banner"

import Animation from "../components/Animation"
import MyProject from "../components/MyProjects.js"
// import Form from "../components/Form"
import About from "../components/About"
import Layout from "../components/layout"


import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Nombalier Adrien | Fullstack developer"
      description="Développeur web junior à Tours (37)"
    />
    <Header />
    <Banner />
    <Animation />
    <MyProject />
    <About />
    <section>
      <h1 id="contact">Me contacter</h1>
        <form  
        className="form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="contact" value="contact" />
        <fieldset>
          <legend>Formulaire de contact</legend>
          <label className="label" htmlFor="firstname">
            <p className="label-text">Prénom</p>
            <input
              required
              className="input"
              id="firstname"
              name="firstname"
            />
          </label>
          <label className="label" htmlFor="lastname">
            <p className="label-text">Nom</p>
            <input
              required
              className="input"
              id="lastname"
              name="lastname"
            />
          </label>
          <div className="input">
            <label className="label" htmlFor="subject">
              <p className="label-text">Objet</p>
              <input
                required
                className="input"
                id="subject"
                name="subject"
              />
            </label>
          </div>
          <div className="input">
            <label className="label" htmlFor="email">
              <p className="label-text">Email</p>
              <input
                required
                className="input"
                id="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
            </label>
          </div>
          <div className="input">
            <label className="label" htmlFor="message">
              <p className="label-text">Message</p>
              <textarea
                required
                className="input"
                cols="30"
                rows="10"
                id="message"
                name="message"
              />
            </label>
          </div>
          <button className="submit_button" type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
            Envoyer
          </button>
        </fieldset>
      </form>
    </section>
    <Footer />
  </Layout>
)

export default IndexPage
