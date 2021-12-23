import React from "react"

const Title = ({ post }) => {
  return (
    <div className="title">
      {post.title} <span className="title-source">({post.url})</span>
    </div>
  )
}

export default Title
