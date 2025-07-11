const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const loginUser = async (credentials) => {
  try {
    const res = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(credentials),
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message || `HTTP error! status: ${res.status}`);
    }
    
    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const signupUser = async (credentials) => {
  try {
    const res = await fetch(`${BASE_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(credentials),
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message || `HTTP error! status: ${res.status}`);
    }
    
    return data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users/logout`, {
      method: "POST",
      credentials: "include",
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      console.warn("Logout warning:", data.message || `HTTP error! status: ${res.status}`);
    }
    
    return data;
  } catch (error) {
    console.error("Logout error:", error);
    return { status: false, message: "Logout failed" };
  }
};

export const checkAuth = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users/check`, {
      method: "POST",
      credentials: "include",
    });
    
    const data = await res.json();
    
    console.log("checkAuth response status:", res.status);
    console.log("checkAuth response data:", data);
    
    if (!res.ok) {
      return {
        status: false,
        message: data.message || `HTTP error! status: ${res.status}`,
        user: null,
        expiresAt: null
      };
    }
    
    return data;
  } catch (error) {
    console.error("Auth check error:", error);
    return {
      status: false,
      message: error.message || "Network error during auth check",
      user: null,
      expiresAt: null
    };
  }
};