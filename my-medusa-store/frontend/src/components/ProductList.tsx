import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import ProductCard from './ProductCard';
import './ProductList.css';

import { Product } from '../types';

interface ProductListProps {
  // ... any props specific to this component
}

const ProductList: React.FC<ProductListProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    fetchProductsData();
  }, []);

  return (
    <div className="ProductList">
      <h2>Our Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
