import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner-hero/inner-hero"
import CTA from "../components/cta/cta"

const BookConsult = () => (
  <Layout>
    <SEO title="Get In Touch" />
    <Nav />
    <InnerHero title="Get In Touch" />
    <CTA />
  </Layout>
)

export default BookConsult
