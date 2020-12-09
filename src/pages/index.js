import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import "../stylesheets/scssExample.scss"
export default function Home() {
  return (

    <div style={{ color: `purple` }}>
      <Helmet title="foo bar" defer={false} />  {/*defer={false} is to overcome an upstream issue with React Helmet*/}
      <script src="https://hypothes.is/embed.js" async/>
      <Header headerText="Hello World!" />
      <p>What a nice image!!!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <br/>
      <Link to="/anotherPage/">AnotherPage</Link>
    </div>
  )
}