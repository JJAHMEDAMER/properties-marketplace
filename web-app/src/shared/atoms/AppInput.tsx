import React from "react";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export default function AppInput({ label, error, ...rest }: AppInputProps) {
  return (
    <label data-error={true} className="group flex flex-col">
      <span className={`text-[clamp(0.75rem,0.875vw,0.875rem)] text-gray-600`}>
        {label}
      </span>
      <span className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 group-data-[error=true]:border-pink-800">
        <input
          {...rest}
          type="text"
          className="bg-transparent outline-none text-[clamp(0.875rem,1.2vw,1rem)]"
        />
      </span>

      {error && (
        <span className="ms-2 text-[clamp(0.75rem,0.875vw,0.875rem)] text-pink-800">
          {error}
        </span>
      )}
    </label>
  );
}
