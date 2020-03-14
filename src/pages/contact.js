import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImg from "../images/good_header.png"
import LayoutStyles from "../components/layout.module.css"
import { Form, Button, Container, Row, Col } from "react-bootstrap"

const ContactPage = () => (
  <Layout>
    <img src={MainImg} width="35%" style={{ paddingTop: "5vh" }}></img>
    <div className={LayoutStyles.formcont}>
      <Form name="contact" method="POST" data-netlify="true">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Artist Name</Form.Label>
          <Form.Control type="email" placeholder="Artist Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLink">
          <Form.Label>Private Soundcloud Link</Form.Label>
          <Form.Control type="email" placeholder="Private Soundcloud Link" />
        </Form.Group>
        <div className={LayoutStyles.buttcent}>
          <Button className={LayoutStyles.formbutt} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  </Layout>
)
export default ContactPage
