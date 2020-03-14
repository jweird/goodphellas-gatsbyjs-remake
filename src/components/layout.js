/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import PageNav from "../components/navbar"
import Footer from "../components/footer"
import Header from "./header"
import LayoutStyles from "../components/layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <PageNav />
      <main>{children}</main>
      <Footer />
      {/* <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.gatsbyjs.org">JuxtaDev</a>
      </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
