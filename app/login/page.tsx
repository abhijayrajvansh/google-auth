import Login from "@/components/Login";
import React from "react";
import { redirect } from "next/navigation";
import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";

const login = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (isAuthenticated) {
    redirect ('/dashboard');
  } else {
    return <Login />;
  }
};

export default login;
