import React from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import PNavStyles from "../components/navbar.module.css"
import Logo from "../images/Goodphellas_Logo.png"

const PageNav = () => (
  <>
    <Navbar
      variant="none"
      className={PNavStyles.navbar}
      bg="transparent"
      expand="lg"
    >
      <Navbar.Brand href="/">
        <img
          className={PNavStyles.logo}
          src={Logo}
          width="110px"
          height="110px"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/music">ABOUT</Nav.Link>
          <Nav.Link href="/music">MUSIC</Nav.Link>
          <Nav.Link href="/marketing">MARKETING</Nav.Link>
          <Nav.Link
            href="https://www.etsy.com/shop/thegoodphellas"
            target="_blank"
          >
            SHOP
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default PageNav
