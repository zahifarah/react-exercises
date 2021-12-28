import React from "react"

const Ranking = ({ item }) => {
  return (
    <div className="ranking">
      <div className="ranking-number">{item.ranking}.</div>
      <div className="icon">
        <button href="#" className="icon-button">
          <i className="fas fa-arrow-up fa-lg icon-image"></i>
        </button>
      </div>
    </div>
  )
}

export default Ranking
