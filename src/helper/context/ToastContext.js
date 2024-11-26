"use client";

import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

// Buat konteks Toast
const ToastContext = createContext();

// Penyedia Toast
export const ToastProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showToast = (message, type = "success") => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else {
      toast(message);
    }
  };

  return (
    <ToastContext.Provider value={{ loading, setLoading, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

// Hook untuk menggunakan Toast
export const useToast = () => useContext(ToastContext);
