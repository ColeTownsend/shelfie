import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Header = styled.header`
  background: ${props => props.theme.colors.transparent};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;

    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.highlight};
    font-weight: 400;
    transition: all 0.2s;
    border-bottom: 1px solid transparent;
    &:hover {
      color: ${props => props.theme.colors.base};
    }
  }
`

const activeLinkStyle = {
  color: `${props => props.theme.colors.highlight}`,
  borderBottom: `1px solid ${props => props.theme.colors.highlight}`
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Shelfie
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
