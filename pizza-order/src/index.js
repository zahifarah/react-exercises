import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./index.css"

class PizzaOrder extends Component {
  state = {
    size: "medium",
    glutenFree: false,
    topping: "",
    instructions: "",
  }

  setSize = (event) => {
    this.setState({
      size: event.target.value,
    })
  }

  setTopping = (event) => {
    this.setState({
      topping: event.target.value,
    })
  }

  setGluten = (event) => {
    console.log(
      `checked: ${event.target.checked}, state: ${this.state.glutenFree}`
    )
    this.setState({
      glutenFree: event.target.checked,
    })
  }

  setInstructions = (event) => {
    this.setState({
      instructions: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    alert(
      `Your order:
      - Size: ${this.state.size}
      - Topping: ${this.state.topping || "none"}
      - Gluten Free? ${this.state.glutenFree ? "yes" : "no"}
      - Instructions: ${this.state.instructions}
      `
    )
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Order Your Pizza</h2>

          <section>
            <h3>Size</h3>

            <label>
              <input
                type="radio"
                value="small"
                checked={this.state.size === "small"}
                onChange={this.setSize}
              />
              Small
            </label>
            <label>
              <input
                type="radio"
                value="medium"
                checked={this.state.size === "medium"}
                onChange={this.setSize}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                value="large"
                checked={this.state.size === "large"}
                onChange={this.setSize}
              />
              Large
            </label>
          </section>

          <section>
            <h3>Topping</h3>
            <select onChange={this.setTopping} value={this.state.topping}>
              <option value="">- Pick a topping -</option>
              <option value="pepperoni">Pepperoni</option>
              <option value="peppers+onions">Peppers and onions</option>
              <option value="pineapple">Pineapple</option>
            </select>
          </section>

          <br />

          <section>
            <label>
              <input
                type="checkbox"
                onChange={this.setGluten}
                checked={this.state.glutenFree}
              />
              Gluten free
            </label>
          </section>

          <br />

          <section>
            <textarea
              cols="30"
              rows="5"
              value={this.state.instructions}
              onChange={this.setInstructions}></textarea>
          </section>

          <br />

          <button type="submit">Order</button>
        </form>
      </>
    )
  }
}

ReactDOM.render(<PizzaOrder />, document.querySelector("#root"))
