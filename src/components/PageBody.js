import React from 'react'
import styled from 'react-emotion'
require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
  }

  h1 {
    font-size: 1.6em;
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
    padding: 0.5em;
    margin: 0;
    font-size: 18px;

    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      margin-bottom: 1em;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    font-size: 18px;
    
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }

  ${props => props.styles}
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
