import React from "react"

import Source from "./Source"
import Access from "./Access"

import Logo from "../Assets/y-combinator-logo.png"

const Header = ({ header }) => {
  const { icon, source, sourceList } = header
  return (
    <div className="header">
      <div className="icon">
        <button href="#" className="icon-button">
          <img className="icon-image" src={Logo} alt="Y combinator logo" />
        </button>
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
