import api from './index';
import { Product } from '../types';

export const fetchProducts = async () => {
  const response = await api.get<{ products: Product[] }>(
    '/store/products'
  );
  return response.data.products;
};

export const fetchProductById = async (productId: string) => {
  const response = await api.get<Product>(
    `/store/products/${productId}`
  );
  return response.data;
};
