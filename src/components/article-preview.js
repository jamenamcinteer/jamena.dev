import React from 'react'
import styled from "styled-components"

const Preview = styled.div`
  margin-top: 1rem;
`

const PreviewTitle = styled.div`
  font-size: 1em;
  font-weight: normal;
  /* margin-bottom: .5rem; */
`

export default ({ article }) => {
  return (
  <Preview>
    <div>
      <PreviewTitle>
        <a href={article.canonicalUrl ? article.canonicalUrl : `/blog/${article.slug}`} dangerouslySetInnerHTML={{__html: article.title}}></a>
      </PreviewTitle>
      <small>
        {article.date}
      </small>
      { article.canonicalUrl && (
        <small>
          {" "}|{" "}{article.canonicalUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1]}
        </small>
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
