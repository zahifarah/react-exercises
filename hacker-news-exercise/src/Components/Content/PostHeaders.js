import React from "react"

import Title from "./Title"
import Subtitle from "./Subtitle"

const PostHeaders = ({ post }) => {
  console.log(post)
  return (
    <div className="post-headers">
      <Title post={post} />
      <Subtitle post={post} />
    </div>
  )
}

export default PostHeaders
