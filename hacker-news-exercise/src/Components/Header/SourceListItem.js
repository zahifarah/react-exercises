import React from "react"

const SourceListItem = ({ item }) => {
  return (
    <>
      <li className="source-list-item">{item}</li>
      <span>|</span>
    </>
  )
}

export default SourceListItem
