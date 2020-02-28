import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import { graphql } from "gatsby"
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
  /* padding-left: 1.45rem; */
`

const ArticleList = styled.ul`
  /* margin-left: -.635rem; */
  list-style-type: none;
`

const BlogPage = (props) => {
  let devPosts = props.data.allDevArticles.edges
  let newDevPosts = []
  devPosts.map(devPost => {
    const newDevPost = {
      title: devPost.node.article.title,
      slug: devPost.node.article.slug,
      date: devPost.node.article.published_at,
      site: "dev.to"
    }
    newDevPosts.push({node: newDevPost})
    return devPost
  })

  let wpPosts = props.data.allWordpressPost.edges
  let newWpPosts = []
  wpPosts.map(wpPost => {
    const newWpPost = {
      title: wpPost.node.title,
      slug: wpPost.node.slug,
      date: wpPost.node.date,
      site: "wordpress"
    }
    newWpPosts.push({node: newWpPost})
    return wpPost
  })
  
  function compare(a, b) {
    if(a.node) a = a.node
    if(b.node) b = b.node
    if(new Date(a.date) < new Date(b.date)) return 1
    if(new Date(a.date) > new Date(b.date)) return -1
    return 0
  }

  let posts = props.data.allContentfulBlog.edges.concat(newWpPosts);
  posts = posts.concat(newDevPosts);
  posts.sort(compare)
  return (
    <>
      <SEO title="Writing" />

      <PageSection>

        <PageSectionHeader>Tech Articles</PageSectionHeader>
        <ArticleWrapper className="wrapper">
            <ArticleList className="article-list">
              {posts.map((node, index) => {
                node = node.node ? node.node : node
                if (new Date() >= new Date(node.date)) {
                  return (
                    <li key={index}>
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
    </>
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
    allWordpressPost {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
    allDevArticles {
      edges {
        node {
          article {
            title
            slug
            published_at(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`