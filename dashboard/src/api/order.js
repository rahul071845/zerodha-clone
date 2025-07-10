import axios from "axios";

export const fetchOrders = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/orders/user`,
      {
        withCredentials: true,
      }
    );
    return res.data.orders;
  } catch (err) {
    console.error("Error fetching orders", err);
    return [];
  }
};
