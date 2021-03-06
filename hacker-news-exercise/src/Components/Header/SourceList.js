import React from "react"

import SourceListItem from "./SourceListItem"

const SourceList = ({ sourceList }) => {
  return (
    <>
      <ul className="source-list">
        {sourceList.map((item) => (
          <SourceListItem key={item.id} item={item.text} />
        ))}
      </ul>
    </>
  )
}

export default SourceList
