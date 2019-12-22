import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  border-right: 1px solid gray;
  height: 100vh;
  overflow-y: auto;
`

const PostWrapper = styled(Link)`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 1rem;
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
