import React, { createContext, useContext, useState } from "react";
import { ID } from "react-native-appwrite";
import { account } from "../appwriteConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    await account.createEmailPasswordSession(email, password);
    setUser(await account.get());
  };

  const register = async (fullName, email, password) => {
    await account.create(ID.unique(), email, password, fullName);
    await login(email, password);
    setUser(await account.get());
  };

  const logout = async () => {
    try {
      await account.deleteSession("current"); // Log out the current session
      setUser(null); // Clear the user state
    } catch (error) {
      throw error; // Handle logout error
    }
  };

  // The context value
  const value = {
    user,
    setUser,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
