"use server";

import { signIn, signOut } from "@/auth";

export async function githubSignIn() {
    await signIn();
}

export const githubSignOut = async () => {
    return await signOut({
        redirect: true,
        redirectTo: "/",
    });
};
