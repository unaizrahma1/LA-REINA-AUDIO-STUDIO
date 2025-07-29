import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

// Register user
export const register = async (name, email, password) => {
  try {
    const response = await axios.post(API_URL + "register", {
      name,
      email,
      password,
    });

    if (response.data.user) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error.response?.data?.message || "Registration failed";
  }
};

// Login user
export const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL + "login", {
      email,
      password,
    });

    if (response.data.user) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error.response?.data?.message || "Login failed";
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem("user");
};

// Get current user info
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// Check if user is logged in
export const isLoggedIn = () => {
  return !!localStorage.getItem("user");
};
