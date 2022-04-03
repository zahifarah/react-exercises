import React, { useState } from "react"
import Nav from "./Nav"

import "./App.css"

const Content = ({ tab }) => {
  switch (tab) {
    default:
    case "items":
      return <span>render items for case "items"</span>
    case "cart":
      return <span>render cart for case "cart"</span>
  }
}

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

export default App
