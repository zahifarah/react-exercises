import React from "react"

const Subtitle = ({ post }) => {
  return (
    <div className="subtitle">
      {post.upvotes} points by {post.user} 54 mins ago | hide | {post.comments}{" "}
      comments
    </div>
  )
}

export default Subtitle
