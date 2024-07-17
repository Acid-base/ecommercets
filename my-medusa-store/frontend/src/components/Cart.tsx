import React from 'react';
import { Product } from '../types';
import './Cart.css';



interface CartProps {
  cart: Product[];
  removeFromCart: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="Cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(product.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
