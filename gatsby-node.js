// const path = require('path');

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;
//   const result = await graphql(
//     `
//       {
//         allMongodbportfolioprojects {
//           edges {
//             node {
//               id
//               slug
//               title
//             }
//           }
//         }
//       }
//       `,
//   );

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild('Error while running GraphQL query.');
//     return;
//   }

//   const postProjectPage = path.resolve('src/templates/WorkPage.js');
//   result.data.allMongodbportfolioprojects.edges.forEach(({ node }) => {
//     createPage({
//       path: `projects/${node.slug}`,
//       component: postProjectPage,
//       context: {
//         slug: node.slug,
//       },
//     });
//   });
// };