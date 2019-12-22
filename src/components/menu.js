import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: darkgray;
  color: white;
`

const MainMenu = () => {
  return (
    <MenuWrapper>
      <Link to="/">
        Home
      </Link>
    </MenuWrapper>
  )
}

export default MainMenu
