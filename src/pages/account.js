import React from "react"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import SEO from "../components/seo"
import Layout from "../components/layout"

const AccountPage = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <SEO title="Account" />
      <Layout>
        <p>Hello and welcome {user.nickname || "friend"}</p>
        <p>
          There is nothing to see here at the moment.
        </p>
      </Layout>
    </>
  )
}

export default AccountPage
