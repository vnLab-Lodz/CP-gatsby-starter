import React from "react"
import Header from "../components/header"

export function anotherPage() {
  return (
    <div style={{ color: `teal` }}>
      <h1>Another Page</h1>
      <Header headerText="Example text!!!" />
      <p>Amazing image:</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
