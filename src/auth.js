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
});
