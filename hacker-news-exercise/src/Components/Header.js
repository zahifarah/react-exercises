import React from "react"

import Source from "./Source"
import Access from "./Access"

const Header = ({ header }) => {
  const { icon, source, sourceList } = header
  return (
    <div className="header">
      <div className="icon">
        <a href="#" className="icon">
          <img
            src="https://news.ycombinator.com/y18.gif"
            alt="Y combinator logo"
          />
        </a>
      </div>
      <div className="page-top">
        <Source source={source} />
        <ul className="source-list">
          <li>News</li>
          <li>Threads</li>
          <li>Comments</li>
          <li>Show</li>
          <li>Ask</li>
        </ul>
      </div>
      <Access />
    </div>
  )
}

export default Header
