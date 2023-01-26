import axios from "axios";

const api = axios;

export default function useApi(token) {
  const config = {
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: {
      authorization: token
    }
  };

  const apiFunctions = {
    addProductToCartById: async (productId) => {
      try {
        await api.post(`/cart/${productId}`, undefined, config);
        return { success: true, error: undefined };
      } catch (error) {
        return { success: false, error };
      }
    }
  };

  return apiFunctions;
}