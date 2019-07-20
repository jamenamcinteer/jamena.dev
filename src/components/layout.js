/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { ThemeProvider, createGlobalStyle } from "styled-components"

// import Header from "./header"
import "./layout.css"

const GlobalStyles = createGlobalStyle`
  h1 {
    font-size: 1.75rem;
    font-weight: normal;
    line-height: 1.5;
  }
  a:focus, button:focus {
    outline: 2px solid ${props => props.theme.colors.focusBorder};
  }
`

const theme = {
  colors: {
    // primaryDark: "#B86B77",
    primaryDark: "#AF5A65",
    primaryMedium: "#DEBDC2",
    primaryLight: "#E9DCDE",
    secondaryDark: "#5A5052",
    secondaryMedium: "#BBBBBB",
    secondaryLight: "#DCDCDC",
    // focusBorder: "#7a2d39",
    focusBorder: "#91BA8D",
  },
}

const LayoutContainer = styled.main`
  margin: 0 auto;
  max-width: 960px;
  min-height: calc(100vh - 1.0875rem - 5rem + 1rem);
  padding: 5rem 1.0875rem;

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const Footer = styled.footer`
  background: ${props => props.theme.colors.primaryLight};
  padding: 1.0875rem;
  text-align: center;

  a:link,
  a:visited {
    color: ${props => props.theme.colors.secondaryDark};
  }
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <GlobalStyles />
        <LayoutContainer>{children}</LayoutContainer>
        <Footer>
          © {new Date().getFullYear()}. All Rights Reserved.
          <br />
          Made with ❤️, ☕, and <a href="https://www.gatsbyjs.org">Gatsby</a> in
          Austin, Texas.
        </Footer>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
