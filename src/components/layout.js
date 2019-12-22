import React from "react"
import styled from "styled-components"
import PostsList from "../components/posts"
import MainMenu from "../components/menu"

const LayoutWrapper = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-direction: row;
  height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <MainMenu />
      <PostsList />
      {children}
    </LayoutWrapper>
  )
}

export default Layout
