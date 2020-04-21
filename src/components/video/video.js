import React from "react"
import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"

import "./video.scss"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function Intro({ title, text, imgAlt, btnText }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <section id="video">
        <Container>
          <Row>
          <Col lg="6">
              <h5>Why Me, Why Now?</h5>
              <div className="rich-text">
                  <h2>Devin’s Story.</h2>
              </div>


              <p>After serving the public for 32 years as a Law Enforcement Officer, and instructing over 20 years for CNOA, I am ready to be Sergeant-at-Arms</p>
              <br />
              <p>Please share the link below:</p>
                <div className="share-link">https://youtu.be/XbBQC07IjvM</div>
              

            </Col>

          <Col lg="6">

              <div className="embed-container">
                <iframe title="CNOA Video" src="https://www.youtube.com/embed/XbBQC07IjvM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  )
}

export default Intro
