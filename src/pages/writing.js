import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import ButtonLink from "../components/buttonA"
import ArticlePreview from '../components/article-preview'

const PageSection = styled.div`
  margin: 4rem 0;
`

const PageSectionHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: normal;
  text-align: center;
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
  const posts = props.data.allContentfulBlog.edges;
  return (
    <div>
      <SEO title="Writing" />

      <PageSection>

        <PageSectionHeader>Tech Articles</PageSectionHeader>
        <ArticleWrapper className="wrapper">
            <ArticleList className="article-list">
              {posts.map(node => {
                node = node.node ? node.node : node
                if (new Date() >= new Date(node.date)) {
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  )
                }
                return false
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
    </div>
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
          description {
            description
          }
        }
      }
    }
  }
`