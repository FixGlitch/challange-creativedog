"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../utils/api";
import LoginTemplate from "@/components/templates/LoginTemplate";
import LoginForm from "@/components/molecules/LoginForm";

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const data = await loginUser(values.email, values.password);
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("user_id", data.user.id);
      router.push("/");
    } catch {
      setError("Error al iniciar sesión");
    }
  }

  return (
    <LoginTemplate>
      <LoginForm onSubmit={handleSubmit} />
      {error && <p>{error}</p>}
    </LoginTemplate>
  );
};

export default LoginPage;
