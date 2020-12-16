import { Helmet } from 'react-helmet'
import "../stylesheets/scssExample.scss"
import { graphql, Link } from "gatsby"
import React from "react"
import Header from "../components/header"
export default function anotherPage() {
  return (
    <div>
      <div id="content">
        <Helmet title="Very " defer={false} />  {/*defer={false} is to overcome an upstream issue with React Helmet*/}
        <Header headerText="AnotherPage" />
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}
