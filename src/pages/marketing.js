import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LayoutStyles from "../components/layout.module.css"
import { Tab, Nav, Row, Col } from "react-bootstrap"

const MarketingPage = () => (
  <Layout>
    <SEO title="Marketing" />
    <div className={LayoutStyles.header}>
      <h2>The Goodphellas SoundCloud Promotion Tiers</h2>
      <p>
        All artists must submit music and be accepted into the artist chain.
        Email thegoodphellas@gmail.com if you would like to submit for the
        artist chain.
      </p>
    </div>
    <Tab.Container
      className={LayoutStyles.tabs}
      id="left-tabs-example"
      defaultActiveKey="first"
    >
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">VIP</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">TIER I</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">TIER II</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">TIER III</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className={LayoutStyles.MarketingPage}>
                <h2>VIP</h2>
                <p>$0/month - Any artist over 3,000 followers</p>
                <ul className={LayoutStyles.list}>
                  <li>Full chain reach (313k)</li>
                  <li>Likes on track</li>
                  <li>48 hour repost</li>
                  <li>Instagram story post</li>
                  <li>Release day repost scheduling</li>
                  <li>Up to one track per week</li>*extra options price varies*
                  <li>Open market SCPlanner</li>
                  <li>Facebook trading</li>
                </ul>
                *All accounts upgraded to VIP status once SC account reaches 3k
                followers*
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className={LayoutStyles.MarketingPage}>
                <h2>TIER I</h2>
                <p>FREE - up to 4 tracks per month</p>
                <ul className={LayoutStyles.list}>
                  <li>Promo chain plus artists under 2k</li>
                  <li>24 hour repost</li>
                  <li>Auto-scheduled reposts</li>
                  <li>Up to one track per week</li>
                  *extra options price varies*
                  <li>Open market SCPlanner</li>
                  <li>Facebook trading</li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <div className={LayoutStyles.MarketingPage}>
                <h2>TIER II</h2>
                <p>$5 per track or $10/month - up to 4 tracks per month</p>
                <ul className={LayoutStyles.list}>
                  <li>Full chain reach </li>
                  <li>24 hour repost</li>
                  <li>Auto-scheduled reposts</li>
                  <li>Up to one track per week</li>
                  *extra options price varies*
                  <li>Open market SCPlanner</li>
                  <li>Facebook trading</li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <div className={LayoutStyles.MarketingPage}>
                <h2>TIER III - VIP TREATMENT</h2>
                <p>$7 per track or $20/month - up to 4 tracks per month</p>
                <ul className={LayoutStyles.list}>
                  <li>Full chain reach </li>
                  <li>Likes on track</li>
                  <li>48 hour repost</li>
                  <li>Instagram story post</li>
                  <li>Release day repost scheduling</li>
                  <li>Up to one track per week</li>
                  *extra options price varies*
                  <li>Open market SCPlanner</li>
                  <li>Facebook trading</li>
                </ul>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Layout>
)

export default MarketingPage
