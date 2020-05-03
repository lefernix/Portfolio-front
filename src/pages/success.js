import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Success = ({ location }) => {
  return(
    <Layout location={location}>
      <SEO title="Success mail" />
      <h1>Your mail has been sended</h1>
      <p><Link to='/'>Go back home</Link></p>
    </Layout>
  )}

export default Success
