import React from "react"
import PropTypes from "prop-types"

import Card from "./Card"

const CardList = ({ cards }) => (
  <main className="all-cards">
    {cards.map((card) => (
      <Card key={card.id} title={card.title} children={card.children} />
    ))}
  </main>
)
CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card: PropTypes.object,
    })
  ),
}

export default CardList
