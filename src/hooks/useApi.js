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
        return { success: false, error: error.response.data };
      }
    },
    showCartProducts: async () => {
      try {
        const { data: cartProducts } = await api.get("/cart", config);
        return { success: true, cartProducts, error: undefined };
      } catch (error) {
        return {
          success: false,
          cartProducts: undefined,
          error: error.response.data,
        };
      }
    },
    deleteCartProductById: async (id) => {
      try {
        await api.delete(`/cart/${id}`, config);
        return { success: true, error: undefined };
      } catch (error) {
        return { success: false, error: error.response.data };
      }
    },
    deleteAllCartProducts: async () => {
      try {
        await api.delete("/cart", config);
        return { success: true, error: undefined };
      } catch (error) {
        return { success: false, error: error.response.data };
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
    verifyToken: async () => {
      try {
        const validationToken = await api.get("/verify", config);
        return { success: true, validationToken };
      } catch (error) {
        return { success: false, error };
      }
    },
    checkoutPost: async (
      city,
      street,
      district,
      number,
      paymentForms,
      value,
      orders
    ) => {
      try {
        console.log({city,
          street,
          district,
          number,
          paymentForms,
          value,
          orders})
        await api.post(
          "/checkout",
          { city, street, district, number, paymentForms, value, orders },
          config
        );
        return { success: true };
      } catch (error) {
        console.log(error)
        return { success: false, error };
      }
    },
  };
  return apiFunctions;
}
