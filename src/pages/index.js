import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/button.scss"
import "../components/breakpoints.scss"
import "../components/general.scss"
import "../components/typography.scss"
import "../components/variables.scss"

import Hero from "../components/hero/hero"
import Nav from "../components/nav/nav"
import Intro from "../components/intro/intro"
import About from "../components/about/about"
import Process from "../components/process/process"
import Video from "../components/video/video"
import Testimonial from "../components/testimonial/testimonial"
import BGImage from "../components/bg-image/bg-image"
import CTA from "../components/cta/cta"


const IndexPage = () => (
  <Layout>
    <SEO title="Devin Chase for CNOA Sergeant-at-Arms" />
    <Nav />
    <Hero
      title="California Narcotic Officers' Association"
      subTitle="Devin Chase for CNOA Sergeant-at-Arms"
      btnText="Get In Touch"
    />
    <Intro
      title="Devin Chase for CNOA Sergeant-at-Arms"
      text="Devin is a <strong>lifetime member</strong> of CNOA and has been teaching for the Association and volunteering in various capacities since the 1990's, including several turns on the CNOA Executive Board."
      imgAlt="Devin Chase for CNOA Sergeant-at-Arms"
      btnText="Get In Touch"
    />
    <About
      title="A lifetime in leadership"
      subTitle="a proven track record"
      imgAlt="Devin Chase for CNOA Sergeant-at-Arms"
      btnText="Get in Touch"
      textOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus."
      textTwo="Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Tellus orci ac auctor augue mauris augue neque gravida. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Leo vel fringilla est ullamcorper eget nulla facilisi. Sed blandit libero volutpat sed cras ornare. "
      textThree="Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Cras adipiscing enim eu turpis egestas pretium aenean. Gravida dictum fusce ut placerat orci nulla pellentesque. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Libero id faucibus nisl tincidunt eget nullam non nisi. Pretium lectus quam id leo in."
    />
    <Process
      mainTitle="My Experience"
      mainSubTitle="What I can bring to CNOA"
      titleOne="Consultation"
      titleTwo="Plan"
      titleThree="Ordering Process"
      titleFour="Design &amp; Create"
      textOne="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
      textTwo=" Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
      textThree=" Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
      textFour=" Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    />
    <Video />
    <Testimonial
      title="My Promise"
      text="I believe that my background and experience make me the best candidate to be your next Sergeant-at-Arms.  I know that my teaching and leadership expertise will further benefit CNOA  in this role and I will work to bring the most current and relevant training, at an affordable cost.  I will work dilligently to improve what is already an oustanding organization."
      author="Devin Chase"
      imgAlt="Devin Chase Sergeant at Arms"
    />
    <BGImage />
    <CTA />
  </Layout>
)

export default IndexPage
