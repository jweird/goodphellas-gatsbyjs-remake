import React from "react"
import { Link } from "gatsby"
import PageNav from "../components/navbar"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainImg from "../images/good_header.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={MainImg} width="45%" style={{ paddingTop: "15vh" }}></img>
  </Layout>
)

export default IndexPage
