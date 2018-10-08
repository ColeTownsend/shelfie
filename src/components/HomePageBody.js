import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import Img from "gatsby-image"

const Container = styled.div`
  max-width: 480px;
  width: 100%;
  background: white;
  border-radius: 6px;
  padding: 1.5em;

  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 3em;
  }
`;



const Button = styled.div`
  background: ${props => props.theme.colors.highlight};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  width: 100%;
  text-align: center;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.base};
  }
`

const Page = styled.div`
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    color: ${props => props.theme.colors.title}
  }

  h1 {
    font-size: 1.6em;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 1.4em;
  }

  h3 {
    font-size: 1.2em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
    font-size: 18px;
    color: ${props => props.theme.colors.text}
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: none;
      line-height: 1.25;
      margin-bottom: 0.75em;
      font-size: 17px;
      color: ${props => props.theme.colors.text};
      &:last-child {
        margin: 0;
      }
    }
  }

  ${props => props.styles}
`

const HomePageBody = props => {
  return (
    <Container>
      <Img
        css={{ top: 0, left: 0, right: 0, bottom: 0 }}
        style={{ position: `absolute`, zIndex: -1 }}
        fluid={props.img.fluid}
      />
      <Page
        dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
      />
      <Link to="contact"><Button>Get started, free</Button></Link>
    </Container>
  )
}

export default HomePageBody
