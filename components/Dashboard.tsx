'use client'

import React from "react";
import { Button } from "./ui/button";
import { handleSignOut } from "@/lib/auth/signOutServerAction";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button
          size={"custom"}
          onClick={() => handleSignOut()}
          className="bg-red-500 hover:bg-red-400 py-2 px-3 gap-2 rounded"
        >
          log out
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
