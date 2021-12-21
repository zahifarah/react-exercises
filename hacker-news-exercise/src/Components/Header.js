import React from "react"

const Header = ({ header }) => {
  const { icon, source, sourceList } = header
  return (
    <div className="header">
      <div className="icon">ICON</div>
      <div className="page-top">
        <div className="source">{source}</div>
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

export default Header
