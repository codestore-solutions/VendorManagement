import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth"

export const authOptions:  NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const response = await fetch("https://app-deliveryagent-dev.azurewebsites.net/api/v1/testing/login",
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({username: credentials?.email, password: credentials?.password})
                    })

                const user = await response.json();
                console.log(user, 'user')

                if (!response.ok) {
                    throw new Error(user.message);
                }
                // If no error and we have user data, return it
                if (response.ok && user) {
                    return user;
                }

                // Return null if user data could not be retrieved
                return null;
            },
            
        })
    ],
    callbacks: {
        signIn: async () => {
            return true
        },
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
    }
}


export default NextAuth({...authOptions})