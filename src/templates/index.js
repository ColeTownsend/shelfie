import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import HomePageBody from '../components/HomePageBody';

const styles = `
  p {
    font-size: 18px
  }
`

const Index = ({ data }) => {
  const page = data.us.edges[0]

  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <Container>
        <HomePageBody img={page.node.hero} body={page.node.body} styles={styles} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    us: allContentfulPage(filter: {node_locale: {eq: "en-US"}, slug: {eq: "home"}}) {
      edges {
        node {
          id
          title
          hero {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          body {
            childMarkdownRemark {
              id
              html
            }
          }
        }
      }
    }
  }
`

export default Index
