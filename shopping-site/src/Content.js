import ItemPage from "./ItemPage"
import CartPage from "./CartPage"

import { items } from "./static-data"

const Content = ({ tab, cart, onAddToCart, onRemoveItem }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />
    case "cart":
      return (
        <CartPage
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}
        />
      )
  }
}

export default Content
