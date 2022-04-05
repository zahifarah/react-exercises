import React from "react"
import PropTypes from "prop-types"
import Item from "./Item"

import "./CartPage.css"

function CartPage({ items, onAddOne, onRemoveOne }) {
  const calculateTotal = () => {
    const total = items.reduce((total, item) => {
      return (total += item.price * item.count)
    }, 0)
    return Math.ceil(total)
  }

  const displayTotalCost = calculateTotal() ? (
    <div className="CartItem-total">Total: ${calculateTotal()}</div>
  ) : (
    ""
  )

  return items.length ? (
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
      {displayTotalCost}
    </ul>
  ) : (
    <div className="CartItem-emptyCart">
      <p>Your Cart is empty</p>
      <p>Why not add expensive products to it?</p>
    </div>
  )
}
CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
}

export default CartPage
