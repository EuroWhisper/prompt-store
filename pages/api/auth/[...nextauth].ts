import GithubProvider from 'next-auth/providers/github';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  callbacks: {
    async session({ session, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = user.id;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    // ...add more providers here
  ],
});
