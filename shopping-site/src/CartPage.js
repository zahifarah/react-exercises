import React from "react"
import PropTypes from "prop-types"
import Item from "./Item"

import "./CartPage.css"

function CartPage({ items, onAddOne, onRemoveOne }) {
  let total = 0

  const calculateTotal = () => {
    items.forEach((item) => {
      total += item.price * item.count
    })
    return total
  }

  calculateTotal()

  return (
    <ul className="CartPage-items">
      {items.map((item) => (
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              <button
                className="CartItem-removeOne"
                onClick={() => onRemoveOne(item)}>
                -
              </button>
              <span className="CartItem-count">{item.count}</span>
              <button
                className="CartItem-addOne"
                onClick={() => onAddOne(item)}>
                +
              </button>
            </div>
          </Item>
        </li>
      ))}
      <div className="CartItem-total">Total: ${total}</div>
    </ul>
  )
}
CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
}

export default CartPage
