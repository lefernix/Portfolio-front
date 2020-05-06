import React from "react"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Form = () => {
  return (
    <section>
      <h1 id="contact">Me contacter</h1>
      <form
        className="form"
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="#"
      >
        <fieldset>
          <legend>Formulaire de contact</legend>
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button className="submit_button" type="submit" onClick={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faPaperPlane} />
            Envoyer
          </button>
        </fieldset>
      </form>
    </section>
  )
}

export default Form
