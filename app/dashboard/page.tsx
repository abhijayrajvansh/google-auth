import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";
import React from "react";
import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";

const page = async () => {
  const isAuthenticated = await checkIsAuthenticated();
  
  if (!isAuthenticated) {
    redirect("/login");
  } else {
    return <Dashboard />;
  }
};

export default page;
