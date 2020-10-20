import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"

const PageSection = styled.div`
  margin: 4rem 0;
`

const PageSectionHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: normal;
  text-align: center;
`

const TalksPage = () => {
  return (
    <>
      <SEO title="Talks" />

      <PageSection>
        <PageSectionHeader>Upcoming Talks</PageSectionHeader>
        <p>No talks currently scheduled.</p>
      </PageSection>

      <PageSection>
        <PageSectionHeader>Past Talks</PageSectionHeader>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Event</th>
              <th>Date</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://www.vuemastery.com/conferences/vueconf-us-2020/the-state-of-css-in-vue/">
                  The State of CSS in Vue
                </a>
              </td>
              <td>
                <a href="https://vueconf.us/">VueConf US</a>
              </td>
              <td>March 3, 2020</td>
              <td>Austin, TX</td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/jamenamcinteer/Workshop-Intro-to-Responsive-Design-with-CSS-Grid-and-Flexbox">
                  Intro to Responsive Design with CSS Grid and Flexbox
                </a>
              </td>
              <td>
                <a href="https://www.eventbrite.com/e/5th-austin-diversity-hackathon-atxdivhack-tickets-62292670053#">
                  Austin Diversity Hackathon
                </a>
              </td>
              <td>September 21, 2019</td>
              <td>Austin, TX</td>
            </tr>
            <tr>
              <td>
                <a href="https://docs.google.com/presentation/d/1WycAwgJRewixuzRgcHTkEmmvfi9p0Cxu6FqCSQ9UsoY/edit?usp=sharing">
                  Front End Web Development
                </a>
              </td>
              <td>TEKsystems Lunch & Learn</td>
              <td>September 2016</td>
              <td>Albuquerque, NM</td>
            </tr>
          </tbody>
        </table>
      </PageSection>

      <PageSection>
        <p>
          If you are interested in booking me to speak at your conference or
          meetup, please <Link to="/contact">get in touch</Link>. Thank you!
        </p>
      </PageSection>
    </>
  )
}

export default TalksPage
