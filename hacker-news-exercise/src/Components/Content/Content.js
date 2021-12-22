import React, { useReducer } from "react"

import "../../CSS/Content.css"

const Content = ({ content }) => {
  console.log(content)
  return (
    <div className="content">
      {content.map((item) => (
        <div className="post" key={item.id}>
          <React.Fragment>
            <div className="ranking">
              <div className="ranking-number">{item.ranking}.</div>
              <div className="icon">
                <button href="#" className="icon-button">
                  <i className="fas fa-arrow-up fa-lg icon-image"></i>
                </button>
              </div>
            </div>
            <div className="post-headers">
              <div className="title">
                {item.title}{" "}
                <span className="title-source">({item.source})</span>
              </div>
              <div className="subtitle">
                {item.upvotes} points by {item.user} 54 mins ago | hide |{" "}
                {item.comments} comments
              </div>
            </div>
          </React.Fragment>
        </div>
      ))}
    </div>
  )
}

export default Content
