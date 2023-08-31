import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth"
import jwt from 'jsonwebtoken';
import { BASEURL } from "@/assets/constant";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                
                const { password, email } = credentials as any;
                const response = await fetch(`${BASEURL}/api/v1/vendors/signin`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email: email, password: password })
                    })

                const user = await response.json();
                console.log(user, 'user')
                if (!response.ok) {
                    throw new Error(user.message);
                }
                return user.data;
            },
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                return {
                    ...token,
                    ...user,
                };
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (token) {
                session.user.token = token.jwtToken;
                session.user.role = token.role;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.id = token.id;
            }
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
    },
    secret: process.env.NEXTAUTH_SECRET
}


export default NextAuth({ ...authOptions })