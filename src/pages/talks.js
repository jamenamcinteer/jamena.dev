import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Twitter from "../images/twitter.svg"
import Github from "../images/github.svg"
import Linkedin from "../images/linkedin.svg"

const PageSection = styled.div`
  margin: 4rem 0;
`

const PageSectionHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: normal;
  text-align: center;
`

const Links = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: ${props => (props.socialmedia ? "center" : "left")};

  @media (min-width: 1024px) {
    padding-top: ${props => (props.socialmedia ? "2rem" : "1rem")};
    margin-left: ${props => (props.socialmedia ? "-0.625rem" : 0)};
  }
`

const SocialLinkContainer = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    display: inline;
    padding-right: 2rem;
  }
`

const SocialMediaLink = styled.a`
  align-items: center;
  display: inline-flex;
  padding: 0.625rem;
  color: ${props => props.theme.colors.primaryDark};

  span {
    /* color: ${props => props.theme.colors.primaryDark}; */
    margin-left: 0.625rem;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.primaryDark};
    color: #fff;

    svg path {
      fill: #fff;
    }
  }
`

const TalksPage = () => {
  return (
    <div>
      <SEO title="Talks" />

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
              <td><a href="https://github.com/jamenamcinteer/Workshop-Intro-to-Responsive-Design-with-CSS-Grid-and-Flexbox">Intro to Responsive Design with CSS Grid and Flexbox</a></td>
              <td><a href="https://www.eventbrite.com/e/5th-austin-diversity-hackathon-atxdivhack-tickets-62292670053#">Austin Diversity Hackathon</a></td>
              <td>September 21, 2019</td>
              <td>Austin, TX</td>
            </tr>
            <tr>
              <td><a href="https://docs.google.com/presentation/d/1WycAwgJRewixuzRgcHTkEmmvfi9p0Cxu6FqCSQ9UsoY/edit?usp=sharing">Front End Web Development</a></td>
              <td>TEKsystems Lunch & Learn</td>
              <td>September 2016</td>
              <td>Albuquerque, NM</td>
            </tr>
          </tbody>
        </table>
      </PageSection>

      <PageSection>
        <PageSectionHeader>Upcoming Talks</PageSectionHeader>
        <p>No talks currently scheduled.</p>
        <p>If you are interested in booking me to speak at your conference or meetup, please <Link to="/contact">get in touch</Link>. Thank you!</p>
      </PageSection>
      
      <Links socialmedia>
        <SocialLinkContainer>
          <SocialMediaLink href="https://twitter.com/JamenaMcinteer">
            <Twitter />
            <span>Twitter</span>
          </SocialMediaLink>
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialMediaLink href="https://github.com/jamenamcinteer">
            <Github />
            <span>GitHub</span>
          </SocialMediaLink>
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialMediaLink href="https://www.linkedin.com/in/jamena-mcinteer-5511aa45/">
            <Linkedin />
            <span>LinkedIn</span>
          </SocialMediaLink>
        </SocialLinkContainer>
      </Links>
    </div>
  )
}

export default TalksPage
