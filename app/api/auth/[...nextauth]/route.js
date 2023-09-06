import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user }) {
      const name = user.name;
      const email = user.email;
      console.log(email, name, user.email);
      const upsertUser = await prisma.user.upsert({
        where: {
          email: email,
        },
        update: {
          email: email,
          name: name,
        },
        create: {
          email: email,
          name: name,
        },
      });
      console.log(upsertUser);
      return true;
    },
  },
});

export { handler as GET, handler as POST };
