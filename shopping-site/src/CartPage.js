import React from "react"
import PropTypes from "prop-types"
import Item from "./Item"
import CartTotal from "./CartTotal"

import "./CartPage.css"

function CartPage({ items, onAddOne, onRemoveOne }) {
  const emptyCart = (
    <div className="CartItem-emptyCart">
      <p>Your Cart is empty</p>
      <p>Why not add expensive products to it?</p>
    </div>
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
      <CartTotal items={items} />
    </ul>
  ) : (
    emptyCart
  )
}
CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
}

export default CartPage
