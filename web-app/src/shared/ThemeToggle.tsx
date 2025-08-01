"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = localStorage.getItem("theme");
    setDarkMode(theme === null ? prefersDark : theme === "dark");
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
