import axios from "axios";

export const fetchPositions = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/positions/all`,
      { withCredentials: true }
    );
    return res.data;
  } catch (err) {
    console.error("Error fetching positions:", err);
    return [];
  }
};
