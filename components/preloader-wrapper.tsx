"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./preloader/preloader";

export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Only show preloader if not already shown in this session
    if (typeof window !== "undefined" && sessionStorage.getItem("preloaderShown")) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("preloaderShown", "true");
        }
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? <Preloader /> : children}
    </AnimatePresence>
  );
} 