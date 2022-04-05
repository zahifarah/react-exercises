import React from "react"

const Nav = ({
  cart,
  summarizedCart,
  activeTab,
  onTabChange,
  calculateTotal,
}) => {
  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? "selected" : ""}`

  let itemString = cart.length > 1 ? "items" : "item"

  const cartStatus = cart.length ? (
    <button className="App-nav-total" onClick={() => onTabChange("cart")}>
      {cart.length} {itemString} (${calculateTotal(summarizedCart)})
    </button>
  ) : (
    <button className="App-nav-total">Empty Cart</button>
  )

  return (
    <nav className="App-nav">
      <ul className="App-nav-tags">
        <li className={itemClass("items")}>
          <button onClick={() => onTabChange("items")}>Items</button>
        </li>
        <li className={itemClass("cart")}>
          <button onClick={() => onTabChange("cart")}>Cart</button>
        </li>
      </ul>
      {cartStatus}
    </nav>
  )
}

export default Nav
