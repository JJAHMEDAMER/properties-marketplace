import React, { useState, useRef } from "react";

type SelectProps = {
  value: string;
  onSelect: (value: string) => void;
  options: { value: string; label: string }[];
};

export function Select({ value, onSelect, options }: SelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
      className="relative inline-block w-64"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full px-4 py-2 text-left border rounded-md bg-white dark:bg-zinc-900 dark:text-white dark:border-zinc-700 text-zinc-900"
      >
        {options.find((option) => option.value === value)?.label || "Select..."}
      </button>

      <div
        className={`absolute z-10 mt-2 w-full rounded-md border bg-white dark:bg-zinc-900 dark:border-zinc-700 text-zinc-900 dark:text-white transition-all duration-200 ease-in-out transform ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => {
              onSelect(option.value);
              setOpen(false);
            }}
            className={`px-4 py-2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
              option.value === value
                ? "bg-zinc-100 dark:bg-zinc-800 font-medium"
                : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
