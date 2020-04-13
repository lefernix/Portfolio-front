import React from "react"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Form = () => {
  return (
    <section>
      <h1 id="contact">Me contacter</h1>
      <form className="form" encType="multipart/form-data" autoComplete="off">
        <fieldset>
          <legend>Formulaire de contact</legend>
          <label className="label" htmlFor="firstname">
            <p className="label-text">Prénom</p>
            <input
              placeholder="…"
              required
              className="input"
              type="text"
              id="firstname"
              name="firstname"
            />
          </label>
          <label className="label" htmlFor="lastname">
            <p className="label-text">Nom</p>
            <input
              placeholder="…"
              required
              className="input"
              type="text"
              id="lastname"
              name="lastname"
            />
          </label>
          <div className="input">
            <label className="label" htmlFor="subject">
              <p className="label-text">Objet</p>
              <input
                placeholder="…"
                required
                className="input"
                type="text"
                id="subject"
                name="subject"
              />
            </label>
          </div>
          <div className="input">
            <label className="label" htmlFor="message">
              <p className="label-text">Message</p>
              <textarea
                placeholder="…"
                required
                className="input"
                cols="30"
                rows="10"
                id="message"
                name="message"
              />
            </label>
          </div>
          <div className="input">
            <label className="label" htmlFor="email">
              <p className="label-text">Email</p>
              <input
                placeholder="…"
                required
                className="input"
                type="text"
                id="email"
                name="email"
              />
            </label>
          </div>
          <div className="input">
            <button className="submit_button" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
              Envoyer
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Form
