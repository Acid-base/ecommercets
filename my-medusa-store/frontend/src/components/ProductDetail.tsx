import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/products';
import './ProductDetail.css';
import { Product } from '../types'; // Import Product

interface ProductDetailProps {
  addToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      if (!productId) return;
      const data = await fetchProductById(productId);
      setProduct(data);
    };
    fetchProductData();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductDetail">
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p> {/* Now 'description' is available */}
      {/* ... other product details */}
      <button onClick={() => addToCart(product)}>Add to Cart</button> {/* 'addToCart' is received as a prop */}
    </div>
  );
};

export default ProductDetail;
