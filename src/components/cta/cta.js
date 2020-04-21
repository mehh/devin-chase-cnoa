import React from "react"
import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"

import "./cta.scss"
import cnoaLogo from "../../images/cnoa_logo.jpeg"


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function CTA({ title, text }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <section id="cta">
        <Container>
          <Row>
            <Col lg="6">
              <h2>Have any questions for me?</h2>
              <p>
                Fill out the form and I'll get back to you as soon as I can!
              </p>

              <div className="logo">
                <img src={cnoaLogo} />
              </div>
            </Col>
            <Col lg="6">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div className="form-group">
                  <input
                    name="name"
                    type="name"
                    className="form-control"
                    id="Name"
                    aria-describedby="namehelp"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    id="Message"
                    rows="3"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  )
}

export default CTA
