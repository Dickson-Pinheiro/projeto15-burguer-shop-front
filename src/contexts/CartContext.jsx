import { createContext, useEffect, useState } from "react";
import React from 'react';
import useApi from "../hooks/useApi";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const api = useApi(localStorage.getItem('token'));
  const [cart, setCart] = useState([]);
  const getCart = async () => {
    try {
      const { success, error, cartProducts } = await api.showCartProducts();
      if (!success) return alert(error);
      setCart(cartProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (productId) => {
    const { success, error } = await api.addProductToCartById(productId);
    if (!success) return alert(error);
    await getCart();
  };

  const deleteProduct = async (productId) => {
    const { success, error } = await api.deleteCartProductById(productId);
    if (!success) return alert(error);
    await getCart();
  };

  const deleteAllProducts = async () => {
    const { success, error } = await api.deleteAllCartProducts();
    if (!success) return alert(error);
    await getCart();
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider value={{
      cart,
      getCart,
      addProduct,
      deleteProduct,
      deleteAllProducts
    }}>
      {children}
    </CartContext.Provider>
  );
}