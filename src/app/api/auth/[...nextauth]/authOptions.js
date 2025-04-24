export const authOptions = {
    providers: [
        {
            id: "mai-compliance",
            name: "MAI Compliance",
            type: "oauth",
            wellKnown: "https://maicompliance.ie/azure_sso/.well-known/openid-configuration",
            authorization: { params: { scope: "openid profile" } },
            idToken: true,
            clientId: process.env.MAI_CLIENT_ID,
            clientSecret: process.env.MAI_CLIENT_SECRET,
            checks: ["pkce", "state"],
            httpOptions: {
                rejectUnauthorized: false, // WARNING: Only use this in development!
                timeout: 10000,
            },
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    givenName: profile.given_name,
                    familyName: profile.family_name,
                    emailVerified: profile.email_verified,
                };
            },
        },
    ],
    session: {
        strategy: "jwt", // Use JWT-based sessions
    },
    callbacks: {
        async jwt({ token, account }) {
            // Persist the access token in the JWT
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            // Add access token to the session
            session.accessToken = token.accessToken;
            return session;
        },
    },
};
