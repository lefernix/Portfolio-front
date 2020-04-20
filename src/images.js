// import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'

// const Images = () => {

//     const data = useStaticQuery(graphql`
//     query {
//         allFile(filter: {extension: {eq: "png"}}) {
//           edges {
//             node {
//               childImageSharp {
//                 fluid {
//                   originalName
//                 }
//               }
//             }
//           }
//         }
//       }
      
//     `)
//   return (
//     <div>
//     {console.log({data})}
//       <div>{data.allFile.edges.filter(({node}) => 
//       (
//           <Img fluid={node.childImageSharp.fluid.originalName.mockup}/>
//       ))}</div>
//     </div>
//   )
// }

// export default Images