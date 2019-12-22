import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const PostsWrapper = styled.div`
  border-right: 1px solid gray;
  display: flex;
  flex: 0 0 25%;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  max-height: 100vh;
  overflow-y: auto;
  padding: 0;
`

const PostWrapper = styled(Link)`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  padding: ${props => props.theme.wrapper.paddingY} ${props => props.theme.wrapper.paddingX};
  border-bottom: 1px solid gray;
`

const PostsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <PostsWrapper>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <PostWrapper key={index} to={node.frontmatter.path}>
          <h5>{node.frontmatter.date}</h5>
          <h2>{node.frontmatter.title}</h2>
        </PostWrapper>
      ))}
    </PostsWrapper>
  )
}

export default PostsList
