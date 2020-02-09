import React, { Component } from "react"
import SEO from "../components/seo"

export class HomePage extends Component {
  componentDidMount() {
    const myDiv = document.getElementById("frame-wrapper")
    myDiv.scrollTop = 0
  }
  render() {
    return (
      <div>
        <SEO title="Home" />
        <h1>Homepage</h1>
      </div>
    )
  }
}

export default HomePage
