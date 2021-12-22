import React from "react"

const Icon = ({ logo }) => {
  return (
    <div className="icon">
      <button href="#" className="icon-button">
        <img className="icon-image" src={logo} alt="Y combinator logo" />
      </button>
    </div>
  )
}

export default Icon
