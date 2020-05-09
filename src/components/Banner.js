import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp(filter: {fluid: {originalName: {eq: "zhomeimg.png"}}}) {
        edges {
          node {
            id
            fluid(pngQuality: 10){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    
  `)
  return (
    <div className="Banner">
      <div className="row">
        <div className="main-text">NOMBALIER Adrien</div>
        <div className="second-text">Developpeur Web FullStack</div>
        <div className="main-img"><Img fluid={data.allImageSharp.edges["0"].node.fluid} /></div>
      </div>
    </div>
  )
}

export default Banner
