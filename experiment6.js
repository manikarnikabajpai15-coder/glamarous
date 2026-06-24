import React, { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <button
            onClick={() =>
              addToCart(product)
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart Items: {cart.length}</h2>
      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default App;
