import React, { useState } from "react"
import Nav from "./Nav"
import Content from "./Content"

import "./App.css"

const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0,
    }
    summary[item.id].count++
    return summary
  }, {})

  return Object.values(groupedItems)
}

const App = () => {
  const [activeTab, setActiveTab] = useState("items")
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item])
  }

  const removeItem = (item) => {
    let index = cart.findIndex((i) => i.id === item.id)
    if (index >= 0) {
      setCart((cart) => {
        const copy = [...cart] // immutability ftw
        copy.splice(index, 1)
        return copy
      })
    }
  }

  const calculateTotal = (arr) => {
    const total = arr.reduce((total, item) => {
      return (total += item.price * item.count)
    }, 0)
    return Math.ceil(total)
  }

  return (
    <div className="App">
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        cart={cart}
        summarizedCart={summarizeCart(cart)}
        calculateTotal={calculateTotal}
      />
      <main className="App-content">
        <Content
          tab={activeTab}
          summarizedCart={summarizeCart(cart)}
          onAddToCart={addToCart}
          onRemoveItem={removeItem}
          calculateTotal={calculateTotal}
        />
      </main>
    </div>
  )
}

export default App
