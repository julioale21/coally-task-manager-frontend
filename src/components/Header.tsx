"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { LogOut, Home } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/login",
    });
  };

  return (
    <header className="bg-[#1a1f2e] border-b border-gray-800">
      {" "}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                className="h-8 w-8 text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              ></svg>
              <span className="text-xl font-bold text-white">Coally</span>{" "}
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/"
              className="flex items-center text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              <Home className="h-5 w-5 mr-1" />
              Home
            </Link>
            <button
              onClick={handleSignOut}
              className="flex items-center text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              <LogOut className="h-5 w-5 mr-1" />
              Sign out
            </button>
          </div>

          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            ></button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden bg-[#1a1f2e]">
            <div className="flex flex-col pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="flex items-center text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
              >
                <Home className="h-5 w-5 mr-2" />
                Home
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleSignOut();
                }}
                className="flex items-center text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign out
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export { Header };
