"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastContext";
import apiService from "@/helper/API/services";

const AuthContext = createContext();

const auth_data_present = {
    user_id: "user1",
    email: "email@gmail.com",
    password: "secret",
    foto: "/DefaultProfilePicture.png",
    username: "pawrent",
  };

  const auth_data_null = undefined;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({auth_data_present}) 

    const login = (user) => { setUser(user);};
  
    const logout = () => {
      setUser(null); 
    };

    const updateUser = (updatedData) => {
      setUser((prevUser) => {
        if (!prevUser) {
          console.warn("No user is logged in. Cannot update user data.");
          return null;
        }
        return { ...prevUser, ...updatedData };
      });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser: updateUser,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);