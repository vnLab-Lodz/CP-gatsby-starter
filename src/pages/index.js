import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default function Home() {
  return (

    <div style={{ color: `purple` }}>
      <script src="https://hypothes.is/embed.js" async/>
      <Header headerText="Hello World!" />
      <p>What a nice image!!!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <br/>
      <Link to="/anotherPage/">AnotherPage</Link>
    </div>
  )
}