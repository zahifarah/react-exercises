import React from "react"

const SourceListItem = ({ item }) => {
  const { text } = item
  return <li className="source-list-item">{text}</li>
}

export default SourceListItem
