import React from "react"

export default function CartTotal({ items }) {
  const calculateTotal = () => {
    const total = items.reduce((total, item) => {
      return (total += item.price * item.count)
    }, 0)
    return Math.ceil(total)
  }

  const displayTotalCost = calculateTotal() ? (
    <div className="CartItem-total">Total: ${calculateTotal()}</div>
  ) : (
    ""
  )

  console.log(displayTotalCost)

  return <p>{displayTotalCost}</p>
}
