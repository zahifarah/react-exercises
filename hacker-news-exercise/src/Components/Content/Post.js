import React from "react"

import Ranking from "./Ranking"
import PostHeaders from "./PostHeaders"

const Post = ({ post }) => {
  return (
    <React.Fragment>
      <div className="post" key={post.id}>
        <Ranking item={post} />
        <PostHeaders post={post} />
      </div>
    </React.Fragment>
  )
}

export default Post
