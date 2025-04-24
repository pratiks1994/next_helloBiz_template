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

export async function maiSignIn() {
    await signIn("mai-compliance", {
        redirect: true,
        redirectTo: "/home",
    });
}

export const maiSignOut = async () => {
    return await signOut({
        redirect: true,
        redirectTo: "/api/auth/signin",
    });
};
