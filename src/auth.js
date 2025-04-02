import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import DuendeIdentityServer6 from "@auth/core/providers/duende-identity-server6";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub,
        DuendeIdentityServer6({
            clientId: "interactive.confidential",
            clientSecret: "secret",
            issuer: "https://demo.duendesoftware.com",
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            // Add provider information to the session
            if (token.provider) {
                session.provider = token.provider;
            }
            if (token.id_token) {
                session.id_token = token.id_token;
            }
            return session;
        },
        async jwt({ token, account }) {
            // Store the provider and id_token in the JWT
            console.log(account);

            if (account) {
                token.provider = account.provider;
                token.id_token = account.id_token;
            }
            return token;
        },
    },
});
