import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        ...siteMeta
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <h1>{data.site.siteMetadata.title}</h1>
    </>
  )
}

export default IndexPage
