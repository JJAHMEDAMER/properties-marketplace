import React from "react";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export default function AppInput({ label, error, ...rest }: AppInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        {...rest}
        className={`w-full px-4 py-2 rounded-md border text-sm outline-none
          transition-colors duration-200
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${error ? "border-pink-500 focus:ring-pink-500" : ""}
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-pink-600 dark:text-pink-400">{error}</p>
      )}
    </div>
  );
}
