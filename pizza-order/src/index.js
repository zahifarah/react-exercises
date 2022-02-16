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

  // methods
  setSize = (event) => {
    this.setState({
      size: event.target.value,
    })
  }

  //  setTopping
  //  setGluten
  //  setInstructions

  render() {
    return (
      <>
        <form>
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
            <select>
              <option value="">- Pick a topping -</option>
              <option value="pepperoni">Pepperoni</option>
              <option value="peppers+onions">Peppers and onions</option>
              <option value="pineapple">Pineapple</option>
            </select>
          </section>

          <br />

          <section>
            <label>
              <input type="checkbox" />
              Gluten free
            </label>
          </section>

          <br />

          <section>
            <textarea name="" cols="30" rows="5"></textarea>
          </section>

          <br />

          <button type="submit">Order</button>
        </form>
      </>
    )
  }
}

ReactDOM.render(<PizzaOrder />, document.querySelector("#root"))
