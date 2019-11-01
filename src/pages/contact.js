import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Button from "../components/button"

const PageSection = styled.div`
  margin: 4rem 0;
`

const PageSectionHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: normal;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin-bottom: 1rem;
  background-color: ${props => props.theme.colors.primaryLight};
  border: 2px solid ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.secondaryDark};

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
  color: ${props => props.theme.colors.secondaryDark};

  &:focus {
    border: 2px solid ${props => props.theme.colors.focusBorder};
    outline: 0;
  }
`

const ContactPage = () => {
  return (
    <>
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
    </>
  )
}

export default ContactPage
