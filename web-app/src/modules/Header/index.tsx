import React from "react";
import { ThemeToggle } from "@/shared/atoms/ThemeToggle";
import Link from "next/link";
import LargeScreenNav from "./LargeScreenNav";
import SmallScreenNavMenu from "./SmallScreenNavMenu";

export function Header() {
  return (
    <header className="border-b h-16 relative z-11 border-gray-200 dark:border-gray-800">
      <div className="app-container h-full flex justify-between items-center py-4">
        <div className="text-xl font-bold text-[var(--accent)]">
          🏠 MyRealEstate
        </div>

        {/* Nav Links */}

        <div className="hidden md:block">
          <LargeScreenNav />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="md:hidden">
            <SmallScreenNavMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
