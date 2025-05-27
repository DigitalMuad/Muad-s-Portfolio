"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 5000,
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
} 