"use client";

import ButtonIcon from "@/components/ui/ButtonIcon";
import { signOut } from "next-auth/react";
import React from "react";
import { MdLogout } from "react-icons/md";

function SignOutButton() {
    const handleSignOut = async (e) => {
        e.preventDefault();
        await signOut({
            redirect: true,
            redirectTo: "/api/auth/signin",
        });
    };
    return (
        <ButtonIcon type="submit" aria-label="logout" onClick={handleSignOut}>
            <MdLogout />
        </ButtonIcon>
    );
}

export default SignOutButton;
