"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const LottieAnimation = dynamic(() => import("../components/LottieAnimation"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-8 sm:p-20">
      <header className="mb-12">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">
          Welcome to Task Manager
        </h1>
        <p className="text-xl sm:text-2xl text-center">
          A simple task management app created as a technical test for Coally.
        </p>
      </header>

      <main className="flex flex-col gap-8 items-center">
        <LottieAnimation />
        <p className="text-lg sm:text-xl text-center max-w-lg">
          This app allows you to create, manage, and track your tasks easily and
          efficiently. It is designed with a clean and intuitive interface,
          inspired by Material Design principles.
        </p>
        <Link
          href="/tasks"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-md transition duration-200"
        >
          Go to Tasks
        </Link>
      </main>

      <footer className="mt-12 text-center">
        <p>
          Created with Next.js and Tailwind CSS by{" "}
          <span className="font-bold">@Julio Romero</span> for Coally.
        </p>
      </footer>
    </div>
  );
}
