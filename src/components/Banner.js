import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      homeimg: file(relativePath: { eq: "homeimg.png" }) {
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
        <div className="main-text">NOMBALIER Adrien</div>
        <div className="second-text">Developer Web Junior</div>
        <div className="main-img"><Img fluid={data.homeimg.childImageSharp.fluid} /></div>
      </div>
    </div>
  )
}

export default Banner
