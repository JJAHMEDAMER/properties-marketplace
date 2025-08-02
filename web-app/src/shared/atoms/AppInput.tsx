import React from "react";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export default function AppInput({ label, error, ...rest }: AppInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {label}
        </label>
      )}
      <input
        {...rest}
        className={`w-full px-4 py-2 rounded-md border text-sm outline-none
          transition-colors duration-200
          bg-white dark:bg-zinc-800
          text-zinc-900 dark:text-zinc-100
          border-zinc-300 dark:border-zinc-600
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
