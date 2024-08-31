"use client";

import React from "react";
import { Button } from "./ui/button";
import { handleGoogleSignIn } from "@/lib/auth/googleSignInServerAction";
import { FcGoogle } from "react-icons/fc";
import EmailSignInForm from "./EmailSignInForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold">Login Page</h1>
        <div className="p-4 bg-white rounded-lg flex flex-col items-center shadow-md">
        <Button
          size={"custom"}
          onClick={() => handleGoogleSignIn()}
          className="bg-blue-500 hover:bg-blue-400 py-2 px-3 gap-2 rounded"
        >
          <FcGoogle className="text-3xl p-1 bg-white rounded" />
          Sign In with Google
        </Button>
        <p className="font-light mt-3">--- or ---</p>
        <EmailSignInForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
