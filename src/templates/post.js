import React, { Component } from "react"
import Helmet from 'react-helmet'
import { graphql } from "gatsby"
import readingTime from 'reading-time'
import { DiscussionEmbed } from 'disqus-react'
import PropTypes from "prop-types"
import styled from "styled-components"

const PageSection = styled.div`
  margin: 4rem 0;
`
const ArticleHeader = styled.h1`
  text-align: center;
`
const Article = styled.div`
  font-family: 'IBM Plex Sans', Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 1.6;

  h1, h2, h3, h4 {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }
`
const ArticleMeta = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`

class Post extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const post = this.props.data.wordpressPost
    const title = post.title.replace('&nbsp;', ' ')
    const content = {
      __html: post.content
    }
    const disqusShortname = 'webdevabq'
    const disqusConfig = {
      identifier: post.slug,
      title: post.title,
    }

    return (
      <>
        <Helmet title={`${title} | ${siteTitle}`}>
          <html lang="en" />
          {/* <meta name="description" content={post.description} /> */}
          <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5dbd24d82db29a00121d1a0d&product=inline-share-buttons' async='async'></script>
        </Helmet>
        <PageSection>
          <ArticleHeader>{title}</ArticleHeader>
          <ArticleMeta>{post.date} &bull; {readingTime(post.content).text}</ArticleMeta>
          <Article dangerouslySetInnerHTML={content}></Article>
          <Article>
            <h2>Share</h2>
            <p>Think others might enjoy this post? Share it!</p>
            <div className="sharethis-inline-share-buttons" />

            <h2>Comments</h2>
            <p>I'd love to hear from you, let me know your thoughts!</p>
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </Article>
        </PageSection>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      date(formatString: "MMMM D, YYYY")
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`