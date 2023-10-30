import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import "../styles/contact.css"

function contact() {
  return (
    <section className="contact">
      <div className="contact-header">
        <h3 id="co-title">Contact Me</h3>
        <h1 id="co-text">Reach out for a new project or to say hello</h1>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h3 id="form-title">Send me a message</h3>
          <form action="mailto:rish3ha@gmail.com" method="post" encType="text/plain">
            <fieldset>
              <div className="form-field">
                <input name="name" type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-field">
                <input name="email" type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-field">
                <input name="Subject" type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="form-field">
                <textarea name="message" id="message" placeholder="Your Message"></textarea>
              </div>
            </fieldset>
            <input id="form-btn" type="submit" value="Send" />
          </form>
        </div>

        <div className="contact-info">
          <h3>Email Me At</h3>
          <a href="mailto:rish3ha@gmail.com"><p>rish3ha@gmail.com</p></a>
          <h3>Find Me On</h3>
          <div className="contact-links">
            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://codepen.io"><FontAwesomeIcon icon={faCodepen} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact;
