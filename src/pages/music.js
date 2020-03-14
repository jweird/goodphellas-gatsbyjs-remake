import React from "react"
import { Link } from "gatsby"
import PageNav from "../components/navbar"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainImg from "../images/good_header.png"

const MusicPage = () => (
  <Layout>
    <SEO title="Music" />
    <h1>MUSIC</h1>
    <iframe
      width="500x"
      height="450px"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/194878206&color=%230b0d0b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ></iframe>
  </Layout>
)

export default MusicPage
