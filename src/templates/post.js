import React, { Component } from "react"
import { graphql } from "gatsby"
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
`

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const title = { __html: post.title }
    const content = {
      __html: post.content
    }

    return (
      <>
        <PageSection>
          <ArticleHeader dangerouslySetInnerHTML={title}></ArticleHeader>
          <Article dangerouslySetInnerHTML={content}></Article>
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
      content
    }
  }
`