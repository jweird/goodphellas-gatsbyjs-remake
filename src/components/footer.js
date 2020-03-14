import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import FooterStyles from "../components/footer.module.css"
import insta from "../images/instagram-white.png"
import soundcloud from "../images/soundcloud.png"
import twitter from "../images/twitter-white.png"

const Footer = () => (
  <>
    <Navbar bg="transparent" fixed="bottom" className="ml-auto">
      <Nav className="ml-auto">
        <img
          className={FooterStyles.icons}
          src={insta}
          width="25rem"
          height="25rem"
        ></img>
        <img
          className={FooterStyles.icons}
          src={soundcloud}
          width="25px"
          height="25px"
        ></img>
        <img
          className={FooterStyles.icons}
          src={twitter}
          width="25px"
          height="25px"
        ></img>
      </Nav>
    </Navbar>
  </>
)

export default Footer
