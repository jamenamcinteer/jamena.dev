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
    {(article.site || article.canonicalUrl) && (
      <div>
        <PreviewTitle>
          {article.canonicalUrl && <a href={article.canonicalUrl}>{article.title}</a>}
          {article.site === "wordpress" && <Link to={`/blog/${article.slug}`} dangerouslySetInnerHTML={{__html: article.title}}></Link>}
          {article.site === "dev.to" && <a href={`https://dev.to/jamenamcinteer/${article.slug}`}>{article.title}</a>}
        </PreviewTitle>
        <small>
          {article.date}
        </small>
        { article.canonicalUrl && (
          <Domain>
            {" "}&bull;{" "}{article.canonicalUrl.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i)[1]}
          </Domain>
        )}
        {article.site === "dev.to" && (
          <Domain>
          {" "}&bull;{" "}dev.to
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
    )}
  </Preview>
  )
}
