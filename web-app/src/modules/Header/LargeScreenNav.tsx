import Link from "next/link";
import React from "react";

export default function LargeScreenNav() {
  return (
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
  );
}
