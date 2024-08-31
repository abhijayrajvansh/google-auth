"use server";

import { signIn } from "@/lib/auth";

export const handleEmailSignIn = async (email: string) => {
  try {
    await signIn("nodemailer", { email, callbackUrl: '/dashboard1'});
  } catch (error) {
    throw error;
  }
};
