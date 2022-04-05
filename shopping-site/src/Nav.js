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

  const cartStatus = cart.length ? (
    <div className="App-nav-total">
      {cart.length} items (${calculateTotal(summarizedCart)})
    </div>
  ) : (
    <div className="App-nav-total">Empty Cart</div>
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
