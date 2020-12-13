import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import { Link, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import "../stylesheets/scssExample.scss"

export default function Home({data}) {
  return (

    <div style={{ color: `purple` }}>
      <Helmet title="foo bar" defer={false} />  {/*defer={false} is to overcome an upstream issue with React Helmet*/}
      <script src="https://hypothes.is/embed.js" async/>
      <Header headerText="Hello World!" />
      <p>What a nice image!!!</p>

      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      <br/>
      <Link to="/anotherPage/">AnotherPage</Link>
    </div>
  )
}

//https://source.unsplash.com/random/400x200"
// fluid={data.imageFile.childImageSharp.fluid}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`