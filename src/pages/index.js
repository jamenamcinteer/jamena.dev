import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CareText from "../components/careText"
import Image from "../components/image"
import ButtonLink from "../components/buttonA"

import Twitter from "../images/twitter.svg"
import Github from "../images/github.svg"
import Linkedin from "../images/linkedin.svg"

const StyledName = styled.span`
  color: ${props => props.theme.colors.primaryDark};
`

const SplashText = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;

  strong {
    background: ${props => props.theme.colors.primaryLight};
    font-weight: normal;
    display: inline-block;
    padding-left: 0.3125rem;
    padding-right: 0.3125rem;
  }
`

const Links = styled.div`
  padding-top: 1rem;
`
const LinkContainer = styled.div`
  text-align: center;
`

const SocialMediaLink = styled.a`
  align-items: center;
  display: inline-flex;
  padding: 0.625rem;

  span {
    color: ${props => props.theme.colors.primaryDark};
    margin-left: 0.625rem;
    text-decoration: underline;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        Hello, I'm <StyledName>Jamena McInteer</StyledName>.
      </h1>
      <SplashText>
        I’m a <strong>full stack developer</strong> and{" "}
        <strong>UI/UX designer</strong> from Austin, TX.
      </SplashText>
      <SplashText>
        I like to build <em>beautiful things</em> that{" "}
        <em>make a difference</em>.
      </SplashText>
      <SplashText>
        I care deeply about <CareText />.
      </SplashText>
      <div style={{ maxWidth: "460px", margin: "0 auto" }}>
        <Image />
      </div>
      <Links>
        <LinkContainer>
          <ButtonLink
            to="https://lipstickwineandheels.com"
            text="Read My Blog"
          />
        </LinkContainer>
      </Links>
      <Links>
        <LinkContainer>
          <SocialMediaLink>
            <Twitter href="https://twitter.com/JamenaMcinteer" />
            <span>Twitter</span>
          </SocialMediaLink>
        </LinkContainer>
        <LinkContainer>
          <SocialMediaLink>
            <Github href="https://github.com/ndjamenamarmon" />
            <span>GitHub</span>
          </SocialMediaLink>
        </LinkContainer>
        <LinkContainer>
          <SocialMediaLink>
            <Linkedin />
            <span>LinkedIn</span>
          </SocialMediaLink>
        </LinkContainer>
      </Links>
    </Layout>
  )
}

export default IndexPage
