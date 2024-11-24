"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Mocking if a user logs in
const auth_data_present = {
  user_id: "user1",
  email: "email@gmail.com",
  password: "secret",
  foto: "/DefaultProfilePicture.png",
  username: "mock_username",
};

// Mocking no user logs in
const auth_data_null = undefined;

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(auth_data_present);

  // TO-DO: onSignup
  // TO-DO: onLogin
  // TO-DO: onLogout

  // TO-DO: cookies to store auth data

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,

        // onSignup,
        // onLogin,
        // onLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
