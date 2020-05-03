import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFoundPage = ({ location }) => {
  return(
    <Layout location={location}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p><Link to='/'>Go back home</Link></p>
    </Layout>
  )}

export default NotFoundPage
