"use server";

import { signIn, signOut } from "@/auth";

export async function githubSignIn() {
    return await signIn();
}

export const githubSignOut = async () => {
    await signOut();
};
