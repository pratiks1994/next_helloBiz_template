// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
// import DuendeIdentityServer6 from "@auth/core/providers/duende-identity-server6";

// export const { handlers, signIn, signOut, auth } = NextAuth({

//     providers: [
//         {
//             id: "mai-compliance",
//             name: "MAI Compliance",
//             type: "oauth",
//             wellKnown: "https://maicompliance.ie/azure_sso/.well-known/openid-configuration",
//             authorization: { params: { scope: "openid profile" } },

//             httpOptions: {
//                 rejectUnauthorized: false, // WARNING: Only use this in development!
//                 timeout: 10000,
//             },
//             issuer: "https://maicompliance.ie/azure_sso",
//             idToken: true,
//             clientId: process.env.MAI_CLIENT_ID,
//             clientSecret: process.env.MAI_CLIENT_SECRET,
//             checks: ["pkce", "state"],

//             profile(profile) {
//                 return {
//                     id: profile.sub,
//                     name: profile.name,
//                     email: profile.email,
//                 };
//             },
//         },

//     ],
//     session: {
//         strategy: "jwt", // Use JWT-based sessions
//     },
//     callbacks: {
//         async jwt({ token, account }) {
//             // Persist the access token in the JWT
//             if (account) {
//                 token.accessToken = account.access_token;
//             }
//             return token;
//         },
//         async session({ session, token }) {
//             // Add access token to the session
//             session.accessToken = token.accessToken;
//             return session;
//         },
//     },
// });
