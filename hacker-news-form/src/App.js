import React, { useState, useEffect } from "react"

import "./App.css"

const App = () => {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState("Redux")
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  )

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error.message))
    }

    fetchData()
  }, [url])

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
    }
  }

  return (
    <div className="container">
      {/* Search Query */}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Search Command */}
      <button
        onClick={() =>
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
        }>
        Search
      </button>

      {/* Display Posts */}
      <ul className="list">
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
