import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import postProjectPage from './postProjectPage'

const MyProject = () => {
    const data = useStaticQuery(graphql`
    query {
        rosebud_template: file(relativePath: { eq: "rosebud_template.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <section>
            <h1 id="projects">Mes projets</h1>
            <div className='project'>
                <Img fluid={data.rosebud_template.childImageSharp.fluid} />
                <p className='title'>Rosebud</p>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida lectus a sem molestie, nec tincidunt dolor tempor. Etiam ut mollis lorem. Vestibulum efficitur magna quis tortor finibus, non efficitur odio semper. Nullam molestie purus et velit vestibulum, sit amet dapibus sem hendrerit. Suspendisse consectetur leo ac ex rhoncus aliquam. </p>
                <button className='more_button'>Voir plus</button>
                <postProjectPage />
            </div>
        </section>

    )
}

export default MyProject