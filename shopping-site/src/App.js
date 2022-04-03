import React, { useState } from "react"
import Nav from "./Nav"
import ItemPage from "./ItemPage"
import { items } from "./static-data"

import "./App.css"

const App = () => {
  const [activeTab, setActiveTab] = useState("items")

  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <Content tab={activeTab} />
      </main>
    </div>
  )
}

const Content = ({ tab }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} />
    case "cart":
      return <span>render cart for case "cart"</span>
  }
}

export default App
