import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  background: 'transparent';
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  
  a {
    font-weight: 400;
    transition: all 0.2s;
    color: ${props => props.theme.colors.highlight};
    &:hover {
      color: ${props => props.theme.colors.base};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        Copyright 2018.  All Rights Reserved.
      </Item>
      <Item>
        <a
          href="mailto:hello@getshelfie.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
