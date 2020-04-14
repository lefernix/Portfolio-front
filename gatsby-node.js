const path = require(`path`)
// Log out information after a build is done

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postProjectPage = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    query {
      allSamplePages {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query.');
        return;
      }
      
  const postProjectPage = result.data.postProjectPage.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: postProjectPage,
      context: {
        title: edge.node.title,
      },
    })
  })
}