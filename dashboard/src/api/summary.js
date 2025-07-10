import axios from "axios";

export const getSummary = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/summary`, {
      withCredentials: true,
    });
    return res.data.summary;
  } catch (error) {
    console.error("Error fetching summary:", error);
    return null;
  }
};
