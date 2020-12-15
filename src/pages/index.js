import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import "../stylesheets/scssExample.scss"
import { graphql } from "../../.cache/gatsby-browser-entry"
export default function Home() {
  return (
    <div>
      <div id="content">
        <Helmet title="Very " defer={false} />  {/*defer={false} is to overcome an upstream issue with React Helmet*/}
        <script src="https://hypothes.is/embed.js" async/>
        <Header headerText="Hello World!" />
        <p>What a nice image!!!</p>
        <div>
        <h2>Example header!!!</h2>
        </div>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <br/>
        <Link to="/anotherPage/">AnotherPage</Link>
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