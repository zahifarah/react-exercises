import React, { useState } from "react"
import Nav from "./Nav"
import ItemPage from "./ItemPage"

import { items } from "./static-data"
import "./App.css"

const Content = ({ tab, onAddToCart }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />
    case "cart":
      return <span>render cart for case "cart"</span>
  }
}

const App = () => {
  const [activeTab, setActiveTab] = useState("items")
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item])
  }

  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <Content tab={activeTab} onAddToCart={addToCart} />
      </main>
    </div>
  )
}

export default App
