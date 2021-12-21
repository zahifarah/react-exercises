import React from "react"
import ReactDOM from "react-dom"

import "./CSS/minireset.min.css"
import "./CSS/index.css"

const App = () => {
  return (
    <div className="header">
      <div className="icon">ICON</div>
      <div className="page-top">
        <div className="source">Hacker News</div>
        <ul className="source-list">
          <li>News</li>
          <li>Threads</li>
          <li>Comments</li>
          <li>Show</li>
          <li>Ask</li>
        </ul>
      </div>
      <div className="access">Login</div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
