import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Your App",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1f2e] py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </main>
  );
}
