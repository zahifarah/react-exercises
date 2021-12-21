import React from "react"
import PropTypes from "prop-types"

const CardItem = ({ text }) => {
  return <li className="card">{text}</li>
}
CardItem.propTypes = {
  text: PropTypes.string.isRequired,
}

export default CardItem
