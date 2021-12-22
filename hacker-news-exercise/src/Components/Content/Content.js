import React from "react"

import "../../CSS/Content.css"

const Content = () => {
  return (
    <div className="content">
      <div className="position">
        <div className="ranking">1.</div>
        <div className="icon">
          <button href="#" className="icon-button">
            <i class="fas fa-arrow-up fa-lg icon-image"></i>
          </button>
        </div>
      </div>
      <div className="post">
        <div className="title">
          NASA kills 50 plants!{" "}
          <span className="title-source">(positive.security)</span>
        </div>
        <div className="subtitle">
          125 points by Acrah 54 mins ago | hide | 22 comments
        </div>
      </div>
    </div>
  )
}

export default Content
