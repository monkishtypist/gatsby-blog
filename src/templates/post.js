import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import PostsList from "../components/posts"

const PostWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
  padding: ${props => props.theme.wrapper.paddingY} ${props => props.theme.wrapper.paddingX};
`

const PostHeader = styled.div`
`

const PostBody = styled.div`
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <PostsList />
      <PostWrapper>
        <PostHeader>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </PostHeader>
        <hr />
        <PostBody>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </PostBody>
      </PostWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
