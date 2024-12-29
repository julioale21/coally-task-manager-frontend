"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface LoginFormInputs {
  email: string;
  password: string;
}

export const useLogin = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError(
          "Ocurrio un error al iniciar sesion. Revisa tu email y contraseña."
        );
        return;
      }

      router.push("/tasks");
      router.refresh();
    } catch (err) {
      console.log(err);
      setError(
        "Ocurrio un error al iniciar sesion. Revisa tu email y contraseña."
      );
    }
  };
  return {
    error,
    showPassword,
    setShowPassword,
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitting,
  };
};
