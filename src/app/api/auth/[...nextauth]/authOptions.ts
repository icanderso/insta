// src/app/api/auth/[...nextauth]/authOptions.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // Add scopes to request additional information
      authorization: {
        params: {
          scope: "profile email", // Ensure you request profile and email scopes
        },
      },
    }),
  ],
  // Additional NextAuth options can go here
};

export default NextAuth(authOptions);
