import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] border-b border-gray-200 dark:border-gray-800">
      <div className="app-container flex justify-between items-center py-4">
        <div className="text-xl font-bold text-[var(--accent)]">
          🏠 MyRealEstate
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-[var(--accent)] transition">
            Landing
          </Link>
          <Link
            href="/apartments"
            className="hover:text-[var(--accent)] transition"
          >
            Apartments
          </Link>
          <Link
            href="/apartments/add"
            className="hover:text-[var(--accent)] transition"
          >
            Add Apartment
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
