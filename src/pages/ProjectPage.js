import React from "react"
import Layout from "../components/layout"

const ProjectPage = ({ location }) => {
  const { state = {} } = location
  const { data } = state
  return (
    <Layout>
      <p>Project page</p>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <p>{data.tools}</p>
    </Layout>
  )
}

export default ProjectPage
