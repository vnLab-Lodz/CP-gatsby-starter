import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Gallery({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div id="content">
        <h1>This is a Gallery Template!</h1>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <br/>
        <p>{post.frontmatter.variable}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        variable
      }
    }
  }
`