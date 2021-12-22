import React from "react"

import Post from "./Post"

import "../../CSS/Content.css"

const PostList = ({ content }) => {
  return (
    <div className="content">
      {content.map((post) => (
        <Post post={post} />
      ))}
    </div>
  )
}

export default PostList
