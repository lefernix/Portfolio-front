import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolioBg: file(relativePath: { eq: "portfolioBg.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="Banner">
      <div className="row">
        <div className="main-text">
          <p>NOMBALIER Adrien</p>
          <p>Developer Web Junior</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
