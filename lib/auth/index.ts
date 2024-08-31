import NextAuth from "next-auth";
import Google from 'next-auth/providers/google';
import Nodemailer from 'next-auth/providers/nodemailer'
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/database";



export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true, // prevents using localhost in production env
  adapter: DrizzleAdapter(db),
  secret: process.env.AUTH_SECRET as string,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // expires after 30 days
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true, // merging magic link acc with google signin in as one account
    }),
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async jwt ({token, user}) {
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },

    async session ({session, token}) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
        },
      };
    },
  },
});

