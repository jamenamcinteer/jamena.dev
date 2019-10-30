import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin-bottom: 1rem;
  background-color: ${props => props.theme.colors.primaryLight};
  border: 2px solid ${props => props.theme.colors.primaryLight};

  &:focus {
    border: 2px solid ${props => props.theme.colors.focusBorder};
    outline: 0;
  }
`

const Textarea = styled.textarea`
  height: 10rem;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.colors.primaryLight};
  border: 2px solid ${props => props.theme.colors.primaryLight};

  &:focus {
    border: 2px solid ${props => props.theme.colors.focusBorder};
    outline: 0;
  }
`

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <PageSection>

        <PageSectionHeader>Get In Touch</PageSectionHeader>
        <Form method="post" action="https://formspree.io/jamena@webdevabq.com">
          <label htmlFor="name">Name</label>
          <Input id="name" type="name" name="_name" />

          <label htmlFor="email">Email</label>
          <Input id="email" type="email" name="_replyto" />

          <label htmlFor="subject">Subject</label>
          <Input id="subject" type="subject" name="_subject" />

          <label htmlFor="message">Message</label>
          <Textarea id="message" name="_message"></Textarea>

          <Button text="Send" />
        </Form>

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
    </Layout>
  )
}

export default ContactPage
