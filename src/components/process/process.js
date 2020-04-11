import React from "react"
import { Container, Row, Col } from "reactstrap"

import "./process.scss"

function Process({
  mainTitle,
  mainSubTitle,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  textOne,
  textTwo,
  textThree,
  textFour,
}) {
  return (
    <section id="process">
      <Container>
        <Row>
          <Col lg="12">
            <h2>{mainTitle}</h2>
            <p className="pad-btm">{mainSubTitle}</p>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            {/* <h4>{titleOne}</h4> */}
            <ul>
              <li>Past Region III Chairman, Sergeant at Arms, Training Coordinator and Volunteer</li>
              <li>Annual CNOA Training Conference Instructor for Over 20 years</li>
              <li>29 Year Instructor and Developer of law-enforcement and Narcotics Topic Courses</li>
              <li>Over 32 years of Law Enforcement Experience as an Officer, Investigoator, Sergeant & Lieutenant</li>
            </ul>
          </Col>
          <Col lg="6">
            {/* <h4>{titleTwo}</h4> */}
            <ul>
              <li>Works with CA POST to Develop Current Law Enforcement Training Videos & Curriculum</li>
              <li>Current Orange County Sherrif's Department Reserve Serving as Chaplain</li>
              <li>One of the State-wide CNOA Drug Abuse Recognition Course Instructors</li>
              <li>One of the State-wide CNOA Basic Narcotic School Instructors</li>
              <li>Court Expert Witness</li>
            </ul>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <ul>
              <li>Past Region III Chairman, Sergeant at Arms, Training Coordinator and Volunteer</li>
              <li>Annual CNOA Training Conference Instructor for Over 20 years</li>
              <li>29 Year Instructor and Developer of law-enforcement and Narcotics Topic Courses</li>
              <li>Over 32 years of Law Enforcement Experience as an Officer, Investigoator, Sergeant & Lieutenant</li>
            </ul>
            <ul>
              <li>Works with CA POST to Develop Current Law Enforcement Training Videos & Curriculum</li>
              <li>Current Orange County Sherrif's Department Reserve Serving as Chaplain</li>
              <li>One of the State-wide CNOA Drug Abuse Recognition Course Instructors</li>
              <li>One of the State-wide CNOA Basic Narcotic School Instructors</li>
              <li>Court Expert Witness</li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </section>
  )
}

export default Process
