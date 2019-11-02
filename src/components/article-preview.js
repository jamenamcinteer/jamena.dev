import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

const Preview = styled.div`
  margin-top: 1rem;
`

const PreviewTitle = styled.div`
  font-size: 1em;
  font-weight: normal;
  /* margin-bottom: .5rem; */
`

const Domain = styled.span`
  font-family: 'IBM Plex Sans', Arial, Helvetica, sans-serif;
  font-size: .9rem;
`

export default ({ article }) => {
  return (
  <Preview>
    <div>
      <PreviewTitle>
        {article.canonicalUrl ? <a href={article.canonicalUrl}>{article.title}</a> : <Link to={`/blog/${article.slug}`} dangerouslySetInnerHTML={{__html: article.title}}></Link>}
      </PreviewTitle>
      <small>
        {article.date}
      </small>
      { article.canonicalUrl && (
        <Domain>
          {" "}&bull;{" "}{article.canonicalUrl.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i)[1]}
        </Domain>
      )}
      {/* {article.description && (
        <div
          dangerouslySetInnerHTML={{
            __html: article.description.description,
          }}
        />
      )} */}
    </div>
  </Preview>
  )
}
