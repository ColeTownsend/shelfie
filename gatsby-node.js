const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
        const pages = result.data.allContentfulPage.edges
        pages.map(({ node }) => {
          createPage({
            path: node.slug === 'home' ? '/' : `${node.slug}/`,
            component: node.slug === 'home' ? path.resolve(`./src/templates/index.js`) : path.resolve(`./src/templates/page.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
  })

  return Promise.all([loadPages])
}
