import axios from "axios";

const api = axios;

export default function useApi(token) {
  const config = {
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: {
      authorization: token,
    },
  };

  const apiFunctions = {
    addProductToCartById: async (productId) => {
      try {
        await api.post(`/cart/${productId}`, undefined, config);
        return { success: true, error: undefined };
      } catch (error) {
        return { success: false, error };
      }
    },
    showCartProducts: async () => {
      try {
        const { data: cartProducts } = await api.get('/cart', config);
        return { success: true, cartProducts, error: undefined };
      } catch (error) {
        return { success: false, cartProducts: undefined, error };
      }
    },
    loginUser: async (email, password) => {
      try {
        const result = await api.post(
          "/sign-in/",
          { email, password },
          { baseURL: process.env.REACT_APP_API_BASEURL }
        );
        return {
          success: true,
          token: result.data.token,
          userId: result.data.id,
        };
      } catch (error) {
        return { success: false, error };
      }
    },
    createUser: async (name, email, password, confirmPassword) => {
      try {
        await api.post(
          "/sign-up",
          { name, email, password, confirmPassword },
          { baseURL: process.env.REACT_APP_API_BASEURL }
        );
        return { success: true, error: undefined };
      } catch (error) {
        return { success: false, error };
      }
    },
    listProducts: async () => {
      try {
        const products = await api.get("/products", config);
        return { success: true, products };
      } catch {
        return { success: false };
      }
    },
  };
  return apiFunctions;
}
