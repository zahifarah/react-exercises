import React from "react"

import Icon from "./Icon"
import Source from "./Source"
import SourceList from "./SourceList"
import Access from "./Access"

const Header = ({ header }) => {
  const { icon, source, sourceList } = header
  const { logo } = icon

  return (
    <div className="header">
      <Icon logo={logo} />
      <div className="page-top">
        <Source source={source} />
        <SourceList sourceList={sourceList} />
      </div>
      <Access />
    </div>
  )
}

export default Header
