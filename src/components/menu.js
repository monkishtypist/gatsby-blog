import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.wrapper.paddingY} ${props => props.theme.wrapper.paddingX};
  background-color: ${props => props.theme.colors.black};
  color: white;
`

const MainMenu = () => {
  return (
    <MenuWrapper>
      <Link to="/">
        Home
      </Link>
      <Link to="/blog">
        Blog
      </Link>
    </MenuWrapper>
  )
}

export default MainMenu
