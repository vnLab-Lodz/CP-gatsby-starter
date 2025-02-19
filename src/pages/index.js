import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import "../stylesheets/scssExample.scss"

export default function Home({data}) {
  return (
    <div>
      <div id="content">
        <Helmet title="Front Page " defer={false} />  {/*defer={false} is to overcome an upstream issue with React Helmet*/}
        <Helmet>
          <script src="https://hypothes.is/embed.js" async></script>
        </Helmet>
        <Header headerText='Publab Page Starter' />
        <p>Welcome to our Publab starter!!!</p>
        <div>
          <h2>Example of image placement: </h2>
        </div>
        <img src={`/images/Thinking-of-getting-a-cat.png`} alt="Alt of an image"  width="100%"/>
        <br/>
        <p><b>Example of accessing another page:</b></p>
        <br/>
        <Link to="/anotherPage/">AnotherPage</Link>


        <div id="content">
          
          {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <Link to={node.fields.slug}>
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span>
                      — {node.frontmatter.date}
                    </span>
                  </h3>
                  <p>{node.excerpt}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <div className="credentials">
        <div>
          <div className="author-header">
            Authors:
          </div>
          <div className="authors">
            <div className="author">
              Mariusz Pisarski
            </div>
            <div className="author">
              Yura Shcheholiev
            </div>
          </div>
        </div>
      </div>
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`