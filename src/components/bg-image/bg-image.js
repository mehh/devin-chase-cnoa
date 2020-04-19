import React from "react"
import { Container, Row } from "reactstrap"
import { motion } from "framer-motion"

import "./bg-image.scss"
import pdf from "../../images/DevinChase-CNOA-Flyer.pdf"


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function bgImage({ title, text, imgAlt, btnText }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <section className="bg-image">
        <Container>
          <Row>
                <div class="bg-right homepage-volunteer-container rounded-0-md rounded-lg row lazy">
                    <div class="col-lg-4 offset-lg-1 col-xs-12 offset-xs-0 col-md-6">
                        <h5>Volunteer</h5>
                        <div class="rich-text">
                            <h2>Get involved.</h2>
                        </div>
                        <div class="rich-text">
                            <p>To win this election, it’s going to take all of us volunteering our time and energy to elect Devin. Download my PDF to share my qualifications, or fill out my contact form to discover volunteer opportunities related to your interests and skills.</p>
                        </div>
                        <a href={pdf} class="btn btn-lg btn-block btn-danger">Download Flyer of Qualifications</a>
                        <a href="/get-in-touch/" class="btn btn-lg btn-block btn-primary">Email Me</a>
                    </div>
                </div>              
          </Row>
        </Container>
        </section>
        </motion.div>
    )
}

export default bgImage	