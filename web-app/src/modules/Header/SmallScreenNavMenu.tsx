"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function SmallScreenNavMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-800 transition"
      >
        <Menu size={24} />
      </button>

      <nav
        className={`absolute right-0 w-full rounded-b-2xl shadow-2xl -z-10 bg-gray-200 dark:bg-gray-800 transition-all flex flex-col ${
          isOpen
            ? "top-16 scale-x-100 opacity-100"
            : "top-[-300%] scale-x-90 opacity-75"
        }`}
      >
        <Link
          href="/"
          className="p-4 border-b border-gray-500 hover:text-[var(--accent)] transition"
        >
          Landing
        </Link>
        <Link
          href="/apartments"
          className="p-4 border-b border-gray-500 hover:text-[var(--accent)] transition"
        >
          Apartments
        </Link>
        <Link
          href="/apartments/add"
          className="p-4 hover:text-[var(--accent)] transition"
        >
          Add Apartment
        </Link>
      </nav>
    </>
  );
}
