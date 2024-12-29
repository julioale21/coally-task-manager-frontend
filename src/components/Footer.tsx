"use client";

import Link from "next/link";

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#1a1f2e] border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between md:items-center">
          {/* Copyright */}
          <div className="text-gray-300">
            © {getCurrentYear()} Coally. All rights reserved.
          </div>

          {/* Enlaces útiles */}
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
            >
              GitHub
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
            >
              Twitter
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
