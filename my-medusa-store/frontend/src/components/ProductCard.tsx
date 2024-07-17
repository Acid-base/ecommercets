import React from 'react';
import { Product } from '../types'; // Import Product from types.ts
import './ProductCard.css'; 

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="ProductCard">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      {/* ... other product details */}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
