import React from "react"

import Icon from "./Icon"
import Source from "./Source"
import Access from "./Access"

const Header = ({ header }) => {
  const { icon, source } = header
  const { logo } = icon
  return (
    <div className="header">
      <Icon logo={logo} />
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
