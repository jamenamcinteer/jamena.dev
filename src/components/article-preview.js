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

export default ({ article }) => (
  <Preview>
    <div>
      <PreviewTitle>
        <a href={article.canonicalUrl ? article.canonicalUrl : `https://lipstickwineandheels.com/blog/${article.slug}`}>{article.title}</a>
      </PreviewTitle>
      <small>
        {article.date}
      </small>
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
