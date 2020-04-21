import React from "react"
import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import "./about.scss"
import aboutImg from "../../images/chase_collage.jpg"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function About({ title, subTitle, text, imgAlt, btnText, textOne, textTwo, textThree }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <section id="about">
        <Container>
          <Row>
            <Col lg="6">
              <img src={aboutImg} alt={imgAlt} />
            </Col>
            <Col lg={{ size: 5, offset: 1 }}>
              
              <h5>{subTitle}</h5>
              <div className="rich-text">
                  <h2>{title}</h2>
              </div>

                <p>Devin is a lifetime member of CNOA and has been teaching for the Association and volunteering in various capacities since the 1990's, including several turns on the CNOA Executive Board.  </p>

                <p>Devin is a past CNOA Region III Chairman, Sergeant-at-Arms, Training Coordinator and volunteer.</p>

                <p>In 2005 Devin was honored and humbled to receive both the Los Angeles County Narcotic Officer of the Year award & the prestigious CNOA Al Stewart Memorial Award.</p>

                <p>Since 1991 Devin has been developing and teaching law-enforcement and narcotic related topics.  In those 29 years Devin has been privileged to teach thousands of officers from throughout the United States, as well as officers from Europe, Canada, Mexico, Central America and South America.</p>
                
                <p>Devin's background and experience make him the best candidate to be your Association's next Sergeant-at-Arms.</p>


              <Link to="/get-in-touch">
                <button>{btnText}</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  )
}

export default About
