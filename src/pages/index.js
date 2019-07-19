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

const Splash = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const SplashLeft = styled.div``

const SplashRight = styled.div``

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

  @media (min-width: 1024px) {
    padding-top: ${props => (props.socialmedia ? "2rem" : "1rem")};
    margin-left: ${props => (props.socialmedia ? "-0.625rem" : 0)};
  }
`
const LinkContainer = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    display: inline;
    padding-right: 2rem;
    text-align: left;
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

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Splash>
        <SplashLeft>
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
          <SplashText style={{ minHeight: "5rem" }}>
            I care deeply about <CareText />.
          </SplashText>
        </SplashLeft>
        <SplashRight>
          <div style={{ maxWidth: "460px", margin: "0 auto" }}>
            <Image />
          </div>
        </SplashRight>
      </Splash>
      <Links>
        <LinkContainer>
          <ButtonLink
            to="https://lipstickwineandheels.com"
            text="Read My Blog"
          />
        </LinkContainer>
      </Links>
      <Links socialmedia>
        <LinkContainer>
          <SocialMediaLink href="https://twitter.com/JamenaMcinteer">
            <Twitter />
            <span>Twitter</span>
          </SocialMediaLink>
        </LinkContainer>
        <LinkContainer>
          <SocialMediaLink href="https://github.com/ndjamenamarmon">
            <Github />
            <span>GitHub</span>
          </SocialMediaLink>
        </LinkContainer>
        <LinkContainer>
          <SocialMediaLink href="https://www.linkedin.com/in/jamena-mcinteer-5511aa45/">
            <Linkedin />
            <span>LinkedIn</span>
          </SocialMediaLink>
        </LinkContainer>
      </Links>
    </Layout>
  )
}

export default IndexPage
