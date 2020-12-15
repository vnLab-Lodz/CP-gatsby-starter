// import React from "react"
// import Header from "../components/header.js"
//
// export default function anotherPage() {
//   return (
//     <div style={{ color: `teal` }}>
//       <h1>Another Page</h1>
//       <Header headerText="Example text!!!" />
//       <p>Amazing image:</p>
//       <img src="https://source.unsplash.com/random/400x200" alt="" />
//     </div>
//   )
// }

import { Helmet } from 'react-helmet'
import "../stylesheets/scssExample.scss"
import { graphql } from "../../.cache/gatsby-browser-entry"
import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
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
