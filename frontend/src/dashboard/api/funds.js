import axios from "axios";

export const fetchFunds = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/funds`,
      { withCredentials: true }
    );
    return res.data.fund;
  } catch (err) {
    console.error("Failed to fetch funds data", err);
    return null;
  }
};

export const addFunds = async (amount) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/funds/add`,
      { amount },
      { withCredentials: true }
    );
    return res.data;
  } catch (err) {
    console.error("Failed to add funds", err);
    return null;
  }
};

export const withdrawFunds = async (amount) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/funds/withdraw`,
      { amount },
      { withCredentials: true }
    );
    return res.data;
  } catch (err) {
    console.error("Failed to withdraw funds", err);
    return null;
  }
};

