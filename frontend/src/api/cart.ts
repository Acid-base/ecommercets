import React from 'react';
import { useCart } from '@medusajs/medusa-react';
import { LineItem } from '@medusajs/medusa';
import { formatAmount } from '@medusajs/medusa-js';

type CartItemProps = {
  item: LineItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
};

const CartItemComponent: React.FC<CartItemProps> = React.memo(({ item, onUpdateQuantity, onRemove }) => (
  <li>
    <div>
      <span>{item.title}</span> - 
      <span>{formatAmount({ amount: item.unit_price, currency: item.variant.product.metadata.currency })}</span> x 
      <span>{item.quantity}</span> = 
      <span>{formatAmount({ amount: item.total, currency: item.variant.product.metadata.currency })}</span>
    </div>
    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
    <button onClick={() => onRemove(item.id)}>Remove</button>
  </li>
));

const Cart: React.FC = () => {
  const { cart, updateLineItem, removeLineItem } = useCart();

  if (!cart) return <div>No cart found</div>;

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateLineItem({ lineId: id, quantity });
  };

  const handleRemoveItem = (id: string) => {
    removeLineItem(id);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.items.map((item: LineItem) => (
          <CartItemComponent
            key={item.id}
            item={item}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemoveItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
