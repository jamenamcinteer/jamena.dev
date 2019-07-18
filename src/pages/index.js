import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CareText from "../components/careText"
import Image from "../components/image"

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
      <div>
        <Image />
      </div>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
