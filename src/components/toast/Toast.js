// components/ToastConfig.js
"use client";

import { Toaster } from "react-hot-toast";

export const ToastConfig = () => {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        // Default options
        duration: 3000,
        style: {
          padding: '16px',
          borderRadius: '8px',
        },

        // Success toast
        success: {
          style: {
            background: '#4caf50',
            color: 'white',
          },
          iconTheme: {
            primary: 'white',
            secondary: '#4caf50',
          }
        },

        // Error toast
        error: {
          style: {
            background: '#f44336',
            color: 'white',
          },
          iconTheme: {
            primary: 'white',
            secondary: '#f44336',
          }
        },

        // Loading toast
        loading: {
          style: {
            background: '#2196f3',
            color: 'white',
          }
        },
      }}
    />
  );
};