import Cart from "./Cart"

export default function Main() {
  // 12 cart
  const carts = Array.from({ length: 12 })
  return (
    <div className="main">
      <div className="cart-list">
        {carts.map((_, i) => (
          <Cart key={i} />
        ))}
      </div>
    </div>
  )
}
