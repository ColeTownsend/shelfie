import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import PageBody from '../components/PageBody';
import PageTitle from '../components/PageTitle';

const Index = ({ data }) => {
  const page = data.us.edges[0]

  console.log(data)

  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <Container>
        <PageTitle>{page.node.title}</PageTitle>
        <PageBody body={page.node.body} />
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
