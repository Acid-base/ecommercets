import React from 'react';
import { Product } from '../types';
import './Checkout.css';

interface CheckoutProps {
  cart: Product[];
  // ... other props for checkout details
}

const Checkout: React.FC<CheckoutProps> = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      {/* Display cart items and total */}
      <div className="cart-items">
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              {/* ... other cart item details */}
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>
      {/* Form for shipping address, billing info */}
      <form>
        <div>
          <label htmlFor="shipping-name">Shipping Name:</label>
          <input type="text" id="shipping-name" />
        </div>
        {/* Add other input fields for address, billing */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
