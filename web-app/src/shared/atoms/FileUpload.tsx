"use client";
import React, { useState } from "react";
import Image from "next/image";

interface FileUploadProps {
  label?: string;
  error?: string;
  imageProps: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function FileUpload({
  label,
  error,
  imageProps,
}: FileUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }

    imageProps.onChange?.(e); // Notify react-hook-form
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        {...imageProps}
        onChange={handleFileChange}
        className="w-full px-4 py-2 rounded-md border text-sm outline-none
          transition-colors duration-200
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          file:bg-blue-100 file:border-none file:rounded-md file:px-3 file:py-1
          file:text-blue-800 dark:file:bg-blue-900 dark:file:text-blue-100"
      />

      {preview && (
        <Image
          width={300}
          height={300}
          src={preview}
          alt="Preview"
          className="mt-2 max-h-48 w-auto rounded-lg border border-gray-200 dark:border-zinc-700"
        />
      )}

      {error && (
        <p className="mt-1 text-sm text-pink-600 dark:text-pink-400">{error}</p>
      )}
    </div>
  );
}
