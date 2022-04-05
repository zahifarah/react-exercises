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
      <div className="App-nav-total">
        {cart.length} items (${calculateTotal(summarizedCart)})
      </div>
    </nav>
  )
}

export default Nav
