import React from "react"

import Ranking from "./Ranking"
import PostHeaders from "./PostHeaders"

import "../../CSS/Content.css"

const Content = ({ content }) => {
  return (
    <div className="content">
      {content.map((post) => (
        <div className="post" key={post.id}>
          <Ranking item={post} />
          <PostHeaders post={post} />
        </div>
      ))}
    </div>
  )
}

export default Content
