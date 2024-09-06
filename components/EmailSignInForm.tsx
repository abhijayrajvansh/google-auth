import React, { useState } from "react";
import { Button } from "./ui/button";
import { MdAlternateEmail } from "react-icons/md";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { handleEmailSignIn } from "@/lib/auth/emailSignInServerAction";

const EmailSignInForm = () => {
  const formSchema = z.object({
    email: z.string().email().min(5),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const email = values.email;
    try {
      await handleEmailSignIn(email);
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled placeholder="johndoe@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              
            )}
          />
          <Button disabled
            type="submit"
            size={"custom"}
            className="bg-blue-500 hover:bg-blue-400 py-2 px-3 gap-2 rounded w-full"
          >
            <MdAlternateEmail className="text-3xl text-black p-1 bg-white rounded" />
            Sign In with Email
          </Button>
        </form>
      </Form>
    </>
  );
};

export default EmailSignInForm;
