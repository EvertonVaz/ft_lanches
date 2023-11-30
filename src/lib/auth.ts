import type { NextAuthOptions } from 'next-auth'
import FortyTwoProvider from 'next-auth/providers/42-school'

export const authOptions: NextAuthOptions = {
  providers: [
    FortyTwoProvider({
      clientId: process.env.UID as string,
      clientSecret: process.env.SECRET as string,
    }),
  ],
}
