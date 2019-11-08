/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { Link } from "gatsby";
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Button from "./button"
import Twitter from "../components/svg/twitter"
import Github from "../components/svg/github"
import Linkedin from "../components/svg/linkedin"
// import Header from "./header"
import HeaderImageLight from "./images/HeaderImageLight"
import HeaderImageDark from "./images/HeaderImageDark"
import "./layout.css"
import "./wp-styles.css"
import lightTheme from "../themes/light"
import darkTheme from "../themes/dark"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.secondaryDark};
  }
  h1 {
    font-size: 1.75rem;
    font-weight: normal;
    line-height: 1.5;
  }
  a {
    color: ${props => props.theme.colors.primaryDark};

    &:hover {
      color: ${props => props.theme.colors.secondaryDark};
    }
  }
  a:focus, button:focus {
    outline: 2px solid ${props => props.theme.colors.focusBorder};
  }
`

const HeaderContainer = styled.header`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.0875rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 0;
    padding-right: 0;
  }

  a {
    color: ${props => props.theme.colors.secondaryDark};
    text-decoration: none;
  }
`

const ThemeSwitcher = styled.div`
  margin-left: 1.2rem;
  min-width: 8rem;
`

const HeaderTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`
const HeaderImage = styled.div`
  width: 50px;
  border-radius: 100px;

  img {
    -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
    mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
    mask-mode: alpha;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    border-radius: 9999px;
  }
`
const HeaderTitle = styled.div`
  font-size: 1.2rem;
  margin-left: 1.2rem;
`

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  height: 70px;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    margin-right: 2rem;
    padding: 0;

    &:last-child {
      margin-right: 0;
    }
  }
  a {
    color: ${props => props.theme.colors.secondaryDark};
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid ${props => props.theme.colors.primaryDark};
      color: ${props => props.theme.colors.primaryDark};
    }
  }
  .active {
    border-bottom: 2px solid ${props => props.theme.colors.primaryDark};
  }
`

const LayoutContainer = styled.main`
  margin: 0 auto;
  max-width: 960px;
  min-height: calc(100vh - 1.0875rem - 5rem + 1rem);
  padding: 1.0875rem 1.0875rem 1.0875rem;

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
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

const Footer = styled.footer`
  background: ${props => props.theme.colors.primaryLight};
  padding: 1.0875rem;
  text-align: center;

  a:link,
  a:visited {
    color: ${props => props.theme.colors.secondaryDark};
  }
`

const Layout = ({children}) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setIsDarkMode(localStorage.getItem("isDarkMode") === "true" ? true : false)
  })
  
  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <GlobalStyles />
        <HeaderContainer>
          <Link to="/">
            <HeaderTitleContainer>
              <HeaderImage>{isDarkMode ? <HeaderImageDark /> : <HeaderImageLight />}</HeaderImage>
              <HeaderTitle>Jamena McInteer</HeaderTitle>
            </HeaderTitleContainer>
          </Link>
          <MenuList>
            <li><Link to="/blog" activeClassName="active" partiallyActive={true}>Writing</Link></li>
            <li><Link to="/talks" activeClassName="active">Talks</Link></li>
            <li><Link to="/learning" activeClassName="active">Learning</Link></li>
            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
          </MenuList>
          <ThemeSwitcher>
            <Button
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                localStorage.setItem("isDarkMode", !isDarkMode);
              }}
              type="secondary"
              compact={true}
              text={isDarkMode ? "☀ Light Mode" : "☾ Dark Mode"}
              ariaLabel={`Switch to ${isDarkMode ? "Light Mode" : "Dark Mode"}`}
            />
          </ThemeSwitcher>
        </HeaderContainer>
        <LayoutContainer>{children}</LayoutContainer>
        <Links socialmedia>
          <SocialLinkContainer>
            <SocialMediaLink href="https://twitter.com/JamenaMcinteer">
              <Twitter c1={theme.colors.svgIcons} />
              <span>Twitter</span>
            </SocialMediaLink>
          </SocialLinkContainer>
          <SocialLinkContainer>
            <SocialMediaLink href="https://github.com/jamenamcinteer">
              <Github c1={theme.colors.svgIcons} />
              <span>GitHub</span>
            </SocialMediaLink>
          </SocialLinkContainer>
          <SocialLinkContainer>
            <SocialMediaLink href="https://www.linkedin.com/in/jamena-mcinteer-5511aa45/">
              <Linkedin c1={theme.colors.svgIcons} />
              <span>LinkedIn</span>
            </SocialMediaLink>
          </SocialLinkContainer>
        </Links>
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
