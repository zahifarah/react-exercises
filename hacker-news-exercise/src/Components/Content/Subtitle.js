import React from "react"

import Time from "../Time"

const Subtitle = ({ post }) => {
  return (
    <div className="subtitle">
      {post.upvotes} points by {post.by} <Time time={post.submitted_at} /> |
      hide | {post.comments} comments
    </div>
  )
}

export default Subtitle
