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
            <Col lg="12">
              <h2>Sergeant at Arms Candidate Statement</h2>
              <p>Why Me, Why Now?</p>

              <div class='embed-container'>
                <iframe title="CNOA Video" src="https://www.youtube.com/embed/XbBQC07IjvM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  )
}

export default Intro
