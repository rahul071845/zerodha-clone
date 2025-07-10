import axios from "axios";

export const fetchHoldings = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/holdings/all`,
      { withCredentials: true }
    );
    return res.data;
  } catch (err) {
    console.error("Error fetching holdings:", err);
    return [];
  }
};
