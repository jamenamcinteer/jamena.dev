import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import ButtonLink from "../components/buttonA"
import ArticlePreview from '../components/article-preview'

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

  &:focus {
    border: 2px solid ${props => props.theme.colors.focusBorder};
    outline: 0;
  }
`

const Textarea = styled.textarea`
  height: 10rem;
  margin-bottom: 1rem;

  &:focus {
    border: 2px solid ${props => props.theme.colors.focusBorder};
    outline: 0;
  }
`

const ArticleWrapper = styled.div`
  border-left: 1px solid ${props => props.theme.colors.primaryMedium};
  /* margin-left: -1.45rem; */
  padding-left: 1.45rem;
`

const ArticleList = styled.ul`
  margin-left: -.635rem;
`

const BlogPage = (props) => {
  console.log(props.data.allContentfulBlog.edges)

  // const posts = get(this, 'props.data.allContentfulBlog.edges')
  const posts = props.data.allContentfulBlog.edges;
  let postCount = 0

  return (
    <Layout>
      <SEO title="Writing" />

      <PageSection>

        <PageSectionHeader>Tech Articles</PageSectionHeader>
        <ArticleWrapper className="wrapper">
            <ArticleList className="article-list">
              {posts.map(node => {
                node = node.node ? node.node : node
                if (new Date() >= new Date(node.date)) {
                  postCount++
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  )
                }
              })}
            </ArticleList>
          </ArticleWrapper>

      </PageSection>

      <PageSection>
        <ButtonLink
          to="https://lipstickwineandheels.com"
          text="Read My Personal Blog"
        />
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

export default BlogPage

export const pageQuery = graphql`
  query TagIndexQuery {
    allContentfulBlog(filter: {tags: {elemMatch: {slug: {eq: "tech"}}}}, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          canonicalUrl
          tags {
            title
            slug
          }
          date(formatString: "MMMM D, YYYY")
          # postContent {
          #   postContent
          # }
          # postContent {
            # childMarkdownRemark {
            #   html
            # }
          # }
          postImage {
            sizes(maxWidth: 960, maxHeight: 600, resizingBehavior: CROP) {
              ...GatsbyContentfulSizes
            }
            title
          }
          description {
            description
          }
          # description {
            # childMarkdownRemark {
            #   html
            # }
          # }
        }
      }
    }
  }
`