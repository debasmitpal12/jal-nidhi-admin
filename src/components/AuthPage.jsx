// src/components/AuthPage.jsx
import React from "react";
import AuthForm from "./AuthForm";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-slate-950 via-slate-900 to-black 
      animate-gradientMove px-6">
      <AuthForm />
    </div>
  );
}
